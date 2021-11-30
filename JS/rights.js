/**
    const actions = {
        read: { access : 0, method : ()=> console.log("Read")},
        insert: { access : 1, method : ()=> console.log("Insert")},
        update: { access : 1, method : ()=> console.log("Update")}
    
    }
    const command = process.argv[2];
    
    //La commande existe-elle.
    if (command in actions){
        if(actions[command].access === 1 ){
            actions[command].method();
        }else {
            console.error("KO");
        }
    }else {
        console.error("Not valid ");
    }
*/

const actions = {
    stealth: { userChoice: 0, succes: () => console.log("Succes"), failed: () => console.log("Failed") },
    fight: { userChoice: 0, succes: () => console.log("Succes"), failed: () => console.log("Failed") },
    escape: { userChoice: 0, succes: () => console.log("Succes"), failed: () => console.log("Failed") },
    play: { continue: true, wantToPlay: () => console.log("Troll, what do you do ?") }
}


const choice1 = process.argv[2];
const choice2 = process.argv[3];

/**
    while (actions.play.continue == true) {
*/
    /**
        console.log("Want to play");
        if (choice == "Yes" || "yes")
    */ {

    actions.play.wantToPlay()
    if (choice1 in actions) {
        if (choice2 == 1) {
            actions[choice1].succes();
        } else {
            actions[choice1].failed();
        }
    }
}


