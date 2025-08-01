var serchParam = window.location.search;
var receiverId = serchParam.slice(serchParam.indexOf("=") + 1);
var currentUser = null;
var receiver = null;
const getReciverUserData = () => {
  var receiverRef = firebase.database().ref("students/" + receiverId);
  receiverRef.on("value", (snapshot) => {
    const data = snapshot.val();

    document.getElementById("firstletter").innerText = data.username.charAt(0);
    document.getElementById("username").innerText = data.username;
    document.getElementById("email").innerText = data.email;
    receiver = data;
    console.log(data);
  });
};

const sendMessage = () => {
  var chatId = currentUser.uid + "_" + receiverId;
  var messageText = document.getElementById("input").value;
  if (messageText) {
    var postListRef = firebase.database().ref("messages");
    var obj = {
      text: messageText,
      createdAt: new Date().getTime(),
      receiverId: receiverId,
      senderId: currentUser.uid,
      chatId: chatId,
    };
    postListRef.push(obj);
    document.getElementById("input").value = "";
  } else {
    alert("enter message");
  }
};

function getCurrentUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = user;
    }
  });
}

var messageview = document.getElementById("messageview");
const getAllMessages = () => {
  var usersRef = firebase.database().ref("messages");
  usersRef.on("child_changed", (data) => {
    var message = data.val();
    message.uid = data.key;
    document.getElementById(message.uid).innerText = message.text;

    var chatIds = message.chatId.split("_");
    console.log(chatIds);
  });

  var usersRef = firebase.database().ref("messages");
  usersRef.on("child_removed", (data) => {
    var message = data.val();
    message.uid = data.key;
    document.getElementById(message.uid).parentNode.parentNode.remove();
    var chatIds = message.chatId.split("_");
    console.log(chatIds);
  });

  usersRef.on("child_added", (data) => {
    var message = data.val();
    message.uid = data.key;

    var chatIds = message.chatId.split("_");
    console.log(chatIds);
    if (chatIds.includes(currentUser.uid) && chatIds.includes(receiverId)) {
      var messagebox = document.createElement("div");
      messagebox.setAttribute(
        "class",
        message.senderId === currentUser.uid ? "box sender" : "box receiver"
      );
      var userpic = document.createElement("div");
      userpic.setAttribute("class", "avatar");
      userpic.innerText =
        message.senderId === currentUser.uid
          ? currentUser.email.charAt(0)
          : receiver.email.charAt(0);
      var bubble = document.createElement("div");
      bubble.setAttribute(
        "class",
        message.senderId === currentUser.uid
          ? "bubble bubble-sender"
          : "bubble bubble-receiver"
      );
      var messagetext = document.createElement("span");
      messagetext.innerHTML = message.text;
      messagetext.setAttribute("id", message.uid);
      messagetext.setAttribute("class", "text");
      var time = document.createElement("div");
      time.innerHTML = "11:12 pm";
      time.setAttribute("class", "time");

      var bubbleFooter = document.createElement("div");
      bubbleFooter.setAttribute("class", "bubble-footer");

      var editBtn = document.createElement("button");
      editBtn.innerText = "Edit";
      editBtn.setAttribute("class", "eidtbtn");
      editBtn.setAttribute("class", "edit-btn");
      editBtn.addEventListener("click", function () {
        var newText = prompt("Enter new message");

        if (newText) {
          firebase
            .database()
            .ref("messages/" + message.uid)
            .update({
              text: newText,
              updatedAt: new Date().getTime(),
            })
            .then((res) => {
              this.parentNode.parentNode.firstChild.innerText = newText;
              console.log("message updated");
            })
            .catch((err) => {
              console.log("=====>", err);
            });
        }
      });

      var dltBtn = document.createElement("button");
      dltBtn.innerText = "Delete";
      dltBtn.setAttribute("class", "delete-btn");
      dltBtn.addEventListener("click", function () {
        firebase
          .database()
          .ref("messages/" + message.uid)
          .remove()
          .then((res) => {
            this.parentNode.parentNode.parentNode.remove();
          });
      });
      bubbleFooter.appendChild(editBtn);
      bubbleFooter.appendChild(dltBtn);

      bubble.appendChild(messagetext);
      bubble.appendChild(time);

      if (message.senderId === currentUser.uid) {
        bubble.appendChild(bubbleFooter);
      }

      messagebox.appendChild(userpic);
      messagebox.appendChild(bubble);
      messageview.appendChild(messagebox);
    }

    // console.log(message);
  });
};
