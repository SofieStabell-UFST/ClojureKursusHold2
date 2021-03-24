(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def player1 (r/atom "Mathias"))
(def player2 (r/atom "Rohita"))
(def score (r/atom 0))
(def round (r/atom 0))

(def flip (r/atom false))
(def card1 (r/atom false))
(def card2 (r/atom false))

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
             {:no 1 :flipped false} {:no 2 :flipped false} {:no 3, :flipped false} {:no 4, :flipped false}
             {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
             {:no 5 :flipped false} {:no 6 :flipped false} {:no 7, :flipped false} {:no 8, :flipped false}
             ]
            ))



(defn display-cards [n, status]
  ; (js/console.log (str "card no" n))
  ;; (js/console.log (str "status " status))
  ;; (println "first: "(first @data))
  ;; (println "first then last: "(last (first @data)))
  ;; (println "first then last: "(val (last (first @data))))
  ;; (reset! (val (last (first @data))) true)
  ;; (reset! (data (last (first @data))) (val (last (first @data))))
  ;; (swap! data update :flipped conj true )
  ;; (println (get-in @data 0))
  ;; (swap! (get @data 0) {:no 1 :flipped true})
  ;; (reset! (get @data 0) {:no 1 :flipped true})
  ;; (println (get @data 0))
  ;; (println "first: "(first @data))

  [:div.flip-card
   [:div.flip-card-inner
     ;; {:class    [(when @flip "flip")]
     ;; {:id    [(when (and @flip (= n 1)) "flip")]
     {:class    [(when (and @flip (= n 1)) "flip")]
     :on-click (fn []
                 ;; TODO
                 ;; We need to dynamically be able to add and remove class or id
                 ;; on a card. So only the clicked cards gets and id or class
                 ;; maybe we can find something here: https://reagent-project.github.io/index.html
                 ;; or if we search online for how to add and remove class and id in
                 ;; reagent or react
                 (js/console.log (str "card no" n))
                 (if (and (= @card1 true) (= n 1))
                   (do
                     (print "A")
                     (reset! flip nil)
                     (reset! card1 false))
                   (do
                     (when (and (= @card1 false) (= n 1))
                       (print "B")
                       (reset! flip "flip")
                       (reset! card1 true))))

                 ;; (if (and (= @card2 true) (= n 2))
                   ;; (do
                     ;; (reset! flip false)
                     ;; (reset! card2 false))
                   ;; (do
                     ;; (when (and (= @card2 false) (= n 2))
                       ;; (reset! flip "flip")
                       ;; (reset! card2 true))))
                       )

                      
     ;; This was how it was before i played around
                     ;; (if @flip 
                       ;; (do
                         ;; (reset! flip false)
                         ;; (js/console.log "flip value inside show" @flip)
                         ;; (js/console.log "card clicked in true cond and status is" n status))
                       ;; (do
                         ;; (reset! flip true)
                         ;; (js/console.log "flip value inside show" @flip)
                         ;; (js/console.log "flip value inside hide" @flip)
                         ;; (js/console.log "card clicked inside else and status" n status)
                         ;; ))
     }
    [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
    [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
    ]])

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



;; (for [row data] (println "row: " row))
;; (print data)
;; (shuffle data)

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
