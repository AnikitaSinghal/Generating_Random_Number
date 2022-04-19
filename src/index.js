const maximum = 20;
const minimum = -20;
let number = document.getElementById("num");
let displaybutton = document.getElementById("btn");
displaybutton.addEventListener("click", () => {
  var random = Math.floor(Math.random() * maximum) + minimum;
  number.textContent = random;
  //console.log(random);
});
