var container = document.getElementById("userlist");

var currentUser;

const getCurrentUser = async () => {
  return await firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      currentUser = user;
      var docRef = firebase.firestore().collection("students").doc(user.uid);
      docRef.get().then((doc) => {
        if (doc.exists) {
          var data = doc.data();
          data.uid = doc.id;
          currentUser = data;
        }
      });
    }
  });
};

const getAllUsers = () => {
  var usersRef = firebase.database().ref("students/");

  firebase
    .firestore()
    .collection("students")
    .orderBy("username", "desc")
    .limit(5)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var userInfo = doc.data();
        userInfo.id = doc.id;
        var usersec = document.createElement("div");
        usersec.setAttribute("class", "user-list-container");

        var pic = document.createElement("div");
        pic.setAttribute("class", "avatar");
        pic.innerHTML = userInfo.username.charAt(0);

        var username = document.createElement("h3");
        username.setAttribute("class", "user-name");
        username.innerHTML = userInfo.username;

        var email = document.createElement("h4");
        email.setAttribute("class", "user-email");
        email.innerHTML = userInfo.email;

        var button = document.createElement("button");
        button.innerHTML = "Send Message";
        button.setAttribute("class", "chat-btn");
        button.addEventListener("click", function () {
          window.location.href = `./chat.html?chatId=${userInfo.uid}`;
        });

        usersec.appendChild(pic);
        usersec.appendChild(username);
        usersec.appendChild(email);
        usersec.appendChild(button);

        if (currentUser && userInfo.uid !== currentUser.uid) {
          container.appendChild(usersec);
        }
        // doc.data() is never undefined for query doc snapshots
      });
    });

  // usersRef.on("child_added", (data) => {
  //   var userInfo = data.val();
  //   userInfo.id = data.key;

  //   console.log(userInfo);
  // });
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.href = "../index.html";
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};
