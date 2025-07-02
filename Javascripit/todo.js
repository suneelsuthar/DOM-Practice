// var list = document.getElementById("todoList");
// function addTask() {
//   var task = document.getElementById("todoInput").value;
//   if (task !== "") {
// var listview = document.createElement("div");
// listview.setAttribute("class", "list");
// var h3 = document.createElement("h3");
// h3.setAttribute("class", "title");
// h3.innerText = task;

// var editBtn = document.createElement("button");
// editBtn.innerText = "Edit";
// editBtn.setAttribute("class", "btn btn-primary");
// editBtn.addEventListener("click", function () {
//   var newH3 = this.parentNode.firstChild;
//   var newValue = prompt("Enter new value", newH3.innerText);
//   if (newValue !== "") {
//     newH3.innerText = newValue;
//   } else {
//     alert("enter new value");
//   }
// });

// var dltbtn = document.createElement("button");
// dltbtn.innerText = "Delete";
// dltbtn.setAttribute("class", "btn btn-danger");
// dltbtn.addEventListener("click", function () {
//   this.parentNode.remove();
// });

// listview.appendChild(h3);
// listview.appendChild(editBtn);
// listview.appendChild(dltbtn);
// list.appendChild(listview);
//     document.getElementById("todoInput").value = "";
//   } else {
//     alert("Enter task");
//   }
// }

{
  /* <div> 
  <span>title</span>
  <button>edit</button>
  <button>delete</button>
</div>;
 */
}

// var listtext = document.createTextNode("hello")
// div.innerText ="new value"

var list = document.getElementById("todoList");

var arr = ["task1", "task2", "task3", "task4"];
function rederData() {
  list.innerText = "";
  for (var i = 0; i < arr.length; i++) {
    var listview = document.createElement("div");
    listview.setAttribute("class", "list");
    var h3 = document.createElement("h3");
    h3.setAttribute("class", "title");
    h3.innerText = arr[i];

    var editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.setAttribute("class", "btn btn-primary");
    editBtn.setAttribute("id", i);
    editBtn.addEventListener("click", function () {
      var newValue = prompt("Enter new value", arr[this.id]);
      var index = this.id;
      arr[index] = newValue;
      console.log(arr);
      rederData();
    });

    var dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.setAttribute("class", "btn btn-danger");
    dltbtn.setAttribute("id", i);
    dltbtn.addEventListener("click", function () {
      var index = this.id;
      arr.splice(index, 1);
      rederData();
    });

    listview.appendChild(h3);
    listview.appendChild(editBtn);
    listview.appendChild(dltbtn);
    list.appendChild(listview);
  }
}

rederData();

function addTask() {
  var task = document.getElementById("todoInput").value;
  arr.unshift(task);
  rederData();
  document.getElementById("todoInput").value = "";
}
