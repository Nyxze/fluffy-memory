let textInput, offSet, charCode, textOutput = "";

do {

    textInput = prompt("Text here : ");
    offSet = parseInt(prompt("Offset ?") % 26);
    if (offSet <= 0 || isNaN(offSet)) alert("Incorrect offset ");
   

} while (offSet <= 0 || isNaN(offSet));

for (index in textInput) {
    charCode = textInput.charCodeAt(index);
    if ((charCode == 90 || charCode == 122)) {

        textOutput += String.fromCharCode(charCode - 26 + offSet);
    }else{
        textOutput += String.fromCharCode(charCode + offSet);
    }
}

alert(textOutput);
