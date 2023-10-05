(ns claimr.state
  (:require [re-frame.core :as rf]))

(defn init
  []
  (rf/reg-event-db
   :init
   (fn [db [_ _]]
     (assoc db :logged-in false
            :test-mode {:active false}      ; Should always be false in production
            :login-errors []
            :user-token nil
            :user-type 0)))
           
  (let [fetchers
        [:authenticate
         :logout
         :upload-file]]
    (doseq [fetcher fetchers]
      (rf/reg-event-fx
       fetcher
       [(rf/inject-cofx fetcher)]
       (fn [cofx event]
          ;(println (str "Fetch: " (prn-str [cofx event])))
         {:db (:db cofx)}))))

  (let [states
        [:user-level]]
    (doseq [e states]
      (rf/reg-event-db
       (keyword (str "set-" (name e)))
       (fn [db [_ param]]
          ;(println (str "Setting state: " (prn-str [e param])))
         (assoc db e param)))
      (rf/reg-sub e (fn [db _] (get db e)))))

  (rf/dispatch [:init]))
