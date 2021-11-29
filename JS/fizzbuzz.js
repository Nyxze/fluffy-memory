let fizz, buzz, numberAsked;
let message = "";
numberAsked = prompt("number?");

if (numberAsked % 3 == 0) {
    message += "fizz" ;
}
if (numberAsked % 5 == 0) {
    message += "buzz" ;
}
if (!message){
    message = numberAsked;
}

console.log(message);
