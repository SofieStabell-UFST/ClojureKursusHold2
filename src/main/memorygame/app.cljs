(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def card-clicked (r/atom 0))
(def y (r/atom false))
(def card-store [[(r/atom false) (r/atom false)] [(r/atom false) (r/atom false)]])

(defn card [n i]
      "return hiccup for card n"

          [:div.flip-card
           [:div.flip-card-inner
            {:class    [(when @(get-in card-store [n i]) "flip")]
             :on-click (fn []
                           (do (if (or (= n @card-clicked) (= 0 @card-clicked))
                                 (do (swap! (get-in card-store [n i]) not)
                                     (reset! card-clicked n))
                                 ;else
                                 (do (reset! card-clicked 0)
                                     (reset! (get-in card-store [n (- 1 i)]) false)))))
             }
            [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
            [:div.flip-card-back [:img {:src (str "images/halloween-" n ".png")}]]
            ]
           ])

(def x (r/atom false))
(def z (r/atom false))
(def a (r/atom false))

(defn miniapp []
      [:body
       [:table
        [:tbody
         [:tr
          [:td (card 1 0)]
          [:td (card 1 1)]
          ]
         [:tr
          [:td (card 2 0)]
          [:td (card 2 1)]
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

