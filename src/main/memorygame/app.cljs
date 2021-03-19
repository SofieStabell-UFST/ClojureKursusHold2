(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

; Hold 2 -plan:
;Amal, Tue og Annibeth
;
;memory game
;
;1 flip kun ved klik event
;
;2   1 vendt not 2 vendt
;    1 vendt eq 2 vendt = poæng


(def cardArray [[true false] [true false]])


(defn card [n]
      "return hiccup for card n"
      (let  [ flip? (r/atom true)]
           [:div.flip-card
            [:div.flip-card-inner
             {
              :class [(when @flip? "flip")]
              :on-click (fn [] (swap! flip? not)
                            (js/console.log @flip?))
              }
             [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
             [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
             ]])
      )


(defn miniapp []
      [:body
       [:table
        [:tbody
         [:tr
          (for [n (range 1 5)]
               [:td (card n)]
               )
          ]
         [:tr
          (for [n (range 5 9)]
               [:td (card n)]
               )
          ]
         [:tr
          (for [n (range 1 5)]
               [:td (card n)]
               )
          ]
         [:tr
          (for [n (range 5 9)]
               [:td (card n)]
               )
          ]
         ]]
       [:div.col

        ]
       ;[:div#app]
       ;[:script {:src "scripts/core.js"}]
       ])
; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))

