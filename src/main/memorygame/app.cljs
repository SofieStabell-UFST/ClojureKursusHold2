(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def tilstand (r/atom {
 :næstespiller :player1
 :player1 {
           :points 0
           :name "Peter"
           :antalvundnespil 0
           }
 :player2 {
           :points 0
           :name "Shane"
           :antalvundnespil 0
           }
 }))


(defn tegn-felt [x]
      [:div.col
       [:div.flip-card
        [:div.flip-card-inner
         [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
         [:div.flip-card-back [:img {:src (str "images/halloween-" x ".png")}]]]]])


(defn generer-billedrækken [x] (shuffle (concat (range 1 (inc x)) (range 1 (inc x)))))


(defn miniapp []
      (let [
            billedrækken (zipmap (range 1 17) (shuffle (concat (range 1 9) (range 1 9))))
            funktionen (fn [xs] [:td {:id (str "felt-" (first xs))} (tegn-felt (last xs))])
            player1_points 0
            player2_points 0
            ]

     [:div.hele-molevitten
      [:table {:border 1}
       [:tr
        (map funktionen (take 4 billedrækken))
        ]
       [:tr
        (map funktionen (take 4 (drop 4 billedrækken)))]
       [:tr
        (map funktionen (take 4 (drop 8 billedrækken)))]
       [:tr
        (map funktionen (take 4 (drop 12 billedrækken)))]
       ]

       [:div.scoreboard
        [:table
         [:tbody
          [:tr
            [:td "Ny runde"]
            [:td [:button "Ny runde!"]]
           ]
          [:tr
           [:td "Player 1"]
           [:td player1_points]
           ]
          [:tr
           [:td "Player 2"]
           [:td player2_points]
           ]
          [:tr
           [:td "Næste tur"]
           [:td (@tilstand :næstespiller ) ]
           ]
          [:tr
           [:td "Total Score i samtilige spil"]
           [:td "Player1 20 Player2 30"]
           ]

          ]
         ]
        ]]
      )
      )

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run)2)