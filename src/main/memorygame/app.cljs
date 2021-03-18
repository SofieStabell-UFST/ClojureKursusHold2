(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))


(defn tegn-felt [x]
      [:div.col
       [:div.flip-card
        [:div.flip-card-inner
         [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
         [:div.flip-card-back [:img {:src (str "images/halloween-" x ".png")}]]]]])


 (def billedrækkenummer [1 2 3 4 5 6 7 8 1 2 3 4 5 6 7 8])

;(take 3 (drop 5 (range 1 11)))


(defn miniapp []
      [:table {:border 1}
        [:tr
         (map (fn [x] [:td (tegn-felt x)] ) (take  4 billedrækkenummer))
          ]
       [:tr
        (map (fn [x] [:td (tegn-felt x)] ) (take 4 (drop 4 billedrækkenummer)))]
       [:tr
        (map (fn [x] [:td (tegn-felt x)] ) (take 4 (drop 8 billedrækkenummer)))]
       [:tr
        (map (fn [x] [:td (tegn-felt x)] ) (take 4 (drop 12 billedrækkenummer)))]
       ]
      )
; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run)2)