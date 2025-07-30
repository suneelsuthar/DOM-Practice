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
  usersRef.on("child_added", (data) => {
    var message = data.val();
    console.log(message);

    var chatIds = message.chatId.split("_");
    console.log(chatIds);
    if (chatIds.includes(currentUser.uid) && chatIds.includes(receiverId)) {
      var messagebox = document.createElement("div");

      messagebox.setAttribute("class", message.senderId === currentUser.uid ? "box sender" : "box receiver");


      var userpic = document.createElement("div");
      userpic.setAttribute("class", "avatar");
      userpic.innerText = message.senderId === currentUser.uid ? currentUser.email.charAt(0) : receiver.email.charAt(0);

      var bubble = document.createElement("div");
      bubble.setAttribute("class", message.senderId === currentUser.uid ? "bubble bubble-sender" : "bubble bubble-receiver");

      var messagetext = document.createElement("span");
      messagetext.innerHTML = message.text;
      messagetext.setAttribute("class", "text");
      var time = document.createElement("div");
      time.innerHTML = "11:12 pm";
      time.setAttribute("class", "time");
      bubble.appendChild(messagetext);
      bubble.appendChild(time);

      messagebox.appendChild(userpic);
      messagebox.appendChild(bubble);
      messageview.appendChild(messagebox);
    }

    // console.log(message);
  });
};
