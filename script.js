function DispOpts() {
  document.getElementById("Opts").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.nav-btn')) {
    var dropdowns = document.getElementsByClassName("opt-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        console.log(i);
      }
    }
  }
}
function ViewContact() {
  document.querySelector("#Contact").scrollIntoView({ behavior: "smooth" });
}
function ViewAbt() {
  document.querySelector("#About").scrollIntoView({ behavior: "smooth" });
}
// var c1 = document.getElementsByClassName("c1")[0];
// var c2 = document.getElementsByClassName("c2")[0];

// c1.addEventListener("mouseenter", function( event ) {
//   event.target.style.animationName = "spinr";
// });
// c1.addEventListener('mouseleave', e => {
//   e.target.style.animationName = "spinl";
//   console.log("c1-leave")
// });
// c2.addEventListener("mouseenter", function( event ) {
//   event.target.style.animationName = "spinl";
// });
// c2.addEventListener('mouseleave', e => {
//   e.target.style.animationName = "spinr";
//   console.log("c2-leave")
// });


