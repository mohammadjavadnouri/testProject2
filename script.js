function respMenuFunc() {
  var x = document.getElementById("headerTopnav");
  if (x.className === "mynav") {
    x.className += " responsive";
  } else {
    x.className = "mynav";
  }
}
 