/**
    console.log("Hey I just met you");
    choice = (prompt("1. Fuir 2. Fight 3.Hide"));
    
    const fuir = choice == 1;
    const fight = choice == 2;
    const hide = choice == 3;
    
    if (!fuir || !fight || !hide) {
        if (fuir) {
            choice = confirm("Fast?")
            console.log(choice ? "Succes" : "Nop");
        }
        if (fight) {
            choice = confirm("Strong?")
            console.log(choice ? "Succes" : "Nop");
        }
        break
    
        if (hide) {
            choice = confirm("Stealth?")
            console.log(choice ? "Succes" : "Nop");
        }
    
    }
    console.log("Retry");
*/

