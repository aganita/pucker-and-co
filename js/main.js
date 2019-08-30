"use strict";
var title = document.title;
var restaurants = [];
var filteredList = [];
var donts = {};

var pucker_restaurants = [
    "Cafe 220",
    "Chipotle",
    "Ikes",
    "Jing Jing",
    "Lemonade",
    "Onigilly",
    "Pizza",
    "Shake Shack",
    "Sprouts",
    "Subway",
    "Sushiritto",
    "Thaiphoon",
    "Wahlburgers",
    "Whole Foods"
  ];

var pucker_donts = {
  ani : ["Sprouts", "Pizza", "Ikes", "Subway"],
  eric : ["Whole Foods"],
  matthew : [],
  mark: [],
  ratnakar : [],
  rick : ["Sprouts"],
  sanjoy : [],
  soniya : []
};
  
function setGlobalVariables() {
  title = title.toLowerCase();
  var var1 = title + "_restaurants";
  var var2 = title + "_donts";
  restaurants = window[var1];
  donts = window[var2];
  filteredList = restaurants;
}
  
setGlobalVariables();

function validate() {   
  document.getElementById("showOptions").innerHTML = '';
  var elements = document.getElementsByTagName('input');
  filteredList = restaurants;
  for (var i = 0; i < elements.length; i++) {
    var input = elements[i];
    var hungry =  elements[i].value; 

    if (input.checked && donts.hasOwnProperty(hungry) && donts[hungry].length > 0) {
      filteredList = filteredList.filter(function(val){
        return (donts[hungry].indexOf(val) === -1);
      });
    }
  }
  showOptions(filteredList);
}

function randomOption() {
  document.getElementById("showOptions").innerHTML = '';
  var rand = Math.floor(Math.random() * filteredList.length);
  showOptions([filteredList[rand]]);
}
  
function allOptions() {
  document.getElementById("showOptions").innerHTML = '';
  var elements = document.getElementsByTagName('input');
  for (var i = 0; i < elements.length; i++) {
    var input = elements[i];
    input.checked = false;
  }
  
  showOptions(restaurants);
}

function showOptions(arr){
  var div = document.createElement('div');
  if (Array.isArray(arr) && arr.length > 0) {
    var ul = document.createElement('ul');
    for(var i = 0; i< arr.length; i++) {
      var li = document.createElement('li');
      var txt = document.createTextNode(arr[i]);
      li.appendChild(txt);
      ul.appendChild(li);
    }
    div.appendChild(ul);
  } else {
    txt = document.createTextNode("hmmm... it worked on my computer");
    div.appendChild(txt);
  } 
  document.getElementById("showOptions").appendChild(div);
}
// .- -. .. --. -- .-
