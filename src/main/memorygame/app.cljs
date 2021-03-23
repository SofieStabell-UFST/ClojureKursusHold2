(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]))

(defn generer-billedrækken [x & cheat]
      (if cheat
        (interleave (range 1 (inc x)) (range 1 (inc x)))

        (shuffle (concat (range 1 (inc x)) (range 1 (inc x))))))

(def a (r/atom nil))
(def billedrækken (r/atom (zipmap (range 1 17) (generer-billedrækken 8 :cheat ))))
(def allerede-vundet (r/atom ()))
(def tilstand (r/atom {
                     :kort         nil

                     :næstespiller 0
                     :player1      {
                                    :points          0
                                    :name            "Peter"
                                    :antalvundnespil 0
                                    }
                     :player2      {
                                    :points          0
                                    :name            "Shane"
                                    :antalvundnespil 0
                                    }}))

(defn spil [event]
      (let [[placering kort] event]
           (if (nil? (@tilstand :kort))
             (do
               (swap! tilstand assoc-in [:kort] kort))
             (do
               (if (and (= kort (@tilstand :kort)) (not (some #(= kort %) @allerede-vundet)))
                 (do
                   (swap! tilstand update-in [(if
                                              (even? (@tilstand :næstespiller)) :player1 :player2) :points] inc)
                   (swap! allerede-vundet conj kort)
                   (print @allerede-vundet)
                   (if (>= ((@tilstand :player1) :points) 5) ; would be nice with an or statement (:player1 OR :player2) as lines 47 to 51 are duplicate.
                     (do
                       (swap! tilstand update-in [:player1 :antalvundnespil] inc)
                       (swap! tilstand assoc-in [:player1 :points] 0)
                       (swap! tilstand assoc-in [:player2 :points] 0)))
                   (if (>= ((@tilstand :player2) :points) 5) ; would be nice with an or statement (:player1 OR :player2) as lines 47 to 51 are duplicate.
                     (do
                       (swap! tilstand update-in [:player2 :antalvundnespil] inc)
                       (swap! tilstand assoc-in [:player1 :points] 0)
                       (swap! tilstand assoc-in [:player2 :points] 0))))
                 (swap! tilstand update-in [:næstespiller] inc))
               (swap! tilstand assoc-in [:kort] nil))))
      (print @tilstand))

(defn kort [xs]
      [:td {:on-click #(spil xs) :id (str "felt-" (first xs))}
       [:div.col
        [:div.flip-card
         [:div.flip-card-inner
          [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
          [:div.flip-card-back [:img {:src (str "images/halloween-" (last xs) ".png")}]]]]]])

(defn nyt-spil []
      (reset!
        billedrækken
        (zipmap (range 1 17) (generer-billedrækken 8))))


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
                [:td [:input {:type "button" :value "Start ny runde" :on-click #(nyt-spil)}]]]
               [:tr
                [:td "Player 1: point i nuværende runde ="]
                ;[:td  {:colspan "1"} [:input#result {:readonly "" :type "text" :value  ((@tilstand :player1) :points) }]]
                [:td ((@tilstand :player1) :points)]]
                [:tr
                 [:td "Player 2: point i nuværende runde ="]
                 [:td ((@tilstand :player2) :points)]]
                [:tr
                 [:td "Næste tur:"]
                 [:td (if (even? (@tilstand :næstespiller)) "Player 1" "Player 2")]]
                [:tr
                 [:td "Total Score i samtilige spil:"]
                 [:td "Player 1: " ((@tilstand :player1) :antalvundnespil) ", Player 2: " ((@tilstand :player2) :antalvundnespil)]
                 ]]]]]))

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run) 2)