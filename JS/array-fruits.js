const fruits = ["Pommes", "Poires", "Oranges", "Bananes"];
const fruits2 = ["Pommes", "Poires", "Oranges", "Bananes"];
const fruits3 = ["Pommes", "Poires", "Oranges", "Bananes"];
/**
    fruits.splice(1,1,"Kiwis");
*/

/**
    const mergeArray = [...fruits, ...fruits2, ...fruits3]
    console.table(mergeArray);
*/

/**
    let phrase = "Azertyuldqsdsqdq dsqdsq dqsd qsd qs";
    const split = phrase.split(" ");
    console.log(split);
    
    split.sort ( (item) => Math.random()-0.5);
    console.log(split);
    
    const joinArray = split.join(" ");
    console.log(joinArray);
    
    let search = fruits3.find (function(i){
        console.log(i);
    return i == "Poires";
    
    })
    console.log(search);
*/

/**
    var persons = [
        { nom: 'toto', age: 50 },
        { nom: 'titi', age: 12 },
        { nom: 'tata', age: 28 },
        { nom: 'tutu', age: 17 }
    ];
    
    
    let minor = persons.some(function (person) {
        return person.age < 18;
    })
    
    let major = persons.every(function (person) {
        return person.age > 18;
    })
    
    
    let teenager = persons.filter(person => {
        return person.age < 20 && person.age > 12;
    });
    
    
    console.log(persons);
    console.log(teenager);
    
    console.log(minor);
    console.log(major);
*/

const list = [
    { title: "AA", author: "Paul", rating: 3 },
    { title: "AD", author: "QSQDS", rating: 4 },
    { title: "AB", author: "Paul", rating: 7 },
    { title: "AR", author: "TRTD", rating: 5 },
    { title: "AT", author: "Paul", rating: 9 },
];

/**
    let newList = list.filter((item) => {   //Equivalent a  list.filter(item => item.author === 'Paul')
        return item.author == "Paul";
    
    })
    
    let averagePaul = newList.map(function(item){       // const averagePaul=newList.reduce((sum,value)=>sum+value)map(item=>item.ratiog)
        return item.rating;
    })
    .reduce(function(sum,value){
        return sum + value;
    })/ newList.length;
    
    let check =  (3+7+9)/3;
    
    console.log(averagePaul);
*/
/**
    let newList = [];
    list.forEach(function (item) { 
        if (item.author == "Paul"){
        newList.push(item.rating);
        }
    })
    let ratingPaul = newList.reduce(function (sum, value) {
            return sum + value;
        }) / newList.length;
    
    let check = (3 + 7 + 9) / 3;
    
    console.log(ratingPaul);
*/

const ratingPaul = list.filter(item => item.author === 'Paul');
const averagePaul = ratingPaul
    .map(item => item.rating)                                   // Chaining
    .reduce((sum, value) => sum + value) / ratingPaul.length;
console.log(averagePaul)

