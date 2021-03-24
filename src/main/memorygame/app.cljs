(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))
(def card-clicked (r/atom nil))
(defonce card-store (r/atom [[false false] [false false]]))
(defn deck-first [[a b]]
      [(dec a) b])
(defn card [n i]
      "return hiccup for card n"
      [:div.flip-card
       [:div.flip-card-inner
        {:class    [(when (get-in @card-store [(dec n) i]) "flip")]
         :on-click (fn []
                       (when (not (get-in @card-store [(dec n) i]))
                             (cond (= nil @card-clicked) (do (swap! card-store (fn [card-store] (assoc-in card-store [(dec n) i] true)))
                                                             (reset! card-clicked [n i]))
                                   (= n (first @card-clicked)) (do (swap! card-store (fn [card-store] (assoc-in card-store [(dec n) i] true)))
                                                                   (reset! card-clicked nil))
                                   :else (do (swap! card-store (fn [card-store] (assoc-in card-store [(dec n) i] true)))
                                             (js/setTimeout
                                               (let [x @card-clicked]
                                                    (fn []
                                                        (swap! card-store (fn [card-store] (assoc-in card-store [(dec n) i] false)))
                                                        (swap! card-store (fn [card-store] (assoc-in card-store (deck-first x) false)))))
                                               1000)
                                             (reset! card-clicked nil)
                                             ))))}
        [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
        [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
        ]
       ])

(defn miniapp []
      [:table
       [:tbody
        [:tr
         [:td [card 1 0]]
         [:td [card 1 1]]
         ]
        [:tr
         [:td [card 2 0]]
         [:td [card 2 1]]
         ]
        ]]
      ;[:div#app]
      ;[:script {:src "scripts/core.js"}]
      )
; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))

