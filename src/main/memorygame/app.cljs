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
      (if @flip
        (show-card i)
        (hide-card)
        )
      )

(defn display-cards [n]
      (let [flip? (r/atom false)]
           [:div.flip-card
            [:div.flip-card-inner
             {:class    [(when @flip? "flip")]
              :on-click (fn []
                            (if @flip
                              (do
                                (show-card i)
                                (swap! flip? not)
                                (js/console.log "flip value inside show" @flip?))
                              )
                            (do
                              (hide-card)
                              (swap! flip? not)
                              (js/console.log "flip value inside hide" @flip?)
                              )
                            )
              }
             [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
             [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
             ]
            ]))



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


;; TODO - work in progress
;; Creates 4 rows and 4 columns with random number
;; But we still needs to make sure a number is only used two times
;; (for [_ (range 1 5)]
;;  (do
;;    (for [i (range 1 5)]
;;      (let [randno (rand-nth (range 1 9))]
;;        (str randno)))))

(defn miniapp []
      [:div (display-control-panel)
       ;;rand-nth (range 1 9))
       [:div.flex-container
        (for [_ (range 1 3)]
             (for [i (range 1 3)] (display-cards i))
             )]
       ]
      )

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))
