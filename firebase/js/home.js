var container = document.getElementById("userlist");

var currentUser;

const getCurrentUser = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var receiverRef = firebase.database().ref("students/" + user.uid);
      receiverRef.on("value", (snapshot) => {
        const data = snapshot.val();
        currentUser = data;

        document.getElementById("username").innerText = data.username;
        document.getElementById("email").innerText = data.email;
      });
    }
  });
};

const getAllUsers = () => {
  var usersRef = firebase.database().ref("students/");
  usersRef.on("child_added", (data) => {
    var userInfo = data.val();
    userInfo.id = data.key;

    console.log(userInfo);

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

    if (userInfo.uid !== currentUser.uid) {
      container.appendChild(usersec);
    }
  });
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
