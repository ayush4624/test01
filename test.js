var td=`{
"requestID":"1",
"transDate":"01-04-2020",
"transTypeCode":"SVC-R",
"currency":"USD",
"amount":"1500",
"promoCode":"KOTAKFIRST",
"channel": "PORTAL",
"rate":"77.31",
"ibr":"75.31",
"cardRate":"77.31",
"perUnit":"1",
"buySellSign":"-1",
"orgCharges":"100",
"lcyAmount":"115965"
}`
var cd=`{   "cif":"12345",
    "customerCategory":[
     "EMPLOYEE",   "WEALTH"
    ],
    "usedCodes":
        [
            {
                "codeType":"P",
                "codeName":"KOTAKFIRST",
                "usedCount":"1"
            },
            {
                "codeType":"D",
                "codeName":"STUDENT",
                "usedCount":"2"
            }
        ]              
}`
var oc=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","EMPLOYEE"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc2=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile","portal"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","EMPLOYEE"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc3=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile","portal"],
                "transTypeCode":["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc4=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","SVC-R","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER","EMPLOYEE","WELTH"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc5=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc6=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc7=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-05-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","TRAINER"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`
var oc8=`{
        "codeType":"D",
        "validFor":"RC",
        "codeName":"STUDENT",
        "description":" DISCOUNT FOR EDUCATIONAL SEASON- CHARGES Rs 100 OFF, 50 PAISE DISCOUNT ON CARD RATE",
        "startDateTime":"01-04-2020 00:00:00",
        "endDateTime":"01-07-2020 00:00:00",
        "minMaxAmountType":"LCY",
        "minimumINRAmount":"1000",
        "maximumINRAmount":"1000000",
        "maximumTotalUsage":"100000",
        "maximumUsagePerCustomer":"1",
        "rateApplyType":"GBL",
        "applicableRateMargin":"50",
        "chargesDiscount": {
                "chargeDiscountType":"F",
                "chargeDiscount":"100"
        },
        "rateDiscount": {
                "rateDiscountType":"F",
                "rateDiscountOn":"IBR",
                "rateDiscountOrMargin":"50"
        },
        "termsFilter":{
                "channel":["branch","mobile"],
                "transTypeCode":["CN-SALE","SVC-S","TT-SALE","DD-SALE"],
                "customerCategory":["STUDENT","EMPLOYEE"],
                "currency": [
                        {
                                "currCode":"USD",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        },
                        {
                                "currCode":"EUR",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                         },
                        {
                                "currCode":"GBP",
                                "minAmount":"",
                                "maxAmount":"",
                                "discount":""
                        }
                                
                ]
        }
}`





var obj1=JSON.parse(td);
var obj2=JSON.parse(cd); 
var obj3=JSON.parse(oc);
var obj4=JSON.parse(oc2);
var obj5=JSON.parse(oc3);
var obj6=JSON.parse(oc4);
var obj7=JSON.parse(oc5);
var obj8=JSON.parse(oc6);
var obj9=JSON.parse(oc7);
var obj10=JSON.parse(oc8);






const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const t1 =require("./t1.js");
var assert = require('assert');
//console.log("1");
//console.log(obj1,obj2,obj3);
//console.log("123",t1.isCodeApplicable(obj1,obj2,obj3,0));
var exp ={"requestID":"1",
        "codeType":"D",
         "validFor":"RC",
         "codeName":"STUDENT",
         "applicable":"N",
         "message":" "} ;
 
  	describe("testing", function() {
 
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj3,0),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj4,1),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj5,2),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj6,3),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj7,4),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj8,5),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj9,6),exp)
  });
  	it("testoing", function() {
      assert.equal(t1.isCodeApplicable(obj1,obj2,obj10,7),exp)
  });
  	


    

  });