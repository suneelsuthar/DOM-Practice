function signup() {
  var useremail = document.getElementById("email").value;
  var userpassword = document.getElementById("password").value;
  var username = document.getElementById("username").value;

  if (useremail !== "" && userpassword !== "" && username !== "") {
    firebase
      .auth()
      .createUserWithEmailAndPassword(useremail, userpassword)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;

        user.sendEmailVerification().then(() => {
          console.log(" Email verification sent!");
          window.location.href = "./verification.html";
          // Email verification sent!
          // ...
        });

        user
          .updateProfile({
            displayName: username,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
            phoneNumber: "033122103983",
          })
          .then(() => {
            console.log("Update successful");
            // Update successful
            // ...
          })
          .catch((error) => {
            console.log("something went wrong");
            // An error occurred
            // ...
          });

        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }
}
