import Test from "./test2";

interface Button extends HTMLElement {}
type ButtonType = Button;
const button: ButtonType = document.getElementById("btn1");
const parapgrah: HTMLElement = document.getElementById("paragraph");
parapgrah.innerText = new Test().i.toString();
let clicks: number = 0;
function renderClicks() {
  btn.innerText = `Count: ${clicks}`;
}
btn.addEventListener("click", () => {
  // Count from 1 to 10.
  if (clicks < 10) {
    clicks += 1;
    render();
  }
});
