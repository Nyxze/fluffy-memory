class LinkedList {
    constructor() {

        this.size = 0,
        this.head = null
        this.tail = null;
    }

    deleteHead() {
        if(this.size>0){
            if(this.size == 1){
                this.head = null;
                this.tail = null;
            }else{
                let nextToLast = this.getNode(this.size -2)
                this.head = nextToLast;
                this.head.next = null;
            }
            this.size--
        }

    }

    deleteTail() {
        if(this.size>0) {
            if (this.tail.next) {
                this.tail = this.tail.next;
                
            }else{
                this.tail = null;
                this.head = null;
            }
            this.size--;
        }


    }
    getNode(n) {
        if(n > this.size -1 ||n<0){
            throw "Indice en dehors des bornes "   
        }
        let currentNode = this.tail;
        while(n>0){
            currentNode = currentNode.next;
            n--
        }
        return currentNode;
    }

    add(node) {
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.next = node;
            this.head = node;
        }
        this.size++;
        return this
    }
}

class Node {
    constructor(value) {
        this.next = null;             // next = adress mémoire de la prochaine value
        this.value = value;             // value = valeur 
    }
}
const list = new LinkedList();
list.add(new Node(8)).add(new Node(3)).add(new Node(7));

let current = list.tail;
while (current) {
    console.log(current.value);
    current = current.next;

}
list.deleteTail();

current = list.tail;
while (current) {
    console.log(current.value);
    current = current.next;

}

console.log(list.getNode(1));
list.deleteHead();

current = list.tail;
while (current) {
    console.log(current.value);
    current = current.next;

}