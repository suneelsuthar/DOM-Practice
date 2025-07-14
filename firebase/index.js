function login() {
  const useremail = document.getElementById("email").value;
  const userpassword = document.getElementById("password").value;
  firebase
    .auth()
    .signInWithEmailAndPassword(useremail, userpassword)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      if (user.emailVerified === true) {
        window.location.ref = "./pages/home.html";
      }
      {
        window.location.href = "./pages/verification.html";
      }
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function checkUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified === true) {
        window.location.href = "./pages/home.html";
      } else {
        window.location.href = "./pages/verification.html";
      }
    }
  });
}
