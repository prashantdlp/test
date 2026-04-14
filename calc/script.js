const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipsContainer = document.getElementById("tips");
const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");
const resetBtn = document.getElementById("resetBtn");
const form = document.getElementById("form");

const tipValues = [5, 10, 15, 25, 50];

let selectedTip = 0;

// create tip buttons
tipValues.forEach(val => {
  const btn = document.createElement("div");
  btn.className = "tip-btn";
  btn.innerText = val + "%";

  btn.addEventListener("click", () => {
    document.querySelectorAll(".tip-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedTip = val;
    calculate();
  });

  tipsContainer.appendChild(btn);
});

// calculation logic
function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  if (!bill || !people || people === 0 || !selectedTip) return;

  const tip = (bill * selectedTip) / 100;
  const tipEach = tip / people;
  const totalEach = (bill + tip) / people;

  tipPerPerson.innerText = "$" + tipEach.toFixed(2);
  totalPerPerson.innerText = "$" + totalEach.toFixed(2);
}

// listeners
billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

// reset
resetBtn.addEventListener("click", () => {
  form.reset();
  selectedTip = 0;

  document.querySelectorAll(".tip-btn").forEach(b => b.classList.remove("active"));

  tipPerPerson.innerText = "$0.00";
  totalPerPerson.innerText = "$0.00";
});