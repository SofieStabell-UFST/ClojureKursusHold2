(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [memorygame.random :as rrandom ]))

(defn miniapp []
      [:div (str rrandom/generator)   ]

)

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))