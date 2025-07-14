function reSend() {
  firebase
    .auth()
    .currentUser.sendEmailVerification()
    .then(() => {
      console.log("Email verification sent!");
      // Email verification sent!
      // ...
    });
}

function checkStatus() {
  alert("");
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      if (user.emailVerified === true) {
        window.location.href = "./home.html";
      }
    }
  });
}
