function IsNumeric(n) {
    return !isNaN(n);
  }

  const generateButton = document.querySelector("#getit");
  const lowInput = document.querySelector("#lownum");
  const highInput = document.querySelector("#highnum");
  const randomnumOutput = document.querySelector("#randomnum");

  generateButton.addEventListener("click", () => {
    var numLow = lowInput.value;
    var numHigh = highInput.value;

    var adjustedHigh = parseFloat(numHigh) - parseFloat(numLow) + 1;

    var numRand = Math.floor(Math.random() * adjustedHigh) + parseFloat(numLow);

    if (
      IsNumeric(numLow) &&
      IsNumeric(numHigh) &&
      parseFloat(numLow) <= parseFloat(numHigh) &&
      numLow != "" &&
      numHigh != ""
    ) {
      randomnumOutput.innerText = numRand;
    } else {
      randomnumOutput.innerText = "Invalid Number!";
    }

    return false;
  });

//Copyright 2018 to this year, changed every 1 Jan
document.getElementById('currentYear').innerText = new Date().getFullYear();
