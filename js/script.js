
function calculateFactorial() {
  const input = document.getElementById("numInput").value;
  const output = document.getElementById("output");

  if (input === "" || input < 0) {
    output.innerHTML = "Please enter a non-negative number.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= input; i++) {
    factorial *= i;
  }

  output.innerHTML = `${input}! = ${factorial}`;
}

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }
}
