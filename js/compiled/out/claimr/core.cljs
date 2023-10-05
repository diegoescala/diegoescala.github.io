(ns claimr.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [claimr.logic.parser :as parser]
            [claimr.logic.claim :as claim]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure.string]
            [claimr.data.reason-codes :as reason-codes]))
            
(def text (r/atom ""))
(def parsed-txt (r/atom ""))
(def selected-record (r/atom {}))

(def url "http://localhost:3449/")


(defn parse-input
  [txt]
  (reset! parsed-txt (parser/parse835 @text)))

(defn load-sample-data
  []
  (go (let [response (<! (http/get (str url "sample.edi")))]
        (do
          (reset! text (:body response))
          (parse-input @text)))))

(defn main2 []
 [:div
  [:div {:class "futurepanel"}
   [:div {:class "futurepanel__header"}
    [:h1 {:class "futurepanel__title"} "Text Options"]]
   [:div {:class "futurepanel__body"}
    [:h2 {:class "heading"} "title"]
    [:p "This is default text."]
    [:h3 {:class "heading"} "title"]
    [:p "This is default text."]
    [:h4 {:class "heading"} "title"]
    [:p "This is default text."]
    [:h5 {:class "heading"} "title"]
    [:p "This is default text."]
    [:h6 {:class "heading"} "title"]
    [:p "This is default text."]]
   [:div {:class "futurepanel__footer"}
    [:div "#0002134678 TFFC:3 ///////////// "]]]
  
  [:div {:class "futurepanel"}
   [:div {:class "futurepanel__header"}
    [:h1 {:class "futurepanel__title"} "Text Input Styles"]]
   [:div {:class "futurepanel__body"}
    [:div {:class "futureinput futureinput--text"}
     [:label {:for "example1"} "Text input example"]
     [:input {:type "text", :name "example1", :id "example1", :placeholder "enter text here"}]]
    [:div {:class "futurepanel__divider"}]
    [:div {:class "futureinput futureinput--text"}
     [:label {:class "required", :for "example1"} "Text input (required)"]
     [:input {:type "text", :name "example1", :id "example1", :placeholder "enter text here"}]
     [:span {:class "futureinput__help"} "Here is some help text!"]]
    [:div {:class "futurepanel__divider"}]
    [:div {:class "futureinput futureinput--text"}
     [:label {:class "required", :for "example1"} "Text input (with help text)"]
     [:input {:type "text", :name "example1", :id "example1", :placeholder "enter text here"}]
     [:span {:class "futureinput__help"} "Here is some help text!"]]
    [:div {:class "futurepanel__divider"}]
    [:div {:class "futureinput futureinput--text"}
     [:label {:class "required", :for "example1"} "Text input (with validation error)"]
     [:input {:type "text", :name "example1", :id "example1", :placeholder "enter text here"}]
     [:span {:class "futureinput__error"} "
    [ You have a validation error ]"]]
    [:div {:class "futurepanel__divider"}]
    [:div {:class "futureinput futureinput--text"}
     [:label {:for "example1"} "Text box req example (disabled)"]
     [:input {:type "text", :name "example1", :id "example1", :placeholder "enter text here", :disabled true}]
     [:span {:class "futureinput__help"} "Here is some help text!"]]
    [:div {:class "futurepanel__divider"}]]
   [:div {:class "futurepanel__footer"}
    [:div "#0002134678 TFFC:3 ///////////// "]]]
  [:div {:class "futurepanel"}
   [:div {:class "futurepanel__header"}
    [:h1 {:class "futurepanel__title"} "Button Options"]]
   [:div {:class "futurepanel__body"}
    [:button {:class "futurebutton"} "Standard"]
    [:button {:class "futurebutton", :disabled true} "Disabled"]
    [:button {:class "futurebutton futurebutton--alert"} "Alert"]
    [:button {:class "futurebutton futurebutton--alert", :disabled true} "Alert"]]
   [:div {:class "futurepanel__footer"}
    [:div "#0002134678 TFFC:3 ///////////// "]]]
  [:div {:class "futurepanel"}
   [:div {:class "futurepanel__header"}
    [:h1 {:class "futurepanel__title"} "Metrics"]]
   [:div {:class "futurepanel__body"}
    [:div {:class "futuremetric futuremetric--circle"}
     [:div {:class "futuremetric__value"} "74"]
     [:div {:class "futuremetric__label"} "tonnes"]]
    [:div {:class "futuremetric futuremetric--circle"}
     [:div {:class "futuremetric__value futuremetric__value--optimal"} "94"]
     [:div {:class "futuremetric__label"} "LBS"]]
    [:div {:class "futuremetric futuremetric--circle"}
     [:div {:class "futuremetric__value futuremetric__value--warning"} "54"]
     [:div {:class "futuremetric__label"} "Hours"]]
    [:div {:class "futuremetric futuremetric--circle"}
     [:div {:class "futuremetric__value futuremetric__value--alert"} "24"]
     [:div {:class "futuremetric__label"} "pixels"]]]
   [:div {:class "futurepanel__footer"}
    [:div "#0002134678 TFFC:3 ///////////// "]]]
  [:div {:class "futurepanel"}
   [:div {:class "futurepanel__header"}
    [:h1 {:class "futurepanel__title"} "Map Grid"]]
   [:div {:class "futurepanel__body"}
    [:div {:class "futuregrid"}
     [:div {:class "futuregrid__row"}
      [:div {:class "futuregrid__cell"} "A1"]
      [:div {:class "futuregrid__cell"} "A2"]
      [:div {:class "futuregrid__cell"} "A3"]
      [:div {:class "futuregrid__cell"} "A4"]
      [:div {:class "futuregrid__cell"} "A5"]]]]
   [:div {:class "futurepanel__footer"}
    [:div "#0002134678 TFFC:3 ///////////// "]]
   [:p (prn-str (map keys (parser/extract-claims @parsed-txt)))]]])

(defn metric [value label style]
 [:div {:class "futuremetric futuremetric--circle"}
  [:div {:class (str "futuremetric__value futuremetric__value--" (name style))} value]
  [:div {:class "futuremetric__label"} label]])

(defn sum-totals [claims]
 (->> claims
      (reduce 
       (fn [totals claim]
        (-> totals
         (assoc :total-charged (+ (:total-charged totals) (js/parseFloat (get-in claim ["Claim Level Data" :total-claim-charge-amount]))))
         (assoc :total-paid (+ (:total-paid totals) (js/parseFloat (get-in claim ["Claim Level Data" :claim-payment-amount]))))))
       {:total-charged 0 :total-paid 0})))

(defn get-adjustments [claims]
 (->> claims
  (map #(get % "Claim Adjustments"))
  (map concat)
  flatten
  (filter some?)
  (reduce (fn [acc adjustment]
            (let [reasons
                   (cond-> []
                    (some? (:adjustment1-reason adjustment))
                    (conj {:code (:adjustment1-reason adjustment)
                           :description (get reason-codes/codes (:adjustment1-reason adjustment))
                           :amount (:adjustment1-amount adjustment)
                           :quantity (:adjustment1-quantity adjustment)})
                    (some? (:adjustment2-reason adjustment))
                    (conj {:code (:adjustment2-reason adjustment)
                           :description (get reason-codes/codes (:adjustment2-reason adjustment))
                           :amount (:adjustment2-amount adjustment)
                           :quantity (:adjustment2-quantity adjustment)})
                    (some? (:adjustment3-reason adjustment))
                    (conj {:code (:adjustment3-reason adjustment)
                           :description (get reason-codes/codes (:adjustment3-reason adjustment))
                           :amount (:adjustment3-amount adjustment)
                           :quantity (:adjustment3-quantity adjustment)})
                    (some? (:adjustment4-reason adjustment))
                    (conj {:code (:adjustment4-reason adjustment)
                           :description (get reason-codes/codes (:adjustment4-reason adjustment))
                           :amount (:adjustment4-amount adjustment)
                           :quantity (:adjustment4-quantity adjustment)}))]
              (conj acc (assoc adjustment :reasons reasons))))
   [])))  

(defn round [num]
 (-> num (* 100.0) Math/floor (/ 100.0)))

(defn metrics [claims] 
 [:div.futurepanel {:style {:min-width "50%"}} 
   [:div.futurepanel__header
    [:h1.futurepanel__title "Metrics"]]
   (let [totals (sum-totals claims)
         adjustments (get-adjustments claims)]
    [:div.futurepanel__body
     [:h3.heading.title "Accepted"]
     [metric (count claims) "Claims" :optimal]
     [metric (str "$" (:total-charged totals)) "Charged" :optimal]
     [metric (str "$" (:total-paid totals)) "Paid" :optimal]
     [:div {:class "futurepanel__divider"}]
     [:h3.heading.title "Denied"]
     (let [reasons (->> (map :reasons adjustments)
                    flatten) 
           reason-amounts (->> reasons
                            (group-by :code)
                            (reduce (fn [acc [code adjustments]] 
                                      (assoc acc code
                                       (->> adjustments (map :amount) (map js/parseFloat) (reduce +))))
                             {})
                            (sort-by val >))
           max-amount-reason (->> reason-amounts first)]
       (when (some? max-amount-reason)
        [:div
         [metric (str "$" (round (reduce + (vals reason-amounts)))) "Total Denials" :alert]
         [metric (str "$" (val max-amount-reason)) 
                 (str "Max Denial Amount Reason: " (key max-amount-reason)) 
                 :alert]]))])])
 

(defn adjustments-view [claims]
 (let [adjustments (get-adjustments claims)]
   [:div.futurepanel
    [:div.futurepanel__header
     [:h1.futurepanel__title "Adjustments"]]
    [:div.futurepanel__body
     [:h2.heading.title "Reason Codes"]
     (let [reasons (->> (map :reasons adjustments)
                        flatten)
           reason-amounts (->> reasons
                               (group-by :code)
                               (reduce (fn [acc [code adjustments]] 
                                         (assoc acc code
                                          (->> adjustments (map :amount) (map js/parseFloat) (reduce +))))
                                {})
                               (sort-by val >))]
      [:div
       [:p claims]
       [:p (prn-str (sort-by second > (frequencies (map :code reasons))))]
       [:p (prn-str reasons)]
       [:p (prn-str reason-amounts)]
       [:p (prn-str adjustments)]])]]))
       

 
(defn load-panel []
 [:div.futurepanel {:style {:width 300}}
  [:div.futurepanel__header
   [:h1.futurepanel__title "File Control"]]
  [:div.futurepanel__body
   [:button.futurebutton 
    {:on-click #(do
                  (.play (js/Audio. "retrieve.mp3"))
                  (load-sample-data))} 
    "Load Sample Data"]]])

(defn edi [txt] 
 [:div.futurepanel
  [:div.futurepanel__header
   [:h1.futurepanel__title "Paste 835 Here"]]
  [:div.futurepanel__body
   [:div.futureinput.futureinput--text
    [:textarea {:type :text :value txt :height 300
                :on-change #(do 
                             (reset! text (-> % .-target .-value))
                             (parse-input @text))}]]]])

(defn claim-view [claim]
 (let [patient (get claim "Patient Name")
       expanded (r/atom false)]
  (fn [claim]
   [:div
    [:button.futurebutton {:on-click #(swap! expanded not)
                           :on-mouse-enter 
                            #(.play (js/Audio. "beep.mp3"))}
     (str (get patient :last-name) ", " (get patient :first-name) " " (get patient :middle-name))] 
    (when @expanded
     (let [provider-name (get-in claim ["Service Provider Name" :org-or-last-name])
           claim-amount (get-in claim ["Claim Level Data" :total-claim-charge-amount])
           claim-payment (get-in claim ["Claim Level Data" :claim-payment-amount])]
      [:div.futuremetric {:style {:text-align :left}}
       [:h3.title (str "Provider: " provider-name)]
       [:h4 (str "Charged: " claim-amount)]
       [:h4 (str "Paid: " claim-payment)]
       [:div {:class "futurepanel__divider"}]
       [:h3 "Adjustments"]
       (for [adj (->> [claim] 
                      get-adjustments 
                      (map :reasons) flatten
                      (filter #(not= "0" (:amount %))))] 
        [:div
         [:p [:span.heading.title "Amount: "] (:amount adj)]
         [:p [:span.heading.title "Reason: "] (:code adj) " (" (:description adj) ")"]])]))])))

(defn claims-bar [claims]
 [:div.futurepanel
  [:div.futurepanel__header
   [:h1.futurepanel__title "Claims"]]
  [:div.futurepanel__body
   (for [claim claims]
    [claim-view claim])]])

(defn main []
 (r/create-class 
  {:component-did-mount
   #(.play (js/Audio. "retrieve.mp3"))
   :render
   (fn []
    (let [parsed @parsed-txt
          edi-text @text
          claims (parser/extract-claims parsed)]
      [:div
        ;; Metrics as a status bar at the top
        [:div {:id "metrics-panel" :class "futurepanel"} [metrics claims]]
        
        ;; Claims panel below metrics, full width
        [:div {:id "claims-panel" :class "futurepanel"} [claims-bar claims]]

        ;; EDI input panel below claims
        [:div {:id "edi-panel" :class "futurepanel"} [edi edi-text]]
        
        ;; Load data panel at the bottom 
        [load-panel]]))}))

(rdom/render [main] (js/document.getElementById "app"))
