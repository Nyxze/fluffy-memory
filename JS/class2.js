class Address {

    constructor(street, city){
        this.street = street;
        this.city = city;
    }

    getAddress(){
        return console.log(`${this.street} ${this.city}`);
    }
}

class Person {

    constructor(name = "", firtsName = ""){
        this.name = name;
        this.firtsName = firtsName;
    }

    setName(value){
        this.name = value;
        return this;
    }

    setFirstName(value){
        this.firtsName = value;
        return this;
    }

    setAddress(address){
        this.address = address;
        return this;
    }

}

const jane = new Person();
jane.setFirstName("Jane").setName("Austen")
.setAddress(new Address("8 rue du Bac", "Paris").getAddress());
// jane.getAddress(); // Error 