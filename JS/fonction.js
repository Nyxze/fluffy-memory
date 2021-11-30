
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


/**
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
*/

/**
    
    let moyenne = 0;
    let max = 0;
    let indexOfMax = 0;
    
    for (i in array) {
        moyenne += array[i];
    
        if (array[i] > max) {
            max = array[i];
            indexOfMax = i;
        }
    
        if (array[i] == max) {
            indexOfMax += " " + i;
        }
    
    
    }
    
    console.log(moyenne / (array.length));
    
    console.log(max);
    if (indexOfMax.length >1){
        console.log(indexOfMax.slice(1));
    }else{
        console.log(indexOfMax);
    }
*/

const array = [3, 2, 7, 8, 5]

/**
    function hasValue(value,array){
        for (i of array){
            if (value == i)
            return true;
        }
        return false;
            
        
    }
    
    console.log(hasValue(12,array));
*/


/**
    function naiveSearch(haystack, needle) {
        found = false;
        for (item of haystack) {
            if (item == needle)
                found = true;
            break;
        }
        return found;
    }
    console.log(naiveSearch(array, 10));
*/

/**
    const sortedList = array.sort();
    
    function binarySearch(haystack, needle) {
        let start = 0,
            end = haystack.length -1;
    
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            let currentValue = haystack[middle];
            console.log(middle);
    
            //Found
            if (currentValue === needle) {
                return true;
            }
            //Si la value se trouve dans entre start & middle
            if (currentValue > needle) {
                end = middle - 1;
            }
            //Si la value se trouve dans entre middle & end 
            if (currentValue < needle) {
                start = middle + 1;
            }
    
        } return false;
    
    }
    
    
        function recursiveBinarySearch(haystack,needle,start,end){
            // Condition de sortie
            if(start>end) return false;
        
        
            let middle = Math.floor((start+end)/2);
        
            // Succes
            if (haystack[middle] === needle) return true;
        
            if(haystack[middle] > needle){
                return recursiveBinarySearch(needle, haystack, start, middle-1);
            } else {
                return recursiveBinarySearch(needle, haystack, middle+1, end);
            }
            
        
        
        
        }
*/

/**
    console.log(array.length);


*/

function createMatrix(row,column) {
    var array = []

        for (let x = 0; x <  row; x++){
            let arrayTemp = [];
            for (let y = 0; y < column; y++){
                arrayTemp.push(Math.round(Math.random()))
            }
            array.push(arrayTemp);
            
        }

        return console.log(array)


}

createMatrix(5,5);