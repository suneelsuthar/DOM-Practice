function login() {
  var emailValue= document.getElementById("email").value
  var passwordValue= document.getElementById("password").value
  firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    window.location.href = './pages/home.html'
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}

function checkUser() {
 
}
