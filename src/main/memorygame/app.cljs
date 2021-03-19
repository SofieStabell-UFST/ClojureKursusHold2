(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(defn display-cards [i]
      [:div.col
       [:div.flip-card
        [:div.flip-card-inner
         [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
         [:div.flip-card-back [:img {:src (str "images/halloween-" i ".png")}]]]]]
      )

(defn display-control-panel []
      [:div.display-panel-container
       [:h1.display-panel-header "Memory Game"]
       [:div.dp-body
        [:div.dp-section1
         [:p.dp-label "Player 1:  " "Name"
          [:p.dp-label "Player 2:  " "Name"
           [:p.dp-label "Round: " " Value"]]]]
        [:div.dp-section2
         [:p.dp-label "Players turn:  " "Name"
           [:p.dp-label "Score: " " Value"]]]
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
    (for [_ (range 1 5)]
      [:div.flex-container (for [i (range 1 5)] (display-cards i))]
      )
    ])

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))
