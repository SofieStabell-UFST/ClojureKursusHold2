(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(def a (r/atom nil))
(def billedrækken-2 (r/atom (zipmap (range 1 17) (shuffle (concat (range 1 9) (range 1 9))))))
(def billedrækken (r/atom (zipmap (range 1 17) (concat (range 1 9) (range 1 9)))))
(def tilstand (atom {
                     :kort         nil

                     :næstespiller :player1
                     :player1      {
                                    :points          0
                                    :name            "Peter"
                                    :antalvundnespil 0
                                    }
                     :player2      {
                                    :points          0
                                    :name            "Shane"
                                    :antalvundnespil 0
                                    }
                     }))

(defn spil [event]
      (let [[placering kort] event]
           (if (nil? (@tilstand :kort))
             (do
               (swap! tilstand assoc-in [:kort] kort))
             (do
               (when (= kort (@tilstand :kort)) (swap! tilstand update-in [:player1 :points] inc)))))
      (print @tilstand))

(defn kort [xs]
      [:td {:on-click #(spil xs) :id (str "felt-" (first xs))}
       [:div.col
        [:div.flip-card
         [:div.flip-card-inner
          [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
          [:div.flip-card-back [:img {:src (str "images/halloween-" (last xs) ".png")}]]]]]])

;; (defn generer-billedrækken [x] (shuffle (concat (range 1 (inc x)) (range 1 (inc x)))))


(defn nyt-spil []
      (reset! billedrækken (zipmap (range 1 17) (shuffle (concat (range 1 9) (range 1 9))))))


(defn miniapp []
      (let [
            kortrækken (map kort @billedrækken)
            kortmatrix (partition 4 kortrækken)
            tr (fn [x] [:tr x])
            player1_points 0
            player2_points 0]

           [:div.hele-molevitten
            [:table {:border 1}
             (map tr kortmatrix)]
            [:div.scoreboard
             [:table
              [:tbody
               [:tr
                [:td "Ny runde"]
                [:td [:input {:type "button" :value "Start ny runde" :on-click #(nyt-spil)}]]
                [:tr
                 [:td "Player 1"]
                 [:td player1_points]]
                [:tr
                 [:td "Player 2"]
                 [:td player2_points]]
                [:tr
                 [:td "Næste tur"]
                 [:td (@tilstand :næstespiller)]]
                [:tr
                 [:td "Total Score i samtilige spil"]
                 [:td "Player1 20 Player2 30"]
                 ]]]]]]))


; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run) 2)