// alert("hello");
// var download = 100;
// var name = "devleoper";
// var paragraph = "kumar";
// var lastName = true;
// var age = 20;
// var num1 = 40;
// var num2 = 50;
// var firstName = "Vikram";
// var lastName = "kumar";
// var fullname = firstName+ " " +lastName +" suthar";
// console.log(fullname);
// var num1 = 2;
// var num2 = 4;
// var calculation = (70/100)*100;
// var total = num1 % num2 ;
// var num = 2;
// num = 4;
// var result = num*2;
// console.log(result);

// var student1 ="vikram";
// var student2 ="Developer";
// var student3 ="sachin";
// var student4 = "rohit";
// student4 = "new data";

// push() unshift(), pop(),shift()
// var students = ["vikram", "Developer", "sachin", "student 4"];
// students.splice(1,0,"Test1","Test2","Test3")
// console.log(students)

// students[0] = "new data"
// students.pop();
// students.pop();

// students.unshift("student3", "student4");
// console.log(students);

// console.log(students);
// students[0] = "kumar";
// console.log(students);
// students[0] = "vikram kumar"

// console.log(students)
// document.write(students.length);

// var iphone6 = {};
// var iphones =[];

// var profile ={
//     myPosts:[],
//     commments:[],
//     like:[],
//     followe:[],
//     follower:[],
//     persnolinfo:{

//     }
// }

// var primeNumbers = [];

// for (var i = 2; i <= 100; i++) {
//   var isPrime = true;
//   for (var j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     primeNumbers.push(i);
//   }
// }
// console.log(primeNumbers);
// var date = new Date();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentDay = currentDate.getDay()
// console.log(days[currentDay])

// var currentMonth = currentDate.getMonth()
// console.log(months[currentMonth])

// var currentDate = date.getDate();
// console.log(date);

// var currentYear = date.getFullYear();
// console.log(currentYear);

// var currentHours = date.getHours();
// console.log(currentHours);

// var currentMinutes = date.getMinutes();
// console.log(currentMinutes);

// var currentSeconds = date.getSeconds();
// console.log(currentSeconds);

// var currentMiliSeconds = date.getMilliseconds();
// console.log(currentMiliSeconds);

// document.write(
//   "<h1>" +
//     currentHours +
//     ":" +
//     currentMinutes +
//     ":" +
//     currentSeconds +
//     ":" +
//     currentMiliSeconds +
//     "</h1>"
// );

// var getTime = date.getTime();
// var seconds = getTime/1000;
// var minutes = seconds/60;
// var hours = minutes/60;
// var days = hours/24;
// var months = days/30;
// var years = months/12;
// console.log(years)

// var birthDay = new Date("June 30, 2000");
// var birthDayinMiliSeconds = birthDay.getTime();
// var currentDate = new Date();
// var currentDateInMiliSeconds = currentDate.getTime();

// var diffInMiliSeconds = currentDateInMiliSeconds - birthDayinMiliSeconds;
// var seconds = diffInMiliSeconds / 1000;
// var minutes = seconds / 60;
// var hours = minutes / 60;
// var days = hours / 24;
// var months = days / 30;
// var years = months/12
// console.log("=====mintues===:>", minutes);
// console.log("=====hours===:>", hours);
// console.log("====days===+>", days);
// console.log("====moths===+>", months);
// console.log("====years===+>", Math.floor(months));

// var date = new Date();
// date.setMonth(1)
// console.log(date)

// NETFLIX SUBSCRIPTION
// var subscriptionDate = new Date("May 27, 2025");
// var subscriptionUpto = new Date("June 20, 2027");

// var rollNumbers = [1002, 1005, 1070, 1050];
// ;
// var score = 33;
// if (score >= 33) {
//   console.log("congratulations you are passed");
// }
// else {
//   console.log("you are failed");
// }

// < , <=, >, >= , && , || , === , "=", !==,!=

