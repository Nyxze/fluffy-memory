

/**
    const actions = {
        stealth: { goodChoice: "Sneak", badChoice : "Yolo" , succes: () => console.log("Succes"), failed: () => console.log("Failed") },
        fight: { typeSelect: "Strong", badChoice : "Yolo", succes: () => console.log("Succes"), failed: () => console.log("Failed") },
        escape: { typeSelect: "Fast", badChoice : "Yolo", succes: () => console.log("Succes"), failed: () => console.log("Failed") },
    }
    
        let choice = (prompt("Escape,Fight,Stealth"));   //Select choice
            if (choice in actions) {     // If choice is possible 
                choice = (prompt(actions.typeSelect))
                if (choice == actions.typeSelect) {                  // Define choice
                    actions[choice].succes();
                } else {
                    actions[choice].failed();
                }
            }else{
                alert("Wrong value");           //Choice not possible
            }
*/


rules = {
    settings: "Hey I just met you",
    actions: {
        Fuir: {
            question: "Fast ?",
            answers: {
                oui: "Succes",
                non: "Failed"
            }
        },
        Fight: {
            question: "Strong ?",
            answers: {
                oui: "Succes",
                non: "Failed"
            }
        },
        Hide: {
            question: "Smol ?",
            answers: {
                oui: "Succes",
                non: "Failed"
            }
        },

        Spell : {
            question: "Spell ?",
            answers: {
                oui: "Succes",
                non: "Failed"
            }

        }

    }

}
// import module readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
    rl.question("Votre âge ? ", function(answ){
        console.log(answ);
        rl.close();
        process.exit();
    });
*/
let message = rules.settings + "\n";
for (key in rules.actions) {
    message += key + " ";
}




// Fonction Oui/Non ?
function askForChoice(choice) {
    rl.question(rules.actions[choice].question, function (answ) {
        if (answ in rules.actions[choice].answers) {
            console.log(rules.actions[choice].answers[answ])
            rl.close();
            process.exit;
        } else {
            askForChoice(choice);
        }
    })


}

// Fonction de demande d'action
function askForAction() {

    rl.question(message, function (answ) {
        if (answ in rules.actions) {
            askForChoice(answ);

        } else {
            askForAction();
        }
        /**
            rl.close();
            process.exit();
        */
    });

}
askForAction();