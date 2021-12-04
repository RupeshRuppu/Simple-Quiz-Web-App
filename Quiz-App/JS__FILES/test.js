const timer = document.querySelector(".timer");
const modal = document.querySelector(".modal");
const include__js__content = document.querySelector(".include__js__content");
const optionsIndexes = [];
import { questions } from "./Questions.js";

const requiredContent = questions.map((item) => {
  return ` <div class="display__question">
          <h1>
          ${item.id}) ${item.question}
          </h1>
      </div>
      <div class="display__options">
          <ul>
              <div>
                  <input type="radio" width="100%" name="choice" id="option__one" />
                  <label for="option__one">${item.options[0]}</label>
              </div>
              <div>
                  <input type="radio" width="100%" name="choice" id="option__two" />
                  <label for="option__two">${item.options[1]}</label>
              </div>
              <div>
                  <input type="radio" width="100%" name="choice" id="option__three" />
                  <label for="option__three">${item.options[2]}</label>
              </div>
              <div>
                  <input type="radio" width="100%" name="choice" id="option__four" />
                  <label for="option__four">${item.options[3]}</label>
              </div>
          </ul>
      </div>`;
});

let time = 5;
let initialQuesIndex = 0;
include__js__content.innerHTML = requiredContent[initialQuesIndex];
setInterval(() => {
  if (time === 0) {
    modal.style.left = "30px";
    time = 5;
    setTimeout(() => {
      modal.style.left = "-200px";
    }, 500);
  }
  timer.innerHTML = time--;
}, 1000);

setInterval(updateQuestion, 5200);

function calculateCorrectValues() {
  let nothingSelected = true;
  const options = document.querySelectorAll("input[name='choice']");
  for (let option of options) {
    if (option.checked) {
      nothingSelected = false;
      optionsIndexes.push(option.id);
      break;
    }
  }
  if (nothingSelected) {
    optionsIndexes.push(undefined);
  }
}

function updateQuestion() {
  if (initialQuesIndex >= requiredContent.length - 1) {
    calculateCorrectValues();
    let count = 0;
    const other = questions.filter((item, index) => {
      if (item.check === optionsIndexes[index]) item.correct = true;
      return item;
    });
    other.forEach((item) => {
      if (item.correct) count++;
    });
    window.localStorage.setItem("value", count);
    window.location.href = "http://127.0.0.1:5500/HTML__FILES/end_test.html";
  } else {
    calculateCorrectValues();
    include__js__content.innerHTML = requiredContent[++initialQuesIndex];
  }
}
