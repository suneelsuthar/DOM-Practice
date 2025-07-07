var data = localStorage.getItem("students");
if (data) {
  data = JSON.parse(data);
} else {
  data = [];
}

console.log(data);

var userlist = document.getElementById("userlist");

for (var i = 0; i < data.length; i++) {
  var li = document.createElement("li");

  var username = document.createElement("span");
  username.innerText = data[i].username;

  var email = document.createElement("span");
  email.innerText = data[i].email;
  var password = document.createElement("span");
  password.innerText = data[i].password;

  var dlt = document.createElement("button");
  dlt.innerHTML = "Delete";
  dlt.setAttribute("id", i);
  dlt.addEventListener("click", function () {
    data.splice(this.id, 1);
    localStorage.setItem("students", JSON.stringify(data));
    console.log(data);
    window.location.reload();
  });

  var edit = document.createElement("button");
  edit.innerText = "Edit";
  edit.setAttribute("id", i);
  edit.addEventListener("click", function () {
    var newusername = prompt("Enter user name", data[this.id].username);
    var newemail = prompt("Enter email", data[this.id].email);
    var newpassword = prompt("Enter password", data[this.id].password);
    if (newusername !== "" && newemail !== "" && newpassword !== "") {
      data[this.id].username = newusername;
      data[this.id].email = newemail;
      data[this.id].password = newpassword;
      localStorage.setItem("students", JSON.stringify(data));
      window.location.reload();
    }
  });

  li.appendChild(username);
  li.appendChild(email);
  li.appendChild(password);

  li.appendChild(edit);
  li.appendChild(dlt);
  userlist.appendChild(li);
}

