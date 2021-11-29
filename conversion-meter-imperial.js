//Variables
var heighInMeter,
    numberInFeet,
    numberInInch;


// Constantes
const numberOfCmPerAFeet = 30.48;
const numberOfCmPerInch = 2.54;

heighInMeter = window.prompt("Meter?");

if(isNaN(heighInMeter))
 { console.log("NaNAAA");

}

    else{numberInFeet = parseInt((heighInMeter * 100) / numberOfCmPerAFeet);


        var remains = (heighInMeter * 100) % numberOfCmPerAFeet;
        numberInInch = parseInt(remains / numberOfCmPerInch);
        
        console.log(
                "La taille : ", heighInMeter,
                "correspong à",
                numberInFeet, "pieds",
                numberInInch,"pouces");
        
    }

    