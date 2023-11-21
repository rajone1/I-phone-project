function addselectedmoney(selectamount) {
  const phontotal = document.getElementById(selectamount);

  const phontotalelementString = phontotal.innerText;

  const phontotalelement = parseInt(phontotalelementString);
  return phontotalelement;
}
//
function settexelementbyid(elementid, value) {
  const subtotal = document.getElementById(elementid);

  subtotal.innerText = value;
}
//

function functionforsubtotal() {
  const addmoney1 = addselectedmoney("phone-total");
  const addmoney2 = addselectedmoney("case-total");

  const addallmoney = addmoney1 + addmoney2;

  //   we can use it getid and set id
  //   const subtotal = document.getElementById("sub-total");

  //   subtotal.innerText = addallmoney;
  settexelementbyid("sub-total", addallmoney);

  // tex amount 10%
  const taxammountString = (addallmoney * 0.1).toFixed(2);
  //   when use .tofix its become string
  const tax = parseFloat(taxammountString);

  settexelementbyid("tax-amount", tax);

  //   final account

  const finalAccount = addallmoney + tax;

  settexelementbyid("final-total", finalAccount);
}
