let exString = "asik veysel";
let end = exString.split(" ");
let print = [];

for (let index = 0; index<end.length; index++) {
    print.push(end[index].charAt(0).toUpperCase() + end[index].slice(1));
}
console.log(print.join(" "));

////////////////////////////////////////////

let space = "";
for (let i = 1; i<101; i++) {
    if (i % 10 == 1) {
        space = space + "\n";

    }
    space = space + i + ",";
}
console.log(sapace);

/////////////////////////////////////////////
let asalDizi = [];
for (let i = 2; i < 101; i++) {
    let status = true;
    for (let j = 2; j< Math.sqrt(i); j++) {
        if (i % j == 0) {
            status = false;
        }
    }
    if (status) {
        asalDizi.push(i);
    }
}
console.log(asalDizi);

////////////////////////////////////////

 let i;
 let yildizList = [""];

 for (i = 0; i < 7; i++){
     yildizList.push("*");
     console.log(yildizList.join("");)
 }

