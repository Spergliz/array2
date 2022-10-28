let months = ["jan", "june", "july"];
console.log(months);

let Array = [];
for (let x = 0; x < 700; x++) {
  Array.push("joy");
}
console.log(Array);

let array3 = [];
for (let f = 0; f < 500; f++) {
  array3.push(7);
}
console.log(array3);

let array2 = [];
for (let q = 0; q < 5000; q++) {
  array2.push(Math.random() * 100);
}
console.log(array2);

let arrry4 = [];
for (let k = 0; k < 300; k++) {
  arrry4.push(Math.random() * 40);
}
console.log(arrry4);

let array5 = [];
for (let z = 20; z < 804; z += 4) {
  array5.push(z);
}
console.log(array5);

let arra = [];
for (let x = 100; x >= 10; x -= 2) {
  arra.push(x);
}
console.log(arra);

let colorsStr = "red,orange,yellow,green,blue,indigo,violet";
let array7 = colorsStr.split(",");
console.log(array7);

let citiesStr = "Edmonton;Calgary;Vancouver;Saskatoon;Winnipeg";
let array8 = citiesStr.split(";");
console.log(array8);

let array9 = [];
while (true) {
  let A = prompt(`enter name or done to end`);
  if (A === "done") {
    break;
  } else {
    array9.push(A);
  }
}
