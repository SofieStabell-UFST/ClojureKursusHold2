(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(defn display-cards [i]
      [:div.col
       [:div.flip-card
        [:div.flip-card-inner
         [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
         [:div.flip-card-back [:img {:src "images/halloween-\\" (js/parseInt i)  ".png"}]]]]]
      )


(defn miniapp []
      [:div (for [i (range 1 16)] (display-cards i))]
      )

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run))