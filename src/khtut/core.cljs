(ns khtut.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(defonce state
  (r/atom
    [[{:x 300
       :y 300
       :tangent-angle js/Math.PI
       :tangent-size 30
       :angle -2
       :width 25}]]))

(defonce ui-state
  (r/atom
    {:show-handles? true
     :show-centerlines? false}))

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

(def stroke-colors
  (cycle ["black"])
  ; (cycle ["red" "#000000" "#113CC1" "#35BE0A"])
  )

(defn rasterize-stroke [ctx s color]
  (set! (.-fillStyle ctx) color)
  (set! (.-strokeStyle ctx) "Red")
  (let [pairs (partition 2 1 s)]
    (doseq [[{x1 :x y1 :y angle1 :angle angle-control1 :angle-control
              width1 :width tangle1 :tangent-angle tsize1 :tangent-size}
             {x2 :x y2 :y angle2 :angle angle-control2 :angle-control
              width2 :width tangle2 :tangent-angle tsize2 :tangent-size}]
            pairs]
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
                ; angle* (bezier t angle1 (+ angle1 (* 0.01 angle-control1)) ; (* 0.0 angle-control1)
                ;                 angle2 (+ angle2 (* 0.01 angle-control2))) ; (* 0.0 angle-control2))
                ; width* (bezier t width1  angle-control1*
                ;                  width2 angle-control2*)
                thickness* 3]
            (.beginPath ctx)
            (.ellipse ctx x* y* width* thickness* angle* 0 (* 2 js/Math.PI))
            (.fill ctx)
            ))
        ; (set! (.-strokeStyle ctx) "white")
        ; (.beginPath ctx)
        ; (.moveTo ctx x1 y1)
        ; (.bezierCurveTo ctx control1-x control1-y control2-x control2-y x2 y2)
        ; (.stroke ctx)
        ))))

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

(defn rasterize-stroke-pct [ctx q s color]
  (set! (.-fillStyle ctx) color)
  (let [pairs (partition 2 1 s)
        t (* q (count pairs))
        complete-pair-count (js/Math.floor t)
        last-pair-pct (- t complete-pair-count)]
    (js/console.log "rasterize-stroke-pct" q t last-pair-pct)
    (doseq [[a b] (take complete-pair-count pairs)]
      (rasterize-segment ctx 1 a b))
    (when-not (= 1 q)
      (let [[a b] (nth pairs complete-pair-count)]
        (rasterize-segment ctx last-pair-pct a b)))))

(defn redraw-canvas [strokes]
  (let [canvas (js/document.querySelector "canvas")
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (doall
      (map #(rasterize-stroke ctx %1 %2)
           strokes stroke-colors))))

(defn redraw-canvas-pct [strokes t]
  (let [canvas (js/document.querySelector "canvas")
        ctx (.getContext canvas "2d")
        complete-stroke-count (js/Math.floor t)
        last-stroke-pct (- t complete-stroke-count)]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (doall
      (map #(rasterize-stroke-pct ctx 1 %1 %2)
           (take complete-stroke-count strokes)
           stroke-colors))
    (rasterize-stroke-pct
      ctx last-stroke-pct
      (nth strokes complete-stroke-count)
      (first (drop complete-stroke-count stroke-colors)))))

(defn handle-fn
  ([f]
   (fn [e]
     (let [drag-fn
           (fn [e*]
             (f e*)
             (redraw-canvas @state))]
       (.addEventListener js/window "mousemove" drag-fn)
       (.addEventListener js/window "mouseup"
                          #(.removeEventListener js/window "mousemove" drag-fn)))))
  ([cursor f]
   (fn [e]
     (let [d (f cursor e)
           drag-fn
           (fn [e*]
             (d e*)
             (redraw-canvas @state))]
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
   [drag-handle data]
   ])

(defn handles [data]
  (into
    [:g]
    (map
      #(vector handle (r/cursor data [%]))
      (range (count @data)))))

(defn strokes [data]
  (into
    [:g]
    (map
      #(vector handles (r/cursor data [%]))
      (range (count @data)))))

(defn toggle [atm key]
  (fn [e] (swap! atm update key not)))

(defn app []
  [:div
   [:h2 "الخطاط الصغير"]
   [:p [:em "رمزي ناصر - عمل جاري"]]
   [:p "A=أضف نقطة تحكم، D=أزال نقطة تحكم، H=إخفاء/أظهر النقاط"]
   [:div#drawing
    ; [:img.reference {:src "test.png"}]
    [:canvas {:width 600 :height 600}]
    [:svg {:class (when-not (:show-handles? @ui-state) "hidden")
           :width "600px" :height "600px"
           :viewBox "0 0 600 600"}
     [strokes state]]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [app] (.getElementById js/document "app"))
  (redraw-canvas @state))

(def progress (atom 0))

(defn download-canvas [canvas filename]
  (let [link (js/document.createElement "a")
        data-url (.toDataURL canvas)]
    (set! (.-href link) data-url)
    (set! (.-download link) filename)
    (.click link)))

(defn download-animation [step]
  (let [canvas (js/document.querySelector "canvas")
        strokes @state
        r (range 0 (count strokes) step)
        frame-count (count r)]
    (doall 
      (map 
        (fn [t i]
          (redraw-canvas-pct strokes t)
          (download-canvas canvas (str "animation-" (.slice (str "000000" i) -6) ".png")))
        r (range)))))

(set!
  js/document.onkeyup
  (fn [e]
    (cond
      (= "ArrowRight" (.-code e))
      (do
        (swap! progress + 0.05)
        (js/console.log @progress)
        (redraw-canvas-pct @state @progress))
      (= "ArrowLeft" (.-code e))
      (do
        (swap! progress - 0.05)
        (js/console.log @progress)
        (redraw-canvas-pct @state @progress))
      (= "KeyR" (.-code e))
      (redraw-canvas @state)
      (= "KeyH" (.-code e))
      (swap! ui-state update :show-handles? not)
      (= "KeyA" (.-code e))
      (swap! state update-in [(dec (count @state))]
             conj (last (last @state)))
      (= "KeyD" (.-code e))
      (do
        (swap! state update-in [(dec (count @state))]
               (comp vec drop-last))
        (redraw-canvas @state))
      (= "KeyS" (.-code e))
      (swap! state conj (last @state))
      (= "KeyF" (.-code e))
      (swap! state (comp vec drop-last)))))

(defn init! []
  (mount-root))
