const elementSelect = document.querySelector("#selectModo");

elementSelect.addEventListener("click", function () {
  if (elementSelect.value == "light") {
    document.documentElement.setAttribute("modo-light-dark", "light");
  } else if (elementSelect.value == "dark") {
    document.documentElement.setAttribute("modo-light-dark", "dark");
  } else {
    document.documentElement.removeAttribute("modo-light-dark");
  }
});

console.log(elementSelect.value);
