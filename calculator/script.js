function appendValue(value) {
  const display = document.getElementById("display");
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  document.getElementById("display").innerText = "0";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
