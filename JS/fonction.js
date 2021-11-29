
/**
    function hello(name){
    
        console.log("Hello" + name);
        console.log(`Hello ${name}`);
    }
    
    hello("world");
    
    
    const hello2 = function(name){
        console.log("Hello" + name);
        console.log(`Hello ${name}`);
    
    
        }
        hello2("rene");
*/
/** 
hello5("world");
 
 
function hello3(name){
 
    console.log("Hello" + name);
     return "Hello" + name;
}
 
function hello4 ( name = "Seb"){
    return "Hello" + name;
 
}
var msg = hello4();
console.log(msg);
 
function ttc(ht, tva = 20){
    return ht * (1+(tva/100));
}
console.log(ttc(180));
console.log(ttc(180,8));
*/


/**
    function convertCelsiusToFarenheit(temp){
        return (temp-32)*5/9;
    
    }

    const celcius = process.argv[2]||0;
    console.log(convertCelsiusToFarenheit(50));


*/

/**
    function convertCelsiusFarenheit(temp){
        return (temp+32)*9/5;
    
    }
    const celcius = process.argv[2]||0;
    console.log(convertCelsiusFarenheit(celcius));

    
*/
/**
    function validationPassword(password){
        const  myPassword = process.argv[2]||" ";;
    
        for (i in password){
            if (charAt(myPassword(i)) != charAt(password(i))){
                break;
            } 
            console.log("Valid psw");
        }
        console.log("Wrong psw")
    }
    validationPassword("123azerty");
*/

/**
    var output = document.getElementById("year");
    output.innerHTML = listYear(2010, 10);
    
    function listYear(start, numberOfYear, inTheFuture = false) {
        let html = "<select>";
    
        for (let i = 0; i <= (numberOfYear); i++) {
            html += "<option>" + parseInt(start + i) + "</option>";
    
        }
        html += "</select>"
        console.log(html);
        return html;
        
    }
*/



/**
    output= document.getElementById("year");
    output.innerHTML = listYear ;
*/


function add(a,b){
    return a+b;

}


function factory (arg,f){
    return function(b){
        return f(arg,b)
    };

}

const  add5 = factory(5, add);

function greet(name, greeting){
    console.log(greeting + " "+ name);
    
}
greet("Seb", "Yop");

function greetFactory (greeting){
    return function (name){
        return greet(name, greeting);
    }
}
const greetInSpanish = greetFactory("Hola")
greetInSpanish("Pedro");