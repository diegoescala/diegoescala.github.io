(ns claimr.logic.parser
  (:require [clojure.string :as s]
            [claimr.data.fields :as fields]
            [claimr.logic.claim :as claim]
            [clojure.pprint]))

(def dependent-elements
  [[0 "NM1" 1]
   [0 "N1" 1]
   [0 "REF" 1]])

(defn set-fields
  [elements]
  (let [dfields (take 20 (map #(keyword (str %)) (range 20)))
        segment-fields (flatten (conj [:record-name :type] (or (:fields (get fields/fields (first elements)) dfields))))
        field-map (->> (interleave segment-fields (flatten (conj [(or (:name (get fields/fields (first elements))) (first elements))] elements)))
                       (partition 2))]
    ; (assoc field-map :record-name (or (:name (get fields (first elements))) (:type field-map)))))
    field-map
    (reduce (fn [a m] (assoc a (first m) (second m))) {} field-map)))

(defn split-lines
  [text]
  (s/split text #"\n"))

(defn combine-elements
  [elements index1 index1-value index2]
  (if (> (count elements) (max index1 index2))
    (if (= (nth elements index1) index1-value)
      (let [indexed (into {} (map-indexed vector elements))
            combined (assoc indexed index1 (str index1-value "-" (get indexed index2)))]
        (vals (sort-by key combined)))
      elements)
    elements))

(defn partition-with
  [f coll]
  (lazy-seq
    (when-let [s (seq coll)]
      (let [run (cons (first s) (take-while (complement f) (next s)))]
        (cons run (partition-with f (seq (drop (count run) s))))))))

(defn split-elements
  [segment]
  (s/split segment #"\*"))

(defn partition-on
  [type coll]
  (partition-with #(= (:type %) type) coll))

(defn extract-claims
  [records]
  (->> (partition-on "CLP" records)
       (filter #(= (:type (first %))
                   "CLP"))
       (map #(claim/extract-claim-from-records %))))

(defn parse835
  [text]
  (->> text
       split-lines
       (map s/trim)
       (map split-elements)
       (map #(reduce (fn [a deps]
                      (combine-elements a (nth deps 0) (nth deps 1) (nth deps 2)))
                     %
                     dependent-elements))
       (map set-fields)))
