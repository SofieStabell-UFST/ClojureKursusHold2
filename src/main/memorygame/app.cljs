(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [memorygame.css :as css]))


(def player1 (r/atom "Mathias"))
(def player2 (r/atom "Rohita"))
(def score (r/atom 0))
(def round (r/atom 0))

(def flip (r/atom false))
;; (def card1 (r/atom false))
;; (def card2 (r/atom false))

(def data0
  ;; (def data (r/atom 
  "create 16 maps with 8 maps/pairs from 1-8 with a boolean false.
  false is going to be used to check if these cards is done"
  (shuffle 
    [{:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
            {:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
            {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
            {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
            ]
           ))

(def data (r/atom 
            [{:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
             ;; {:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
             {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
             ;; {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
             ]
            ))



(defn display-cards [n, status]
  (let [el (str "card-" n)]   
    [:div.flip-card
     [:div.flip-card-inner { :id el 
                            :on-click (fn []
                                        (js/console.log (str "card no" n))
                                        (if @flip
                                          (do
                                            (print "Flipped back. Show back/ghosts")
                                            (def elm (-> js/document
                                                         (.getElementById el)))
                                            (css/remove-class! elm "flip")
                                            (reset! flip nil)
                                            )
                                          (do
                                            (print "Flipped. Show stuff")
                                            (def elm (-> js/document
                                                         (.getElementById el)))
                                            (css/add-class! elm "flip")
                                            (reset! flip "flip")
                                            )))
                            }
      [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
      [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
      ]]))

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
     ]
    ]]
  )

(defn miniapp []
  [:div
   [display-control-panel]
   [:div.flex-container
    (for [x @data]
      [display-cards (x :no)(x :flipped)]
      )]])

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
  (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
  (js/console.log "reload...")
  (run))
