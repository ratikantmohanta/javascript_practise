var myName = prompt("What is Your Name?");
var nameLength = myName.length;

myName = myName.slice(0,1).toUpperCase() + myName.slice(1,myName.length).toLowerCase();

alert("Hello " + myName + ": name length:" + nameLength);