// var score = 0;
// var ispaid = false;

// var isTrial = true

// console.log("sfd");
// console.log("sfd");
// console.log("sfd");
// console.log("sfd");

// if (score === 0) {
//   console.log("pay now");
//   score++;
// } else {
//   console.log("donwloading");
// }

// var result = --score;
// console.log("====result===>", result);
// console.log("====score====>", score);
// score--
// score++
// score = score + 2;
// console.log("======>", score);

// var fistname = "Hello";
// var lastname = "World";

// var username = fistname + " " + lastname;
// console.log(username);

// var bloodGroup = prompt("Enter your blood group?");

// var num1 = 10;
// num1= num1+10
// console.log(num1)

// var num2 = ++num1;
// console.log("========>", num2);

// var num = "10";
// if (num === "10") {
//   console.log("if statement working");
// }

// var a = false

// if(a){
//     console.log("correct")
// }

// var a = 10
// a+20

// var arr = [1, 2];
// arr[5] = "last number"
// console.log(arr.length)

// console.log(newArr);
// console.log(arr);

// var name ="hello";
// name = name.slice(1);

// console.log(name);

// var age = +prompt("Enter your age?");
// console.log(age);

// var bloodGroup = prompt("Enter your blood group", "O-");
// if (bloodGroup === "O-") {
//   console.log("you can donote to any one");
//   console.log("you can receive from o-");
// } else if (bloodGroup === "A+") {
//   console.log("you can donote to A+, AB+");
//   console.log("you can receive from O-,O+,A+,A-");
// } else if (bloodGroup === "A-") {
//   console.log("you can donote to A+, AB+,A-,AB-");
//   console.log("you can receive from O-,A-");
// } else {
//   console.log("Not Found");
// }

// if(true){

// }

// if(true){

// }
// else{

// }

// var role = "Admin"
// if(role === "Admin"){

// }
// else if(role === "Student"){

// }

// else if(role === "Teacher"){

// }
// else{

// }

// if (students[0] === 10) {
//   console.log("available");
// } else if (students[1] === 10) {
//   console.log("available");
// } else if (students[2] === 10) {
//   console.log("available");
// } else if (students[3] === 10) {
//   console.log("available");
// } else if (students[4] === 10) {
//   console.log("available");
// } else if (students[5] === 10) {
//   console.log("available");
// } else if (students[6] === 10) {
//   console.log("available");
// } else if (students[7] === 10) {
//   console.log("available");
// } else if (students[8] === 10) {
//   console.log("available");
// } else if (students[9] === 10) {
//   console.log("available");
// }

// var students = [11, 23, 23, 345, 456, 567, 578, 789];

// var isAvailable = "absent";
// for (var i = 0; i < students.length; i++) {
//   if (students[i] === 23) {
//     isAvailable = "present";
//   }
// }

// if (isAvailable === "present") {
//   console.log("Student available");
// } else {
//   console.log("Student not available");
// }

// if (isAvailable) {
//   console.log("Student available");
// } else {
//   console.log("Student not available");
// }

// var netflixUsers = [
//   {
//     username: "user 1",
//     trial: ["day1", "day2", "day3"],
//   },
//   {
//     username: "user 2",
//     trial: ["day1", "day2", "day3"],
//   },
//   {
//     username: "user 3",
//     trial: [],
//   },
// ];

// for (var i = 0; i < netflixUsers.length; i++) {
//     var trials = netflixUsers[i].trial;
//     // for(var j=0; j < trials.length; j++){
//     //     console.log(trials[j])
//     // }

// }

// var products  = ["apple","book","cat","dog"]

// var results = ["A for Apple","B for Book","C for Cat"]

// const products = [
//   "apple",
//   "book",
//   "cat",
//   "dog",
//   "egg",
//   "fan",
//   "guitar",
//   "hat",
//   "ice cream",
//   "juice",
//   "kite",
//   "lamp",
//   "mirror",
//   "notebook",
//   "orange",
//   "pen",
//   "queen",
//   "ring",
//   "shoes",
//   "table",
//   "imbrella",
//   "vase",
//   "watch",
//   "xylophone",
//   "yarn",
//   "zipper",
// ];

