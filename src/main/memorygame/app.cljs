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
                       :kort         nil
                       :placering    nil    ; på gættet kort.

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
                                      }
                       }))


(defn spil [event element]
      (let [
            [placering kort] event
            elm (-> js/document
                    (.getElementById element))
            classes [:flip-card-front :flip-card-back]
            ]
           (css/add-class! elm "flip-card-transform")

           (cond
             ;  (first click, kort gemt i tilstand)
             (nil? (@tilstand :kort)) (do
                                        (swap! tilstand assoc-in [:kort] kort)
                                        (swap! tilstand assoc-in [:placering] element))

             ;  (hvis kortene er ens, slet kortene og giv point til spileren, tjek om spillet er slut (giv match point), spilleren fortsaetter)
             (and (= kort (@tilstand :kort)) (not (= placering (@tilstand :placering))))
             (do
               (swap! tilstand update-in [(if
                                            (even? (@tilstand :næstespiller)) :player1 :player2) :points] inc)
               (css/add-class! elm "flip-card-hidden")
               (css/add-class! (-> js/document (.getElementById (@tilstand :placering))) "flip-card-hidden"))

             ;  (hvis kortene ikke er ens, vend bagsiden opad paa begge kort, skift spilleren)
             :else
             (do
               (css/remove-class! elm "flip-card-transform")
               (css/remove-class! (-> js/document (.getElementById (@tilstand :placering))) "flip-card-transform")
               (swap! tilstand update-in [:næstespiller] inc)
               (swap! tilstand assoc-in [:placering] nil)
               (swap! tilstand assoc-in [:kort] nil)))
           ; tjek om spillet er slut.


           ;(cond
           ;  (first click, kort gemt i tilstand og kortet forsiden op)
           ;
           ;  (hvis kortene er ens, slet kortene og giv point til spileren, tjek om spillet er slut (giv match point), spilleren fortsaetter)
           ;
           ;  (hvis kortene ikke er ens, vend bagsiden opad paa begge kort, skift spilleren))


(defn kort [xs]
      (let [element (str "felt-" (first xs))]

           [:td {:on-click #(spil xs element)}
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
             (map tr kortmatrix)]
            [:div.scoreboard
             [:table
              [:tbody
               [:tr
                [:td "Ny runde"]
                [:td [:input {:type "button" :value "Start ny runde" :on-click #(nyt-spil)}]]]
               [:tr
                [:td "Player 1"]
                [:td {:colspan "1"} [:input#result {:readonly "" :type "text" :value ((@tilstand :player1) :points)}]]]
               [:tr
                [:td "Player 2"]
                [:td ((@tilstand :player2) :points)]]
               [:tr
                [:td "Næste tur"]
                [:td (@tilstand :næstespiller)]]
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