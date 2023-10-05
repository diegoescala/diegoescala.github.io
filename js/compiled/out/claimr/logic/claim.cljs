(ns claimr.logic.claim)

(defn extract-claim-from-records
  [record-set]
  (-> (reduce (fn [m r] (assoc m (:record-name r) (dissoc r :record-name))) {} record-set) 
      (assoc "Claim Adjustments" (reduce conj [] 
                                  (filter 
                                    #(= (:type %) "CAS") 
                                    record-set)))))
