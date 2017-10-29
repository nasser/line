(ns khtut.core
    (:require
      [reagent.core :as r]))

;; -------------------------
;; Views

(def state
  (r/atom
    [{:x 300
      :y 300
      ;; TODO hobby spline 
      :tangent-angle js/Math.PI
      :tangent-size 30
      :angle -2
      :width 25}]))

(def ui-state
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

(defn redraw-canvas [s]
  (let [canvas (js/document.querySelector "canvas")
        ctx (.getContext canvas "2d")
        pairs (partition 2 1 s)]
    (.clearRect ctx 0 0 (.-width canvas) (.-height canvas))
    (doseq [[{x1 :x y1 :y angle1 :angle width1 :width tangle1 :tangent-angle tsize1 :tangent-size}
             {x2 :x y2 :y angle2 :angle width2 :width tangle2 :tangent-angle tsize2 :tangent-size}]
            pairs]
      (let [control1-x (+ x1 (* tsize1 (cos tangle1)))
            control1-y (+ y1 (* tsize1 (sin tangle1)))
            control2-x (- x2 (* tsize2 (cos tangle2)))
            control2-y (- y2 (* tsize2 (sin tangle2)))]
        (doseq [t (range 0 1 0.005)]
          (let [x* (bezier t x1 control1-x control2-x x2)
                y* (bezier t y1 control1-y control2-y y2)
                angle* (lerp t angle1 angle2)
                width* (lerp t width1 width2)]
            (.beginPath ctx)
            (.ellipse ctx x* y* width* 2 angle* 0 (* 2 js/Math.PI))
            (.fill ctx)))))))

(defn handle-fn [cursor f]
  (fn [e]
    (let [d (f cursor e)
          drag-fn
          (fn [e*]
            (d e*)
            (redraw-canvas @state))]
      (.addEventListener js/window "mousemove" drag-fn)
      (.addEventListener js/window "mouseup"
                         #(.removeEventListener js/window "mousemove" drag-fn)))))

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
    [:circle.handle
     {:cx x :cy y :r 6
      :on-mouse-down
      (handle-fn c drag-interaction)}]))

(defn nib-interaction [cursor]
  (let [origin-x (:x @cursor)
        origin-y (:y @cursor)]
    (fn [evt-drag]
      (let [p (client-to-page evt-drag)
            srad (atan2 (- (.-y p) origin-y)
                        (- (.-x p) origin-x))]
        (swap! cursor assoc :angle srad)
        (swap! cursor assoc :width
               (distance (.-x p) (.-y p)
                         origin-x origin-y))))))

(defn nib-handle [data]
  (let [{:keys [x y angle width]} @data
        x2 (- x (* width (cos angle)))
        y2 (- y (* width (sin angle)))
        x3 (+ x (* width (cos angle)))
        y3 (+ y (* width (sin angle)))]
    [:g
     [:line.handle {:x1 x :y1 y :x2 x2 :y2 y2}]
     [:line.handle {:x1 x :y1 y :x2 x3 :y2 y3}]
     [:circle.rotate {:cx x3 :cy y3 :r 3
                      :on-mouse-down
                      (handle-fn data nib-interaction)}]]))

(defn tangent-interaction [cursor]
  (let [origin-x (:x @cursor)
        origin-y (:y @cursor)]
    (fn [evt-drag]
      (let [p (client-to-page evt-drag)
            srad (atan2 (- (.-y p) origin-y)
                        (- (.-x p) origin-x))]
        (swap! cursor assoc :tangent-angle srad)
        (swap! cursor assoc :tangent-size
               (distance (.-x p) (.-y p)
                         origin-x origin-y))))))

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
      #(vector handle (r/cursor state [%]))
      (range (count @state)))))

(defn toggle [atm key]
  (fn [e] (swap! atm update key not)))

(defn app []
  [:div
   [:h2 "الخطاط الصغير"]
   [:p [:em "رمزي ناصر - عمل جاري"]]
   [:p "A=أضف نقطة تحكم، D=أزال نقطة تحكم، H=إخفاء/أظهر النقاط"]
   [:div#drawing
    [:canvas {:width 600 :height 600}]
    [:svg {:class (when-not (:show-handles? @ui-state) "hidden")
           :width "600px" :height "600px"
           :viewBox "0 0 600 600"}
     [handles state]]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [app] (.getElementById js/document "app")))

(set!
  js/document.onkeyup
  (fn [e]
    (cond
      (= "KeyH" (.-code e))
      (swap! ui-state update :show-handles? not)
      (= "KeyA" (.-code e))
      (reset!
        state
        (conj @state (last @state)))
      (= "KeyD" (.-code e))
      (reset!
        state
        (-> @state drop-last vec)))))

(defn init! []
  (mount-root))
