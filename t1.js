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
var output9;

var count=0;

function isCodeApplicable(td,cd,oc,id){
        var output;
        
        
        if(id==0)
	{
                if (!oc.termsFilter.channel.includes(td.channel))
	{
                count++;
	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`Channel '${td.channel}' is Not Applicable for STUDENT,  Aviailable Channels ${oc.termsFilter.channel.toString()}`
        }
        }
        }
        else if(id==1){
                if (!td.transTypeCode.includes(oc.termsFilter.transTypeCode))
	{
                count++;

	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`Transaction Type "${td.transTypeCode}" is not Applicable for STUDENT, Available Transaction Types ${oc.termsFilter.transTypeCode.toString()}`              


}
        }	
        }
        else if (id==2){
                if (!cd.customerCategory.includes(oc.termsFilter.customerCategory))
	{
                count++;

	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`"Customer Category "${cd.customerCategory}" is Not Applicable Student Available Customer Categories "$oc.termsFilter.customerCategory"`}              

        }
}
        else if (id==3){
                if (!td.currency.includes(oc.termsFilter.currency)){
                        count++;
	
	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`"currency "${td.currency}" is Not Applicable STUDENT available currency "${oc.termsFilter.currency}"
    `}              


}	
        }
        else if (id==4){
                if (!(td.lcyAmount> oc.minimumINRAmount && td.lcyAmount<oc.maximumINRAmount))
	{
                count++;

	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`"LCY Amount "${td.lcyAmount}" is Not with in Range STUDENT Range is form "${oc.minimumINRAmount}". " 
`}              

        }
}
        else if (id==5){
        
        var  startDateTime= "01/05/2020";
        var endDateTime = "01/07/2020";
        var transDate = "01/04/2020";

        var d1 = startDateTime.split("/");
        var d2 = endDateTime.split("/");
        var c = transDate.split("/");

        var from1=parseInt(d1[0]);
        var from2=parseInt(d1[1]);
        var from3=parseInt(d1[2]);
        var to1=parseInt(d2[0]);
        var to2=parseInt(d2[1]);
        var to3=parseInt(d2[2]);
        var check1=parseInt(c[0]);
        var check2=parseInt(c[1]);
        var check3=parseInt(c[2]);

        var from=100*from3+10*from2+from1;
        var to=100*to3+10*to2+to1;
        var check=100*check3+10*check2+check1;


        if(!(check>from&&check<to))
                {
                        count++;

                output={
                 "requestID":td.requestID,
                 "codeType":oc.codeType,
                "validFor":oc.validFor,
                "codeName":oc.codeName,
                "applicable":"N",
                "message":`"Transaction Date 01/04/2020 is Not Within Range Student Range is form 01/05/2020 00:00:00 to 01/07/2020 00:00:00 " 
        `}              


}	
        }
        else if (id==6){
                if (!(td.lcyAmount>oc.minimumINRAmount && td.lcyAmount<oc.maximumINRAmount))
	{
                count++;
	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`"FCY Amount"   
`}              
        }
}
        else if (id==7){
                if (!cd.usedCodes.length<oc.maximumUsagePerCustomer)
	{
                count++;

	    output={
       "requestID":td.requestID,
       "codeType":oc.codeType,
        "validFor":oc.validFor,
        "codeName":oc.codeName,
        "applicable":"N",
        "message":`"Customer has already used  maximim no of usages "${oc.maximumUsagePerCustomer}" available for "${oc.codeName}"  
`}
                         


        }

}	
return output ;
}



// var ans=isCodeApplicable(obj1,obj2,obj3)
// console.log(ans);

for(let i=0;i<9;i++)
{
        var ans;
        if(i==0)
        ans=isCodeApplicable(obj1,obj2,obj3,0);
        else if(i==1)
        ans=isCodeApplicable(obj1,obj2,obj4,1);
        else if(i==2)
        ans=isCodeApplicable(obj1,obj2,obj5,2);
        else if(i==3)
        ans=isCodeApplicable(obj1,obj2,obj6,3);
        else if(i==4)
        ans=isCodeApplicable(obj1,obj2,obj7,4);
        else if(i==5)
        ans=isCodeApplicable(obj1,obj2,obj8,5);
        else if(i==6)
        ans=isCodeApplicable(obj1,obj2,obj9,6);
        else if(i==7)
        ans=isCodeApplicable(obj1,obj2,obj10,7);
        else{
                if(count==0)
                {
                        ans={"requestID":"1",
                        "codeType":"D",
                         "validFor":"RC",
                         "codeName":"STUDENT",
                         "applicable":"N",
                         "message":" "}
                                          
                }
        }

       console.log(ans);


}
exports.isCodeApplicable=isCodeApplicable;
