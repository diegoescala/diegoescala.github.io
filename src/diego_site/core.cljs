(ns diego-site.core
    (:require [reagent.core :as r]
              [re-frame.core :as rf]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn main []
  (fn []
    [:div
     [:div.root
      [:div.header
       ; [:img.logo {:src "images/eyze-logo.svg" :class "logo-desat" :width "150" :height "75"}]
       "Diego's site"
       ; [:div {:class "login Customer"} "Customer Login"]
       [:div {:class "login Producer"} "Sign In"]
       [:div {:class "login SignUp"} "Sign Up"]
       [:div.phone [:div.num "555-555-5555"]]]]
     [:div.credit "Photo: Johannes Plenio"]
     [:div.values]

      ; [:div.whiteBlob [:img {:width "1250px" :src "images/wavyWhite.svg"}]]]
     [:div.bottomNav
      [:div {:id "fatBlackOval"} [:img {:src "images/FatBlackOval.svg"}]]
      [:div {:id "socials"} [:img {:width "170px" :src "images/socials.png"}]]
      [:div.bottomBlock
       [:div.blockTitle "company"]
       [:div.blockItem "about us"]
       [:div.blockItem "the blog"]
       [:div.blockItem "jobs"]]
      [:div.bottomBlock3
       [:div.blockTitle "support"]
       [:div.blockItem "submit ticket"]
       [:div.blockItem "support@eyze.io"]
       [:div.blockItem "documentation"]]
      [:div.bottomBlock2
       [:div.blockTitle "account"]
       [:div.blockItem "business login"]
       [:div.blockItem "consumer login"]
       [:div.blockItem "provider login"]]]]))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

(r/render [main] (.getElementById js/document "app"))
