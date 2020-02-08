var noAccnt = document.getElementById("noAccount");
var forgotPass = document.getElementById("forgotPassword");

function noAccount() {
  if(noAccnt.style.display == "none" && forgotPass.style.display == "none") {
    noAccnt.style.display = "block";
  }
  else {
    noAccnt.style.display = "none";
  }
}

function forgotPassword() {
  if(forgotPass.style.display == "none" && noAccnt.style.display == "none") {
    forgotPass.style.display = "block";
  }
  else {
    forgotPass.style.display = "none";
  }
}

function load() {
  window.location.href = "load.html";
}
