class Person { /// Modèle de création d'objet 

    constructor(name = "", firstName = "") { // Ajouter Address dans le constructor  ou utiliser un setter 
        this.name = name;
        this.firstName = firstName;
    }

    setName(name) {
        this.name = name;
        return this; // chaining de method 
    }

    setFirstName(firstName) {
        this.firstName = firstName;
        return this;
    }

    setAddress(address) {
        this.address = address;
        return this
    }

}

class Address {

    constructor(street = "", city = "") {
        this.street = street  // Crée street même si ça n'existe pas
        this.city = city;
    }

    getAddress() {
        return `${street}${city}`

    }

}


const perso1 = new Person(); // Appel auto constructor
perso1.setFirstName("Jacky").setName("Chan")  // Resultat de setFirstName = this donc l'objet Person donc qui possède la method setName
    .setAddress(new Address("Rue de", "Yolo"));
     //

//Instance d'objet dans un autre objet 



    
