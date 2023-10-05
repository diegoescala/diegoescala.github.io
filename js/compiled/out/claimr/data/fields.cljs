(ns claimr.data.fields)

;; https://x12.org/codes/claim-adjustment-group-codes
(def fields
  {"ISA"     {:name "Interchange Control Header" :fields [:happiness :sadness :gloominess :darkness :storminess :thealphabet :zztop :allthenumbers :inmate-number :favyear :aletter :anumber :crankiness :1 :2 :3]}
   "GS"      {:name "Functional Group Header" :fields [:functional-id-code :application-sender-code :application-receiver-code :date :time :group-control-number :responsible-agency-code :version-release-industry-id-code]}
   "ST"      {:name "Transaction Set Header" :fields [:transaction-set-id-code :transaction-set-control-number :implementation-convension-reference]}
   "DTM"     {:name "Production Date" :fields [:date-time-qualifier :production-date]}
   "PER"     {:name "Claim Contact Information" :fields [:contact-function-code :claim-contact-name :communication-qualifier :claim-contact-communication :communication-qualifier :claim-contact-communication :communication-qualifier :communication-extension :contact-inquiry-reference]}
   "N1-PR"   {:name "Payer Identification" :fields [:entity-id :payer-name :id-qualifier :payer-id :entity-relationship-code]}
   "N1-PE"   {:name "Payee Identification" :fields [:entity-id :payee-name :id-qualifier :payee-id :entity-relationship-code]}
   "N3"      {:name "Street Address" :fields [:address1 :address2]}
   "N4"      {:name "Location" :fields [:city :state :zip :country :location-qualifier]}
   "NM1-QC"  {:name "Patient Name" :fields [:entity-id :entity-type-qualifier :last-name :first-name :middle-name :name-prefix :name-suffix :id-code-qualifier :patient-id :entity-relationship-code]}
   "NM1-74"  {:name "Corrected Patient/Insured Name" :fields [:entity-id :entity-type-qualifier :last-name :first-name :middle-name :name-prefix :name-suffix :id-code-qualifier :patient-id :entity-relationship-code]}
   "NM1-82"  {:name "Service Provider Name" :fields [:entity-id :entity-type-qualifier :org-or-last-name :first-name :middle-name :name-prefix :name-suffix :id-qualifier :provider-id :entity-relationship-code]}
   "CLP"     {:name "Claim Level Data" :fields [:patient-control-number :claim-status-code :total-claim-charge-amount :claim-payment-amount :patient-responsibility-amount :claim-filing-indicator-code :payer-claim-control-number :facility-code-value :claim-frequency-code]}
   "CAS"     {:name "Claim Adjustment" :fields [:claim-adjustment-group :adjustment1-reason :adjustment1-amount :adjustment1-quantity :adjustment2-reason :adjustment2-amount :adjustment2-quantity :adjustment3-reason :adjustment3-amount :adjustment3-quantity :adjustment4-reason :adjustment4-amount :adjustment4-quantity]}
   "REF-2U"  {:name "Additional Payer Identification" :fields [:reference-id-qualifier :additional-payer-id]}
   "REF-TJ"  {:name "Additional Payee Identification" :fields [:reference-id-qualifier :additional-payee-id]}
   "REF-EV"  {:name "Reference Identification" :fields [:receiver-id-qualifier :receiver-id :description]}
   "REF-F2"  {:name "Version Identification" :fields [:receiver-id-qualifier :version-id-code :description]}

   ; Following 4 are the same type
   "REF-LU"  {:name "Service Identification" :fields [:reference-id-qualifier :reference-id :description]}
   "REF-1S"  {:name "Service Identification" :fields [:reference-id-qualifier :reference-id :description]}
   "REF-APC" {:name "Service Identification" :fields [:reference-id-qualifier :reference-id :description]}
   "REF-RB"  {:name "Service Identification" :fields [:reference-id-qualifier :reference-id :description]}

   ; Following 4 are the same type
   "REF-EA"  {:name "Other Claim-Related Information" :fields [:reference-id-qualifier-medical-record-id :other-claim-related-id-medical-record-number]}
   "REF-6P"  {:name "Other Claim-Related Information" :fields [:reference-id-qualifier-medical-record-id :other-claim-related-id-medical-record-number]}
   "REF-28"  {:name "Other Claim-Related Information" :fields [:reference-id-qualifier-medical-record-id :other-claim-related-id-medical-record-number]}
   "REF-F8"  {:name "Other Claim-Related Information" :fields [:reference-id-qualifier-medical-record-id :other-claim-related-id-medical-record-number]}

   "REF-6R"  {:name "Line Item Control Number" :fields [:reference-id-qualifier :line-item-control-number :description]}
   "RDM"     {:name "Remittance Delivery Method" :fields [:report-transmission-code :name :communication-number :reference-id]}
   "TS3"     {:name "Provider Summary Information" :fields [:provider-id :facility-code-value :fiscal-period-date :total-claim-count
                                                            :total-claim-charge-amount :total-noncovered-charge-amount :total-denied-charge-amount :total-provider-amount
                                                            :total-interest-amount :total-contractual-adjustment-amount :total-gramm-rudman-reduction-amount :total-msp-payer-amount
                                                            :total-blood-deductible-amount :total-non-lab-charge-amount :total-coinsurance-amount
                                                            :total-hcpcs-reported-charge-amount :total-hcpcs-payable-amount :total-deductible-amount :total-professional-component-amount
                                                            :total-msp-patient-liability-met-amount :total-patient-reimbursement-amount :total-pip-claim-amount :total-pip-adjustment-amount]}

   "BPR"     {:name "Financial Information" :fields [:transaction-handling-code :total-actual-provider-payment-amount :credit-or-debit :payment-method :payment-format
                                                     :dfi-id-qualifier :sender-dfi-id :sender-account-number-qualifier :sender-bank-account-number :payer-id
                                                     :originating-co-supplemental-code :dfi-id-qualifier :receiver-provider-bank-id :receiver-account-number-qualifier :receiver-provider-account-number
                                                     :check-eft-effective-date :business-function]}
   "TRN"     {:name "Reassociation Trace Number" :fields [:trace-type :check-eft-trace-number :payer-id :originating-co-supplemental-code]}})
