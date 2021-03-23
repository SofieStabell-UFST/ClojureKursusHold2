(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def player1 (r/atom "Mathias"))
(def player2 (r/atom "Rohita"))
(def score (r/atom 0))
(def round (r/atom 0))


(defn show-card [i]
      [:div.flip-card-front [:img {:src (str "images/halloween-" i ".png")}]]
      )

(defn hide-card []
      [:div.flip-card-front [:img {:src (str "images/halloween-background.png")}]]
      )

(defn toggle-card [i]
  (comment
      (if @flip
        (show-card i)
        (hide-card)
        )))

(defn display-cards [n]
      (js/console.log "n:")
      (js/console.log n)
      [:div.col
       [:div.flip-card
        [:div.flip-card-inner
         [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
         [:div.flip-card-back [:img {:src "images/halloween-" n ".png"}]]]]]
      )




(defn display-control-panel []
      [:div.display-panel-container
       [:h1.display-panel-header "Memory Game"]
       [:div.dp-body
        [:div.dp-section1
         [:p.dp-label "Round: " @round]
         [:p.dp-label "Active Player: " @player1]
         ]
        [:div.dp-section2
         [:p.dp-label "Score: " @score]
         [:p.dp-label "Player 1:  " @player1]
         [:p.dp-label "Player 2:  " @player2]
         ]
        [:div.dp-section1
         [:div.dp-btn-container
          [:button.dp-btn "Start"]
          [:button.dp-btn "Restart"]]
         [:p.dp-winner.item "*********The winner of this game is********"]
         ]]]
      )


;; (def data (r/atom 
(def data 
  "create 16 maps with 8 maps/pairs from 1-8 with a boolean false. 
  false is going to be used to check if these cards is done" 
  (shuffle [{:no 1 :done false} {:no 2 :done false} {:no 3, :done false} {:no 4, :done false}
            {:no 1 :done false} {:no 2 :done false} {:no 3, :done false} {:no 4, :done false}
            {:no 5 :done false} {:no 6 :done false} {:no 7, :done false} {:no 8, :done false}
            {:no 5 :done false} {:no 6 :done false} {:no 7, :done false} {:no 8, :done false}
            ]))


;; (for [row data] (println "row: " row))
;; (print data)
;; (shuffle data)

(defn miniapp []
      [:div (display-control-panel)
       [:div.flex-container
        ;; (for [_ (range 1 3)]
             ;; (for [i (range 1 3)] (display-cards i))
             (for [x data] (display-cards (x :no)))]])

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))
