(ns calculator.app
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [cljs.reader :refer [read-string]]))


(def current-value (r/atom 0))
(def xy-atom (atom {:x 0 :y "" :z "" :sym nil}))
(def mem-atom (r/atom 0))
(def valuta-atom (r/atom ""))

(defn get-value [event]
      (js/console.log event)
      (swap! xy-atom update-in [:y] + event)
      (reset! current-value (:y @xy-atom))
      )

(defn clear-display []
      (reset! current-value 0)
      (reset! xy-atom {:x 0 :y "" :z "" :sym nil})
      (reset! valuta-atom "")
      )

(defn calculate [event]
      (swap! xy-atom assoc-in [:sym] event)
      ;(swap! xy-atom update-in [:sym] + event )
      (if (= (:z @xy-atom) "") (swap! xy-atom update-in [:z] + (:y @xy-atom)))
      (swap! xy-atom assoc-in [:y] "")
      )

(defn result []
      ;(reset! current-value (js/eval (str (:z @xy-atom)
      ;                                    (:sym @xy-atom)
      ;                                    (:y @xy-atom)
      ;                                    )))
      (reset! current-value ((:sym @xy-atom)
                             (read-string (:z @xy-atom))
                             (read-string (:y @xy-atom))))
      (reset! xy-atom {:y "" :z @current-value :sym nil})
      )

(defn add-to-memory []
      (swap! mem-atom (fn [n] (+ n (read-string @current-value))))
      )

(defn mem-recall []
      (swap! xy-atom assoc-in [:y] @mem-atom)
      (reset! current-value @mem-atom)
      )

(defn mem-reset []
      (reset! mem-atom 0))


(defn pi []
      (reset! current-value (.-PI js/Math))                               ;
      (swap! xy-atom assoc-in [:y] @current-value)
      )

(defn x-squared []
      (reset! current-value (* @current-value @current-value))
      (swap! xy-atom assoc-in [:y] @current-value)
      )

(defn valuta [event]
      (def v {"£" 0.1154,  "US$" 0.1603, "€" 0.1344})
      (reset! current-value (* (read-string (:y @xy-atom)) (get v event)))
      (reset! valuta-atom event)
      )

(defn mini-app []
      [:table  {:border "1"}                                ;{:style "width:100%"}
       [:tbody
        [:tr
         [:td  {:colspan "2"} [:input#result {:readonly "" :type "text" :value  @current-value }]]
         [:td  {:colspan "2"} [:input#result {:readonly "" :type "text" :value  @valuta-atom }]]
         [:td  {:colspan "1"} [:input {:type "button" :value "c" :on-click #(clear-display)} ]]]
        [:tr
         [:td [:input {:type "button" :value "1" :on-click #(get-value 1)  }]]
         [:td [:input {:type "button" :value "2" :on-click #(get-value 2) }]]
         [:td [:input {:type "button" :value "3" :on-click #(get-value 3)}]]
         [:td [:input {:type "button" :value "/" :on-click #(calculate /)}]]]
        [:tr
         [:td [:input {:type "button" :value "4" :on-click #(get-value 4)}]]
         [:td [:input {:type "button" :value "5" :on-click #(get-value 5)}]]
         [:td [:input {:type "button" :value "6" :on-click #(get-value 6)}]]
         [:td [:input {:type "button" :value "-" :on-click #(calculate -)}]]]
        [:tr
         [:td [:input {:type "button" :value "7" :on-click #(get-value 7)}]]
         [:td [:input {:type "button" :value "8" :on-click #(get-value 8)}]]
         [:td [:input {:type "button" :value "9" :on-click #(get-value 9)}]]
         [:td [:input {:type "button" :value "+" :on-click #(calculate +)}]]]
        [:tr
         [:td [:input {:type "button" :value "." :on-click #(get-value ".")}]]
         [:td [:input {:type "button" :value "0" :on-click #(get-value 0)}]]
         [:td [:input {:type "button" :value "=" :on-click #(result)}]]
         [:td [:input {:type "button" :value "*" :on-click #(calculate *)}]]]
        [:tr
         [:td [:input {:type "button" :value "π" :on-click #(pi)}]]
         [:td [:input {:type "button" :value "MemReset" :on-click #(mem-reset)}]]
         [:td [:input {:type "button" :value "MemRecall" :on-click #(mem-recall)}]]
         [:td [:input {:type "button" :value "Mem+" :on-click #(add-to-memory)}]]]
        [:tr
         [:td [:input {:type "button" :value "x²" :on-click #(x-squared)}]]
         [:td [:input {:type "button" :value "£" :on-click #(valuta "£")}]]
         [:td [:input {:type "button" :value "US$" :on-click #(valuta "US$")}]]
         [:td [:input {:type "button" :value "€" :on-click #(valuta "€")}]]]]])

(defn ^:export run []
      (rdom/render [mini-app] (js/document.getElementById "app")))

(defn ^:export reload []
      (.log js/console "reload...")
      (run))
