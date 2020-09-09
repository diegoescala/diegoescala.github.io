(ns yay.core
    (:require [reagent.core :as r]))

(enable-console-print!)

(println "This text is printed from src/mab/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn main
  []
  [:div.container [:h1 {:style {:color "green"}} "O hai"]])

(r/render [main] (js/document.getElementById "app"))
