function updateCaseNumber(inputValue) {
  const inputValueadd = document.getElementById("case-number-field");

  const inputfieldstring = inputValueadd.value;
  const inputfield = parseInt(inputfieldstring);

  let newCaseNumber;

  if (inputValue === true) {
    newCaseNumber = inputfield + 1;
  } else {
    newCaseNumber = inputfield - 1;
  }
  inputValueadd.value = newCaseNumber;

  return newCaseNumber;
}

function updatecasePrise(newCaseNumber1) {
  const totaldoller = newCaseNumber1 * 59;

  const subtractdoller = document.getElementById("case-total");

  subtractdoller.innerText = totaldoller;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber1 = updateCaseNumber(true);
  // use code in function
  //   const totalDoller = newCaseNumber1 * 59;

  //   const dollerField = document.getElementById("case-total");

  //   dollerField.innerText = totalDoller;

  updatecasePrise(newCaseNumber1);
  //its comes commonfunction
  functionforsubtotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber1 = updateCaseNumber(false);

    //     use code in function
    //     const totaldoller = newCaseNumber1 * 59;

    //     const subtractdoller = document.getElementById("case-total");

    //     subtractdoller.innerText = totaldoller;

    updatecasePrise(newCaseNumber1);
    //its comes commonfunction
    functionforsubtotal();
  });
