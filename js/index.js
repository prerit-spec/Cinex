firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("login321").style.display = "none";
      window.location = "./cinex.html";
    } else {
        document.getElementById("login321").style.display = "block";
    }
  })

function login() {
   var userEmail = document.getElementById("email").value;
   var userPass = document.getElementById("pass").value;

   firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("error" + errorMessage);
  });
}
function logout(){
    firebase.auth().signOut().then(function() {
        window.location = "./index.html"
      }).catch(function(error) {
        window.alert(error)
      });
} 