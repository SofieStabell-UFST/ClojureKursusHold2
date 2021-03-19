(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))
(defn card [n]
      "return hiccup for card n"
      [:td
       [:div.flip-card
       [:div.flip-card-inner
        [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
        [:div.flip-card-back [:img {:src (str "images/halloween-"n".png")}]]
        ]]]
  )

(defn miniapp []
      [:body
       [:div.col
        [:table
         [:tbody
          [:tr
           (for [n (range 1 5 )]
                (card n) )
           ]
          [:tr
           (for [n (range 5 9 )]
                (card n  ) )
           ]
          [:tr
           (for [n (range 1 5 )]
                (card n) )
           ]
          [:tr
           (for [n (range 5 9 )]
                (card n) )
           ]
          ]
         ]
        ]
       ]
      )

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))