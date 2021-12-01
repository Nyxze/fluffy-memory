const list = [25, 25, 12, 13, 30]
const list2 = [25, 25, 14, 15, 30]

// Convert array to set 
const listSet = new Set(list);

//delete double
const deleteDouble = function (table1, table2) {
    let sum = new Set(table1.concat(table2));

    return console.table(sum);
}

const numberUniqueElement = function(array1, array2){
    let sum = [...array1,...array2];                // Fast way

    //Convert to set

    const sumSet = new Set(sum);
    console.log([...sumSet].length);
}

const intersect = function(array1,array2){
    let intersect = array1.filter( (item => array2.includes(item)));
    return console.log(intersect)
}
deleteDouble(list, list2);
numberUniqueElement(list,list2);
intersect(list,list2);