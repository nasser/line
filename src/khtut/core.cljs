(ns khtut.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

;; https://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg
(defn client-to-page [event]
  (let [svg (js/document.querySelector "svg")
        pt (.createSVGPoint svg)]
    (set! (.-x pt) (.-clientX event))
    (set! (.-y pt) (.-clientY event))
    (.matrixTransform pt (.. svg getScreenCTM inverse))))

(defn atan2 [a b] (js/Math.atan2 a b))
(defn sin [x] (js/Math.sin x))
(defn cos [x] (js/Math.cos x))
(defn pow [x a] (js/Math.pow x a))

(defn lerp [t a b]
  (+ (* (- 1 t) a)
     (* t b)))

(defn bezier [t a b c d]
  (+ (* a
        (pow (- 1 t) 3))
     (* b 3 t
        (pow (- 1 t) 2))
     (* c 3 (- 1 t)
        (pow t 2))
     (* d
        (pow t 3))))

(defn next-letter [l]
  (js/String.fromCharCode (inc (.charCodeAt l 0))))

(defn point* 
  ([] (point* 300 300 js/Math.PI 30 -2 25))
  ([x y] (assoc (point*) :x x :y y))
  ([x y tangent-angle tangent-size angle width]
   {:x x
    :y y
    :tangent-angle tangent-angle
    :tangent-size tangent-size
    :angle angle
    :width width}))

(defn stroke* [] [(point*)])

(defn strokes* [] [(stroke*)])

(defonce state
  (r/atom
    [{:string "ا" :strokes (strokes*)}]))

(defn stroke-map [letters]
  (reduce (fn [m {:keys [string strokes]}]
            (update m string (fnil conj #{}) strokes))
          {}
          letters))

(defn translate [stroke dx dy]
  (-> stroke
      (update :x + dx)
      (update :y + dy)))

(defn find-next [string alphabet]
  (let [l (first string) ;; TODO match multiple letters as well
        s (-> alphabet (get l) first) ;; TODO pick stroke based on best tangents, etc 
        ]
    [l s]))

(comment
  (redraw-canvas (vector (vec (flatten (string->strokes "اب" (-> @state stroke-map))))))
  (string->strokes "اب" (-> @state stroke-map)))

(defn string->strokes [string alphabet]
  (loop [strokes []
         string string
         origin (point* 500 400)]
    (let [[letter stroke] (find-next string alphabet)
          string* (.substr string (count letter))
          initial (-> stroke first first)
          px (+ (* (:tangent-size origin)
                   (cos (:tangent-angle origin)))
                (:x origin))
          py (+ (* (:tangent-size origin)
                   (sin (:tangent-angle origin)))
                (:y origin))
          dx (- px (:x initial))
          dy (- py (:y initial))
          stroke* (mapv (fn [s] (mapv #(translate % dx dy) s)) stroke)]
      (println "stroke*" stroke*)
      (if (empty? string*)
        (into strokes stroke*)
        (recur (into strokes stroke*)
               string*
               (-> stroke* last last))))))

(def ui-state
  (r/atom
    {:show-handles? true
     :show-centerlines? false
     :current-string 0
     :current-stroke 0}))

(defn current-string []
  (:current-string @ui-state))

(defn current-strokes []
  (get-in @state [(current-string) :strokes]))

(def stroke-colors
  (cycle ["black"])
  ; (cycle ["red" "#000000" "#113CC1" "#35BE0A"])
  )

(defn rasterize-stroke [ctx s color]
  (set! (.-fillStyle ctx) color)
  (set! (.-strokeStyle ctx) "Red")
  (let [pairs (partition 2 1 s)]
    (doseq [[{x1 :x y1 :y angle1 :angle 
              width1 :width tangle1 :tangent-angle tsize1 :tangent-size}
             {x2 :x y2 :y angle2 :angle 
              width2 :width tangle2 :tangent-angle tsize2 :tangent-size}]
            pairs]
      (println "???" tangle1)
      (let [control1-x (+ x1 (* tsize1 (cos tangle1)))
            control1-y (+ y1 (* tsize1 (sin tangle1)))
            control2-x (- x2 (* tsize2 (cos tangle2)))
            control2-y (- y2 (* tsize2 (sin tangle2)))
            angle1+90 (+ angle1 (* 90 (/ 180 js/Math.PI)))
            angle2+90 (+ angle2 (* 90 (/ 180 js/Math.PI)))
            top1-x (- x1 (* width1 (cos angle1)))
            top1-y (- y1 (* width1 (sin angle1)))
            bot1-x (+ x1 (* width1 (cos angle1)))
            bot1-y (+ y1 (* width1 (sin angle1)))
            top2-x (- x2 (* width2 (cos angle2)))
            top2-y (- y2 (* width2 (sin angle2)))
            bot2-x (+ x2 (* width2 (cos angle2)))
            bot2-y (+ y2 (* width2 (sin angle2)))]
        (doseq [t (range 0 1 0.005)]
          (let [x* (bezier t x1 control1-x control2-x x2)
                y* (bezier t y1 control1-y control2-y y2)
                angle* (lerp t angle1 angle2)
                width* (lerp t width1 width2)
                thickness* 3]
            (.beginPath ctx)
            (.ellipse ctx x* y* width* thickness* angle* 0 (* 2 js/Math.PI))
            (.fill ctx)))))))

(defn rasterize-segment
  [ctx q
   {x1 :x y1 :y angle1 :angle width1 :width tangle1 :tangent-angle tsize1 :tangent-size}
   {x2 :x y2 :y angle2 :angle width2 :width tangle2 :tangent-angle tsize2 :tangent-size}]
  (let [control1-x (+ x1 (* tsize1 (cos tangle1)))
        control1-y (+ y1 (* tsize1 (sin tangle1)))
        control2-x (- x2 (* tsize2 (cos tangle2)))
        control2-y (- y2 (* tsize2 (sin tangle2)))]
    (doseq [t (range 0 q 0.005)]
      (let [x* (bezier t x1 control1-x control2-x x2)
            y* (bezier t y1 control1-y control2-y y2)
            angle* (lerp t angle1 angle2)
            width* (lerp t width1 width2)]
        (.beginPath ctx)
        (.ellipse ctx x* y* width* 3 angle* 0 (* 2 js/Math.PI))
        (.fill ctx)))))

(defn redraw-canvas [strokes]
  (let [canvas (js/document.querySelector "canvas")
        current-stroke (@ui-state :current-stroke)
        show-handles? (@ui-state :show-handles?)
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (doall
      (map (fn [s]
             (rasterize-stroke ctx s "black"))
           strokes))))

(defn handle-fn
  ([f]
   (fn [e]
     (let [drag-fn
           (fn [e*]
             (f e*)
             (redraw-canvas (current-strokes)))]
       (.addEventListener js/window "mousemove" drag-fn)
       (.addEventListener js/window "mouseup"
                          #(.removeEventListener js/window "mousemove" drag-fn)))))
  ([cursor f]
   (fn [e]
     (let [d (f cursor e)
           drag-fn
           (fn [e*]
             (d e*)
             (redraw-canvas (current-strokes)))]
       (.addEventListener js/window "mousemove" drag-fn)
       (.addEventListener js/window "mouseup"
                          #(.removeEventListener js/window "mousemove" drag-fn))))))

(defn cross [x y class size attrs]
  [:g (or attrs {})
   [:line {:class (name class)
           :x1 (+ size x) :y1 (+ size y)
           :x2 (- x size) :y2 (- y size)}]
   [:line {:class (name class)
           :x1 (- x size) :y1 (+ size y)
           :x2 (+ size x) :y2 (- y size)}]])

(defn box [x y class size attrs]
  [:rect (merge {:class (name class)
                 :x (- x (/ size 2))
                 :y (- y (/ size 2))
                 :width size
                 :height size}
                attrs)])

(defn drag-interaction [cursor evt-init]
  (let [down-coord (client-to-page evt-init)
        offset-x (- (:x @cursor) (.-x down-coord))
        offset-y (- (:y @cursor) (.-y down-coord))]
    (fn [evt-drag]
      (let [p (client-to-page evt-drag)]
        (swap! cursor assoc :x (+ (.-x p) offset-x))
        (swap! cursor assoc :y (+ (.-y p) offset-y))))))

(defn distance [x1 y1 x2 y2]
  (js/Math.sqrt
    (+ (js/Math.pow (- x2 x1) 2)
       (js/Math.pow (- y2 y1) 2))))

(defn drag-handle [c]
  (let [{:keys [x y]} @c]
    [:g
     ;[cross x y :handle 6]
     [box x y :handle 6
      {:on-mouse-down
       (handle-fn c drag-interaction)}]]))

(defn nib-interaction [cursor]
  (let [origin-x (:x @cursor)
        origin-y (:y @cursor)]
    (fn [evt-drag]
      (let [ctrl? (.-ctrlKey evt-drag)
            shift? (.-shiftKey evt-drag)
            p (client-to-page evt-drag)
            srad (atan2 (- (.-y p) origin-y)
                        (- (.-x p) origin-x))]
        (if shift?
          (swap! cursor assoc :width
                 (distance (.-x p) (.-y p)
                           origin-x origin-y))
          (swap! cursor assoc :angle srad))))))

(defn nib-handle [data]
  (let [{:keys [x y angle width]} @data
        x2 (- x (* width (cos angle)))
        y2 (- y (* width (sin angle)))
        x3 (+ x (* width (cos angle)))
        y3 (+ y (* width (sin angle)))]
    [:g
     [:line.rotate {:x1 x :y1 y :x2 x2 :y2 y2}]
     [:line.rotate {:x1 x :y1 y :x2 x3 :y2 y3}]
     [:circle.rotate {:cx x3 :cy y3 :r 3
                      :on-mouse-down
                      (handle-fn data nib-interaction)}]]))

(defn tangent-interaction [cursor]
  (let [origin-x (:x @cursor)
        origin-y (:y @cursor)]
    (fn [evt-drag]
      (let [p (client-to-page evt-drag)
            shift? (.-shiftKey evt-drag)
            srad (atan2 (- (.-y p) origin-y)
                        (- (.-x p) origin-x))]
        (if shift?
          (swap! cursor assoc :tangent-size
                 (distance (.-x p) (.-y p)
                           origin-x origin-y))
          (swap! cursor assoc :tangent-angle srad))))))

(defn tangent-handle [data]
  (let [{:keys [x y tangent-angle tangent-size]} @data
        arrow-degrees (+ 180 (* tangent-angle (/ 180 js/Math.PI)))
        x2 (- x (* tangent-size (cos tangent-angle)))
        y2 (- y (* tangent-size (sin tangent-angle)))
        x3 (+ x (* tangent-size (cos tangent-angle)))
        y3 (+ y (* tangent-size (sin tangent-angle)))]
    [:g
     [:line.tangent {:x1 x :y1 y :x2 x2 :y2 y2}]
     [:line.tangent {:x1 x :y1 y :x2 x3 :y2 y3}]
     [:circle.tangent {:cx x3 :cy y3 :r 3
                       :on-mouse-down (handle-fn data tangent-interaction)}]]))

(defn handle [data]
  [:g
   [nib-handle data]
   [tangent-handle data]
   [drag-handle data]])

(defn handles [data]
  (into
    [:g]
    (map
      #(vector handle (r/cursor data [%]))
      (range (count @data)))))

(defn strokes [mappings]
  (into
    [:g]
    (let [current-stroke (@ui-state :current-stroke)]
      [[handles (r/cursor mappings [(current-string) :strokes current-stroke])]])))

(defn toggle [atm key]
  (fn [e] (swap! atm update key not)))

(defn letter-box []
  [:input#letter
   {:value (get-in @state [(current-string) :string])
    :on-change #(swap! state assoc-in
                       [(current-string) :string]
                       (.. % -target -value))
    :type "text"}])

(defn overview-letter [n letter strokes]
  (let [image-id (str "thumbnail-" n)
        img (js/document.querySelector (str "#" image-id))]
    (when (and img (= n (current-string)))
      (set! (.-src img)
            (.toDataURL (js/document.querySelector "canvas"))))
    [:div
     {:class (str "letter "
                  (when (= n (current-string)) "selected"))
      :on-mouse-down #(do (swap! ui-state assoc :current-string n)
                        (swap! ui-state assoc :current-stroke 0)
                        (redraw-canvas (current-strokes)))}
     [:img {:id image-id}]
     ; [:canvas {:width 100 :height 100}]
     [:p letter]]))

(defn new-letter []
  [:div.letter.new
   {:on-mouse-down
    #(let [l* (next-letter (last (map :string @state)))]
       (swap! state conj {:string l* :strokes (strokes*)})
       (swap! ui-state assoc :current-string (dec (count @state)))
       (redraw-canvas (current-strokes)))}
   [:p "+"]])

(defn overview-letters [state]
  (let [s @state
        ls (map :string s)
        strokes (map :strokes s)]
    (into [:div#letters]
          (conj
            (mapv #(overview-letter %1 %2 %3)
                 (range) ls strokes)
            [new-letter]))))

(defn drawing []
  [:div#drawing
   ; [:img.reference {:src "test.png"}]
   [:canvas {:width 600 :height 600}]
   [:svg {:class (when-not (:show-handles? @ui-state) "hidden")
          :width "600px" :height "600px"
          :viewBox "0 0 600 600"}
    [strokes state]]
   [letter-box]
   [overview-letters state]])

(defn rasterizer []
  [:div#rasterizer
   [:input {:type "text"}]
   [:canvas {:width 600 :height 600}]])

(defn app []
  [:div
   [:h2 "الخطاط الصغير"]
   [:p [:em "رمزي ناصر - عمل جاري"]]
   [drawing]
   ; [rasterizer]
   ])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [app] (.getElementById js/document "app"))
  (redraw-canvas (current-strokes)))

(set!
  js/document.onkeyup
  (fn [e]
    (when (.-shiftKey e)
      (cond
        (= "ArrowRight" (.-code e))
        (swap! ui-state update :current-stroke inc)
        (= "ArrowLeft" (.-code e))
        (swap! ui-state update :current-stroke dec)
        (= "KeyH" (.-code e))
        (swap! ui-state update :show-handles? not)
        (= "KeyA" (.-code e))
        (swap! state update-in [(current-string) :strokes (dec (count (current-strokes)))]
               conj (last (last (current-strokes))))
        (= "KeyD" (.-code e))
        (swap! state update-in [(current-string) :strokes (dec (count (current-strokes)))]
               (comp vec drop-last))
        (= "KeyS" (.-code e))
        (do (swap! state update-in [(current-string) :strokes]
                   conj (last (current-strokes)))
          (swap! ui-state update :current-stroke inc))
        (= "KeyF" (.-code e))
        (do (swap! state update-in [(current-string) :strokes] (comp vec drop-last))
          (swap! ui-state update :current-stroke dec))))
    (redraw-canvas (current-strokes))))

(defn init! []
  (mount-root))
