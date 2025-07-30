function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  if (!email) {
    alert("kindly Enter Your Email Address");
  } else if (!password) {
    alert("kindly Enter Your password");
  } else if (password.length < 8) {
    alert("kindly Enter Your password of 8 dijits");
  } else if (!username) {
    alert("kindly Enter Your username");
  } else if (username.includes(" ")) {
    alert("kindly Enter Your single word username");
  } else if (!phone) {
    alert("kindly Enter Your Phone Number");
  } else if (!date) {
    alert("kindly Enter Your date");
  } else {
    // console.log(email, password, username, phone, date);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        console.log(userCredential);
        await firebase
          .database()
          .ref("students")
          .child(userCredential.user.uid)
          .set({
            email: email,
            password: password,
            username: username,
            phone: phone,
            date: date,
            uid: userCredential.user.uid,
          })
          .then((res) => {
            console.log("added in database");
          })
          .catch((err) => {
            console.log("not added in database", err);
          });
        // Signed in
        window.location.href = "./home.html";
        // console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  }

  // async function logins() {
  //   await firebase
  //     .database()
  //     .ref("students")
  //     .signInWithEmailAndPassword(email.value, password.value);
  //   await firebase
  //     .database()
  //     .ref("uksers")
  //     .signInWithEmailAndPassword(email.value, password.value);
  //   await firebase
  //     .database()
  //     .ref("postas")
  //     .signInWithEmailAndPassword(email.value, password.value);
}
