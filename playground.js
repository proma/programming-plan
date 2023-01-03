const myArr = [" hello", " Jet100", " How are you", 3, " 45"];

let removed = myArr.splice(2, 2, " hy", " bye");

document.getElementById("demo").innerHTML = myArr;

document.getElementById("demo2").innerHTML = removed;
