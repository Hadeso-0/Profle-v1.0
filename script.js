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