// var newArr = [];
// for (var i = 0; i < products.length; i++) {
//   var productName = products[i];
//   productName = productName.slice(0, 1).toUpperCase() + productName.slice(1);
//   var firstLetter = productName.slice(0, 1).toUpperCase();

//   newArr.push(firstLetter + " for " + productName);
// }

// console.log(newArr)
// var users = ["user 1", "user 2", "user 3", "user 4", "user 5"];
// var enterName = prompt("Enter your name");

// function login(param1, param2, param3) {
//   console.log(param1);
//   console.log(param2);
//   console.log(param3);
// }

// login("hello@gmail.com", "11233", "vikram");

// function calculate(num1, num2, type) {
//   var total = 0;
//   if (type === "minus") {
//     total = num1 - num2;
//   } else if (type === "plus") {
//     total = num1 + num2;
//   } else if (type === "multiply") {
//     total = num1 * num2;
//   }
//   return total;
// }

// var answer = calculate(10, 1234241, "plus");
// console.log(answer);
// function login(email, password) {
//   if (email === "hello@gmail.com" && password === "112233") {
//     return "Login Success";
//   } else {
//     return "18 years";
//   }
// }

// var isValid = login("hell@gmail.com", "112233");
// console.log(isValid);

// function test() {

// }

// var score = test();
// console.log(score);
// var num1 = 300

// function calculateData(num1, num2, type) {
//   var total = 0;
//   if (type === "plus") {
//     total = num1 + num2;
//   } else if (type === "minus") {
//     total = num1 - num2;
//   } else if (type === "multiply") {
//     total = num1 * num1;
//   } else if (type === "divide") {
//     total = num1 / num2;
//   }
//   alert(total);
//   // return total;
// }

// var result = calculateData(10, 5, "multiply");
// console.log(result);
// function getrandomNum(param1) {
//   // var random = Math.random() * param1;
//   // alert(random);
// }
// var a = "hello";
// function test2() {
//   a = "world";
// }
// console.log(a);
// test2();
// console.log(a);

// function getUsername(){
// var firstname = "hello"
// var lastname = "world"
//    return firstname+lastname
// }

// function userDetails(){
//   var name = getUsername()
// }
// var num  = 5
// function test(hello) {
//     num=hello
// }
// test(5+5)
// console.log(num)
// num++
// ++num

// function newFunc() {
//   return 2 * 2;
// }

// function test() {
//   return newFunc();
// }

// var result = test();
// console.log(result)

// var day = prompt("Enter day");

// var user = "loggedin";

// switch (user) {
//   case "loggedin":
//     window.location.href = "./home.html";
//     break;
//   case "newuser":
//     window.location.href = "./gettingstart.html";
//     break;

//   default:
//     window.location.href = "./login.html";
// }

// switch (day) {
//   case "Monday":
//     console.log("Today is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today is Tuesday");
//     break;

//   default:
//     console.log("Invalid day");
// }]

// for(var i=0; i < 5; i++){
//     console.log(i)
// }

// var i = 0;
// while (i < 5) {
//   i++;
// }

// var i = 10;
// do {
//   console.log("hello");
//   i++;
// } while (i < 5);

// function saveForm() {
//   var username = document.getElementById("username").value;
//   var age = document.getElementById("age").value;
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//     if (username === "") {
//       alert("Enter user name");
//     } else if (age === "") {
//       alert("Enter your age");
//     } else if (email === "") {
//       alert("Enter your email");
//     } else if (password === "" || password.length < 7) {
//       alert("Enter your password");
//     } else {
//       alert("Form submitted successfully");
//     }
// }

