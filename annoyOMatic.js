// var answer = prompt("are we there yet ?");

// while (answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("are we there yet ?");
// }

// alert ("YAH, We made it !");


// Version II
var answer = prompt("are we there yet ?");

while (answer.indexOf("yes") === -1) {
    var answer = prompt("are we there yet ?");
}

alert ("YAH, We made it !");