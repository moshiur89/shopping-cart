// ***** i phone 11 plus button section..........//
const plusBtn= document.getElementById("plusBtn");
plusBtn.addEventListener("click", function(){
const currentValue = document.getElementById("currentValue").value++;
const plusNumber = parseFloat(currentValue);

const phonePrice = document.getElementById("phonePrice").innerText;
const phonePriceBalance = parseFloat(phonePrice);
const totalBalance1 = phonePriceBalance + 1219;
document.getElementById("phonePrice").innerText = totalBalance1; 

// ***** i phone 11 subtotal plus section..........//
const subTotal = document.getElementById("subTotal").innerText;
subTotalNumber = parseFloat(subTotal);
subTotal1 = subTotalNumber + 1219;
document.getElementById("subTotal").innerText = subTotal1;

// ***** i phone 11 tax plus total section..........//
 const tax = document.getElementById("tax").innerText;
 taxNumber = parseFloat(tax);
 totalTax = (subTotal1 * 5) / 100 ;
document.getElementById("tax").innerText = totalTax;
document.getElementById("total").innerText = totalTax + subTotal1;

})





//***** i phone 11 minus button section.......... phone price//

  const minusBtn = document.getElementById("minusBtn");
  minusBtn.addEventListener("click", function(){
   const currentValue = document.getElementById("currentValue").value--;
   const minusNumber = parseFloat(currentValue);

   const phonePrice = document.getElementById("phonePrice").innerText;
   const phonePriceBalance = parseFloat(phonePrice);
   const totalBalance = phonePriceBalance - 1219;
   document.getElementById("phonePrice").innerText = totalBalance;

////////i phone 11  subtotal minus section ... phone price////////////////////////.

   const subTotalMi = document.getElementById("subTotal").innerText;
   subTotalMiNumber = parseFloat(subTotalMi);
   subTotal2 = subTotalMiNumber - 1219;
   document.getElementById("subTotal").innerText = subTotal2;

  ////////i phone 11  tax minus section ...phone price//////////////////////
  const tax = document.getElementById("tax").innerText;
  taxNumber = parseFloat(tax);
  totalTax1 = (subTotal2 * 5) / 100;
  document.getElementById("tax").innerText = totalTax1;
  document.getElementById("total").innerText = subTotal2;

 ////////i phone 11  tax and total minus section ...phone price//////////////////////
  const total = document.getElementById("total").innerText;
  const totalNumber = parseFloat(total);
  const total1 = totalNumber + totalTax1;
  document.getElementById("total").innerText = total1;
})

//// i phone 11 silicon case plus button section...........////////
 const casePlus = document.getElementById("casePlus");
 casePlus.addEventListener("click", function(){
 const caseValue = document.getElementById("caseValue").value++;
 const casePlusNumber = parseFloat(caseValue);

 const casePrice = document.getElementById("casePrice").innerText;
 const  casePriceNumber = parseFloat(casePrice);
 const totalCase = casePriceNumber + 59;
 document.getElementById("casePrice").innerText = totalCase;

//// i phone 11 silicon case plus subtotal  section...........////////
const subPlus = document.getElementById("subTotal").innerText;
const subPlusNumber = parseFloat(subPlus);
const subTotal3 = subPlusNumber + 59;
document.getElementById("subTotal").innerText = subTotal3;

//// i phone 11 silicon case plus tax section...........////////
const tax = document.getElementById("tax").innerText;
taxNumber = parseFloat(tax);
totalTax2 = (subTotal3 * 5) / 100 ;
document.getElementById("tax").innerText = totalTax2;
document.getElementById("total").innerText = subTotal3 + totalTax2;


})
//// i phone 11 silicon case minus button section...........////////
  const caseMinus = document.getElementById("caseMinus");
  caseMinus.addEventListener("click", function(){
  const caseValue = document.getElementById("caseValue").value--;
  const caseMinusNumber = parseFloat(caseValue);

  const casePriceMi = document.getElementById("casePrice").innerText;
  const casePriceMiNumber = parseFloat(casePriceMi);
  const totalCase1 = casePriceMiNumber - 59;
  document.getElementById("casePrice").innerText = totalCase1;

//// i phone 11 silicon case minus subtotal  section...........////////
  const subMinus = document.getElementById("subTotal").innerText;
  const subMinusNumber = parseFloat(subMinus);
  const subTotal4 = subMinusNumber - 59;
  document.getElementById("subTotal").innerText = subTotal4;

   //// i phone 11 silicon case minus tax and total  section...........////////
  const tax = document.getElementById("tax").innerText;
  taxNumber = parseFloat(tax);
  totalTax3 = (subTotal4 * 5) / 100 ;
 document.getElementById("tax").innerText = totalTax3;

  document.getElementById("total").innerText = subTotal4;
  const total = document.getElementById("total").innerText;
  const totalNumber = parseFloat(total);
  const total2 = totalNumber + totalTax3;
  document.getElementById("total").innerText = total2;
  })


  
 
 

