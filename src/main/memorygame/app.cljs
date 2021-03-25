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
(def clicked-card (r/atom 0))
;; (def card1 (r/atom false))
;; (def card2 (r/atom false))

; (defonce reset-cards (js/setInterval (reset-cards) 1000))

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

(def data1 (r/atom
             [{:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
              ;; {:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
              {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
              ;; {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
              ]
             ))

(def data (r/atom
            [{:no 1 :id 1} {:no 2 :id 2} {:no 3, :id 3} {:no 4, :id 4}
             {:no 1 :id 5} {:no 2 :id 6} {:no 3, :id 7} {:no 4, :id 8}
             {:no 5 :id 9} {:no 6 :id 10} {:no 7, :id 11} {:no 8, :id 12}
             {:no 5 :id 13} {:no 6 id 14} {:no 7, :id 15} {:no 8, :id 16}
             ]
            ))

(defn reset-cards []
      (reset! flip false)
      (reset! clicked-card 0)
      )


(defn display-cards [n, id]
      (let [el (str "card-" id)]
           [:div.flip-card
            [:div.flip-card-inner {:id       el
                                   :on-click (fn []
                                                 (js/console.log (str "card no" n))
                                                 (if (and @flip (= n @clicked-card))
                                                   (do
                                                     (print "Flipped back. Show back/ghosts")
                                                     (def elm (-> js/document
                                                                  (.getElementById el)))
                                                     (css/remove-class! elm "flip")
                                                     (reset! flip nil)
                                                     (reset! clicked-card 0)
                                                     (js/console.log @clicked-card)
                                                     )
                                                   (do
                                                     (print "Flipped. Show stuff")
                                                     (def elm (-> js/document
                                                                  (.getElementById el)))
                                                     (css/add-class! elm "flip")
                                                     (reset! flip "flip")
                                                     (reset! clicked-card n)
                                                     (js/console.log @clicked-card)
                                                     ))

                                                 (if (not= n @clicked-card)
                                                   ( (js/console.log (str @clicked-card " --" n)))
                                                   (js/setTimeout #(reset-cards) 1000)
                                                   )
                                                 )

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
             [display-cards (x :no) (x :id)]
             )]])

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))
