(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def card-clicked (r/atom nil))
(defonce card-store
  (mapv (fn [x]
          [(r/atom false) (r/atom false)])
        (range 8)))

(defn dec-first [[a b]]
  [(dec a) b])

(defn card [n i]
  "return hiccup for card n"
  [:div.flip-card
   [:div.flip-card-inner
    {:class [(when @(get-in card-store [(dec n) i]) "flip")]
     :on-click
     (fn []
       (js/console.log @(get-in card-store [(dec n) i]))
       (when (not @(get-in card-store [(dec n) i]))
         (cond (= nil @card-clicked) (do (reset! (get-in card-store [(dec n) i]) true)
                                         (reset! card-clicked [n i]))
               (= n (first @card-clicked)) (do (reset! (get-in card-store [(dec n) i]) true)
                                               (reset! card-clicked nil))
               :else (do (reset! (get-in card-store [(dec n) i]) true)
                         (js/setTimeout
                          (let [x @card-clicked]
                            (fn []
                              (reset! (get-in card-store [(dec n) i]) false)
                              (reset! (get-in card-store (dec-first x)) false)))
                          1000)
                         (reset! card-clicked nil)
                         ))))}
    [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
    [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
    ]
   ])

(defn miniapp []
  (let [cards (shuffle (for [n (range 1 9)
                             i (range 2)]
                         [card n i]))]
    [:table
     [:tbody
      (for [row (range 4)]
        [:tr
         (for [col (range 4)]
           [:td (cards (+ (* 4 row) col))])
         ])
      ]])
  )
                                        ; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
  (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
  (js/console.log "reload...")
  (run))

