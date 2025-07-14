function getUserData() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("userEmail").innerHTML = user.email;
      document.getElementById("uid").innerHTML = user.uid;
      document.getElementById("username").innerHTML = user.displayName;
      document.getElementById("img").src = user.photoURL;
      document.getElementById("verify").innerHTML = user.emailVerified;

      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "../index.html";
    })
    .catch((error) => {
      console.log(error);
    });
}
