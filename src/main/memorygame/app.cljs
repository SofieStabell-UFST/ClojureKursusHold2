(ns memorygame.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [memorygame.css :as css]
    ))

(defn generer-billedrækken [x & cheat]
      (if cheat
        (interleave (range 1 (inc x)) (range 1 (inc x)))

        (shuffle (concat (range 1 (inc x)) (range 1 (inc x))))))

(def a (r/atom nil))
(def billedrækken (r/atom (zipmap (range 1 17) (generer-billedrækken 8 :cheat))))
(def tilstand (r/atom {
                       :kort             nil
                       :placering        nil                ; på gættet kort.

                       :nuværendespiller :player1
                       :player1          {
                                          :points          0
                                          :name            "Peter"
                                          :antalvundnespil 0
                                          }
                       :player2          {
                                          :points          0
                                          :name            "Shane"
                                          :antalvundnespil 0
                                          }
                       }))


(defn gameover? [tilstand]
      ;hvis nuværende spiller i tilstand har mere end 4 point - gameover
      (let [nuværendespiller (tilstand :nuværendespiller)]

           (> ((tilstand nuværendespiller) :points) 4))
      )


(defn spil [event element]
     (let [
            [placering kort] event

            elm (-> js/document
                    (.getElementById element))
            ]
           ;; Vend kortet om, så det er synligt.

           (css/add-class! elm "flip-card-transform")

           (println @tilstand)

           (cond
             ;  (first click, kort gemt i tilstand)
             (nil? (@tilstand :kort))
             (do
               (swap! tilstand assoc-in [:kort] kort)
               (swap! tilstand assoc-in [:placering] element))

             ;  (hvis kortene er ens, giv point til spileren og slet kortene Reset :kort og :placering )
             (and (= kort (@tilstand :kort)) (not (= placering (@tilstand :placering))))
             (do
               (let [nuværendespiller
                     (@tilstand :nuværendespiller)
                     gammeltkort (-> js/document (.getElementById (@tilstand :placering)))
                     ]
                    (println nuværendespiller)
                    (swap! tilstand update-in [nuværendespiller :points] inc)

                    (js/setTimeout
                      (fn [] (do
                               (css/add-class! gammeltkort "flip-card-hidden")
                               (css/add-class! elm "flip-card-hidden")
                               ))
                      3000
                      )

                    (swap! tilstand assoc-in [:kort] nil)
                    (swap! tilstand assoc-in [:placering] nil)
                    (println @tilstand)
                    )

               ; tjek om spillet er slut.
               (when (gameover? @tilstand)
                     ;opdater antal vundne spil
                     (let [nuværendespiller (@tilstand :nuværendespiller)]
                          (swap! tilstand update-in [nuværendespiller :antalvundnespil] inc))
                     ;initier nyt spil
                     ;generer ny spilleplade
                     (if nil(reset! billedrækken
                             (zipmap (range 1 17) (generer-billedrækken 8))))
                     ;check at alle felter er visible
                     ;(.getElementsByClassName js/document "class-name")
                     (if nil(let [elementer (.getElementsByClassName js/document "flip-card-transform")]

                          (js/console.log elementer)
                          (map #(css/class-reset! % "flip-card-inner") elementer)
                          ;class-reset! med  flip-card-inner

                          ))

                     (if nil(let [elementer (.getElementsByClassName js/document "flip-card-transform")]
                          (js/console.log elementer)
                          ))

                     ;()
                     ;(css/remove-class! (-> js/document (.getElementsByClassName "flip-card-transform")))
                     ;(css/remove-class! gammeltkort "flip-card-hidden")
                     ;(css/remove-class! gammeltkort "flip-card-transfer")
                     ;nulstil strukturen billedrækken
                     ;nulstil antalpoints for spillerne
                     ))

             ;  (hvis kortene ikke er ens, vend bagsiden opad paa begge kort, skift spilleren)
             :else

             (js/setTimeout
               ; Wait five seconds so we can see the picture
               (fn [] (do
                        (css/remove-class! elm "flip-card-transform")
                        (css/remove-class! (-> js/document (.getElementById (@tilstand :placering))) "flip-card-transform")

                        (let [
                              nuværendespiller (@tilstand :nuværendespiller)
                              swappedspiller (#(if (= % :player1) :player2 :player1) nuværendespiller)
                              ]
                             (swap! tilstand assoc-in [:nuværendespiller] swappedspiller))

                        (swap! tilstand assoc-in [:placering] nil)
                        (swap! tilstand assoc-in [:kort] nil)))

               5000))))



;(cond
;  (first click, kort gemt i tilstand og kortet forsiden op)
;
;  (hvis kortene er ens, slet kortene og giv point til spileren, tjek om spillet er slut (giv match point), spilleren fortsaetter)
;
;  (hvis kortene ikke er ens, vend bagsiden opad paa begge kort, skift spilleren))


(defn kort [xs]
      (let [element (str "felt-" (first xs))]

           [:td {:on-click #(spil xs element) :id (str "td-" (first xs))}
            [:div.col
             [:div.flip-card
              [:div.flip-card-inner {:id element}
               [:div.flip-card-front [:img {:src "images/halloween-background.png"}]]
               [:div.flip-card-back [:img {:src (str "images/halloween-" (last xs) ".png")}]]]]]]))

(defn nyt-spil []
      (reset!
        billedrækken
        (zipmap (range 1 17)
                (generer-billedrækken 8)
                )))


(defn miniapp []
      (let [
            kortrækken (map kort @billedrækken)
            kortmatrix (partition 4 kortrækken)
            tr (fn [x] [:tr x])
            player1_points 0
            player2_points 0]

           [:div.hele-molevitten
            [:table {:border 1}
             [:tbody
              (map tr kortmatrix)]]
            [:div.scoreboard
             [:table
              [:tbody
               [:tr
                [:td "Ny runde"]
                [:td [:input {:type "button" :value "Start ny runde" :on-click #(nyt-spil)}]]]
               [:tr {:id "player1-score"}
                [:td "Player 1"]
                [:td {:colSpan "1"} ((@tilstand :player1) :points)]]
               [:tr {:id "player2-score"}
                [:td "Player 2"]
                [:td ((@tilstand :player2) :points)]]
               [:tr
                [:td "Næste tur"]
                [:td (@tilstand :nuværendespiller)]]
               [:tr
                [:td "Total Score i samtilige spil"]
                [:td "Player1 20 Player2 30"]
                ]]]]]))

; Herunder ligger funktionerne til at starte det hele op. Dem behøver I ikke bekymre jer om i første omgang
(defn ^:export run []
      (rdom/render [miniapp] (js/document.getElementById "app")))

(defn ^:export reload []
      (js/console.log "reload...")
      (run) 2)