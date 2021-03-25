(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def card-clicked (r/atom nil))
(def card-store
  (mapv (fn [_]
          [(r/atom false) (r/atom false)])
        (range 8)))
(def score [(r/atom 0) (r/atom 0)])
(def player-in-turn (r/atom 0))

(defn dec-first [[a b]]
  [(dec a) b])

(def hidden?
  (mapv (fn [_]
          (r/atom false))
        (range 8)))

(defn card [n i]
  "return hiccup for card n"
  [:div.flip-card
   [:div.flip-card-inner
    {:class [(when @(get-in card-store [(dec n) i]) "flip")
             (when @(hidden? (dec n)) "card-hide")]
     :on-click
     (fn []
       (when (not @(get-in card-store [(dec n) i]))
         (cond (= nil @card-clicked) (do (reset! (get-in card-store [(dec n) i]) true)
                                         (reset! card-clicked [n i]))
               (= n (first @card-clicked)) (do (reset! (get-in card-store [(dec n) i]) true)
                                               (reset! card-clicked nil)
                                               (swap! (score @player-in-turn) inc)
                                               (js/setTimeout
                                                (fn []
                                                  (reset! (hidden? (dec n)) true))
                                                1000))
               :else (do (reset! (get-in card-store [(dec n) i]) true)
                         (js/setTimeout
                          (let [x @card-clicked]
                            (fn []
                              (reset! (get-in card-store [(dec n) i]) false)
                              (reset! (get-in card-store (dec-first x)) false)))
                          1000)
                         (reset! card-clicked nil)
                         (swap! player-in-turn (fn [i] (- 1 i)))
                         ))))}
    [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
    [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
    ]
   ])

(def cards (shuffle (for [n (range 1 9)
                          i (range 2)]
                      [card n i])))

(defn miniapp []
  [:table
   [:tbody
    [:tr
     [:td
      [:table
       [:tbody
        (for [row (range 4)]
          [:tr
           (for [col (range 4)]
             [:td (cards (+ (* 4 row) col))])
           ])
        ]]]
    [:tr
     [:td.score-board
      [:th "SCORE BOARD"]
      [:p {:class (when (= 0 @player-in-turn) "in-turn")}
       (str "Player 1: " @(score 0))]
      [:br]
      [:p {:class (when (= 1 @player-in-turn) "in-turn")}
       (str "Player 2: " @(score 1))]
      ]]
     ]]
   ]
  )

;; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
  (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
  (js/console.log "reload...")
  (run))

