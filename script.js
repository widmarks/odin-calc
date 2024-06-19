const BUTTON = document.querySelectorAll(".btn");
const OPERATOR = document.querySelectorAll(".btn-operator");
const OUTPUT = document.querySelector(".output");
const CLEAR = document.querySelector(".btn-clear");

let display = "";
function update(string) {
  display = string;
  OUTPUT.textContent = display;
}

BUTTON.forEach((btn) => {
  btn.addEventListener("click", () => {
    display += btn.value;
    update(display);
  });
});

CLEAR.addEventListener("click", () => update(""));