// function savePara() {
//     alert("")
//   var paragraph = document.getElementById("para").innerText;
//   console.log(paragraph);
// }

// function saveImage(){

//     var img = document.getElementById("img").src

// }

// function onBlub() {
//   document.getElementById("blub").src = "./on.gif";
// }

// function offBlub() {
//   document.getElementById("blub").src = "./off.gif";
// }

// function handleBlub(type) {
//   if (type === "on") {
//     document.getElementById("blub").src = "./on.gif";
//   } else {
//     document.getElementById("blub").src = "./off.gif";
//   }
// }

// var para1 = document.getElementById("para1");
// para1.style.color = "red";
// para1.style.backgroundColor = "green";
// para1.style.fontSize = "20px";
// para1.style.fontWeight = "bold";

// var orderList = document.getElementsByTagName("li");
// for (var i = 0; i < orderList.length; i++) {
//   var listvalue = orderList[i].innerText;
//   if (listvalue >= 5) {
//     orderList[i].style.backgroundColor = "red";
//   }
// }

// var unorderList = document.getElementsByTagName("ul")[0];
// var unorderListChild = unorderList.parentNode;
// console.log(unorderListChild);

// var data = document.childNodes[1].childNodes[2].childNodes[17].childNodes[5];
// data.style.color="red"
// console.log(data);

// var parent = document.getElementsByTagName("body")[0];

// var paragraph1 = document.createElement("p");
// paragraph1.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptas error neque consectetur veniam beatae esse a alias, ab magnam provident praesentium laborum velit? Optio, culpa. Unde facere veniam quaerat.";

// var paragraph2 = document.createElement("p");
// paragraph2.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptas error neque consectetur veniam beatae esse a alias, ab magnam provident praesentium laborum velit? Optio, culpa. Unde facere veniam quaerat.";

// parent.appendChild(paragraph1);
// parent.appendChild(paragraph2);

// var products = [
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
//   "iphone",
//   "samsung",
//   "nokia",
//   "vivo",
//   "oppo",
// ];

// var productview = document.getElementById("productview");

// for (var i = 0; i < products.length; i++) {
//   var card = document.createElement("div");
//   card.setAttribute("class", "card");
//   card.setAttribute("style", "width:18rem");

//   var cardImg = document.createElement("img");
//   cardImg.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
//   );
//   cardImg.setAttribute("class", "card-img-top");
//   cardImg.setAttribute("alt", "product image");

//   var cardBody = document.createElement("div");
//   cardBody.setAttribute("class", "card-body");

//   var title = document.createElement("h5");
//   title.setAttribute("class", "card-title");
//   title.innerText = products[i];

//   var desc = document.createElement("p");
//   desc.setAttribute("class", "card-text");
//   desc.innerText =
//     "Some quick example text to build on the card title and make up the bulk of the card’s content.";

//   var btn = document.createElement("a");
//   btn.setAttribute("href", "#");
//   btn.setAttribute("class", "btn btn-primary");
//   btn.innerText = "Go somewhere";

//   card.appendChild(cardImg);
//   cardBody.appendChild(title);
//   cardBody.appendChild(desc);
//   cardBody.appendChild(btn);
//   card.appendChild(cardBody);

//   productview.appendChild(card);
// }

// var categoriesList = ["iphone", "samsung", "nokia", "vivo", "oppo"];

// var dropdown = document.getElementById("categories");
// for (var i = 0; i < categoriesList.length; i++) {
//   var li = document.createElement("li");
//   var a = document.createElement("a");
//   a.setAttribute("class", "dropdown-item");
//   a.setAttribute("href", "#");
//   a.innerText = categoriesList[i];
//   li.appendChild(a);
//   dropdown.appendChild(li);
// }

// var heading = document.getElementById("heading");

// for (var i = 0; i <= 100; i++) {
//   var h1 = document.createElement("h1");
//   h1.innerText =`Hello World ${i+1}`;
//   heading.appendChild(h1);
// }
