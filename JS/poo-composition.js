var Person = function(name){
this.name = name;
}

const hasAdress = {
    street: null,
    city: null,
    getAdress:  function(){
        return `${this.street} ${this.city} `
    }
    
}


//Ajout d'adress à l'objet Person 

Object.assign(Person.prototype, hasAdress); // Ajout 
const a = new Person("Rene Lataupe");
a.city = "Dublin"
a.street = "Tapunière"
console.log(a.getAdress());
//Crée Objet AdressBook qui possède une liste de personne 
// addPerson(person) -> Permet d'ajouter au carnet 
// showAddresses() affiche tt le monde avec leur adress

var AdressBook = function(listPerson){
    this.listPerson = listPerson
    
    var showAddresses = function(){
        console.table(listPerson);

    }
}

var ListPerson = function(list) {
    this.list = list 
    var addPerson = function(person){
        

    }
}

Object.assign(ListPerson.prototype, Person)
Object.assign(AdressBook.prototype, ListPerson);


