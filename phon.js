function updateElement(addinput) {
  const inputfield = document.getElementById("phone-number-field");
  const inputElementString = inputfield.value;
  const inputElement = parseInt(inputElementString);
  let phonevaluein;

  if (addinput == true) {
    phonevaluein = inputElement + 1;
  } else {
    phonevaluein = inputElement - 1;
  }
  //   if (phonevaluein > 0 && phonevaluein <= 5) {
  //     inputfield.value = phonevaluein;
  //   }
  inputfield.value = phonevaluein;

  return phonevaluein;
}
// use another function

function updatePhonePrise(addprise) {
  const addtotalprise = addprise * 1219;

  const priseField = document.getElementById("phone-total");
  priseField.innerText = addtotalprise;
}

//

// function addselectedmoney(selectamount) {
//   const phontotal = document.getElementById(selectamount);

//   const phontotalelementString = phontotal.innerText;

//   const phontotalelement = parseInt(phontotalelementString);
//   return phontotalelement;
// }

// //

// function functionforsubtotal() {
//   const addmoney1 = addselectedmoney("phone-total");
//   const addmoney2 = addselectedmoney("case-total");

//   const addallmoney = addmoney1 + addmoney2;

//   const subtotal = document.getElementById("sub-total");

//   subtotal.innerText = addallmoney;
// }

//
document
  .getElementById("btn-phone-plus")
  .addEventListener("click", function () {
    const addphonePrise = updateElement(true);

    updatePhonePrise(addphonePrise);

    functionforsubtotal();
  });

document
  .getElementById("btn-phone-minus")
  .addEventListener("click", function () {
    const addphonePrise = updateElement(false);
    updatePhonePrise(addphonePrise);
    functionforsubtotal();
  });
