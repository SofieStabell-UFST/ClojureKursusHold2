(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))
(defn card [n]
      "return hiccup for card n"
       [:div.flip-card
       [:div.flip-card-inner
        [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
        ;[:div.flip-card-back [:img {:src "images/halloween-8.png"}]]
        [:div.flip-card-back [:img {:src (str "images/halloween-"n".png")}]]
        ]]

  )

(defn miniapp []
      [:body
       [:div.col
        (for [n (range 1 9)]
             (card n)
             )
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