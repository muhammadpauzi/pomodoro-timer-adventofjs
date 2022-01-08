const minutesElement = document.querySelector(".timer .minutes input");
const secondsElement = document.querySelector(".timer .seconds input");
const startButton = document.querySelector(".start");
const settingsButton = document.querySelector(".settings");

let timer;

startButton.addEventListener("click", function () {
  let isStarting = (this.textContent =
    this.textContent.toLowerCase() === "start");
  this.textContent = isStarting ? "pause" : "start";
  if (isStarting) {
    const minutes = Number(minutesElement.value);
    const seconds = Number(secondsElement.value);
    let countdown = minutes * 60 + seconds;

    timer = setInterval(() => {
      let hours = Math.floor(countdown / 3600); // get hours
      let m = Math.floor((countdown - hours * 3600) / 60); // get minutes
      let s = countdown - hours * 3600 - m * 60; //  get seconds

      minutesElement.value = ("0" + m).slice(-2);
      ("0" + s).slice(-2);
      secondsElement.value = ("0" + s).slice(-2);

      countdown--;
      if (countdown < 0) {
        clearInterval(timer);
      }
    }, 1000);
  } else {
    clearInterval(timer);
  }
});

settingsButton.addEventListener("click", function () {
  if (
    minutesElement.getAttribute("disabled") === "" ||
    minutesElement.getAttribute("disabled")
  ) {
    minutesElement.removeAttribute("disabled");
    secondsElement.removeAttribute("disabled");
  } else {
    minutesElement.setAttribute("disabled", true);
    secondsElement.setAttribute("disabled", true);
  }
});
