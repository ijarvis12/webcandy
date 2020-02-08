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

String.prototype.hashCode = function(){
    var hash = 0;
    for (var i = 0; i < this.length; i++) {
        var character = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+character;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function load() {
  if(document.getElementById("username").value.hashCode() == 69156280 && document.getElementById("password").value.hashCode() == -1424436592) {
    window.location.href = "load.html";
  }
}
