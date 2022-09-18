const input = document.querySelector("input");
const form = document.querySelector("form");

form.addEventListener("submit", onBtnSubmit);

function onBtnSubmit() {
  if (input.value % 10 !== 0 || input.value <= 0) {
    window.alert(
      "Please introduce another sum of money which can be divided by 10"
    );
    return;
  }
  if (input.value % 20 === 0) {
    const amountToReceive = input.value / 20;
    window.alert(`Please take ${amountToReceive} twenty-pound note(s)`);
  } else {
    const amountToReceive = Math.floor(input.value / 20);
    window.alert(
      `Please take ${amountToReceive} twenty-pound note(s) and 1 ten-pound note`
    );
  }
}
