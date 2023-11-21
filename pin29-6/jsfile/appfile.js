// 1

function getpin() {
  const pin = generatepin();

  const pinstring = pin + "";

  if (pinstring.length === 4) {
    return pin;
  } else {
    //     console.log("pin is lessthan 4", pin);
    return getpin();
  }
}
// 2
function generatepin() {
  const genarate = Math.round(Math.random() * 10000);
  return genarate;
}
// 3 add pin button
document.getElementById("generate-pin").addEventListener("click", function () {
  const pinbutton = getpin();
  //   console.log(pinbutton);
  // set pin display
  const inputpindisplay = document.getElementById("pin-input");

  inputpindisplay.value = pinbutton;
});

// generatepin();
// console.log(generatepin());

// 4 calculator part

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const numbr = event.target.innerText;
    const getinput = document.getElementById("typed-numbers");
    if (isNaN(numbr)) {
      if (numbr === "C") {
        getinput.value = "";
      }
    } else {
      const previousinputvalue = getinput.value;

      const newinputvalue = previousinputvalue + numbr;
      getinput.value = newinputvalue;
    }
  });
// 5 submit button

document.getElementById("submit").addEventListener("click", function () {
  //
  const pininput = document.getElementById("pin-input");
  const pinpointvalue = pininput.value;
  //
  const typednumbers = document.getElementById("typed-numbers");

  const typednumbersValue = typednumbers.value;

  const pinPositive = document.getElementById("pin-positive");
  const pinNegetive = document.getElementById("pin-negative");
  if (pinpointvalue === typednumbersValue) {
    pinPositive.style.display = "block";
    pinNegetive.style.display = "none";
  } else {
    pinNegetive.style.display = "block";
    pinPositive.style.display = "none";
  }
});
