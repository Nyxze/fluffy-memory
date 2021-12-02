class HTMLElement {

    constructor(tagName, textContent = "", autoclosed = false) {
        this.tagName = tagName;
        this.textContent = textContent;
        this.autoclosed = autoclosed;
        this.attributes = {};
        this.childrenList = [];
    }

    render() {
        let html = `<${this.tagName}${this.getAttributesAsString()}>\n`
        if (!this.autoclosed) {
            html += this.textContent+"\n";
            //Ajout des enfants
            for(let item of this.childrenList){
                html += item.render()
            }
            html += `</${this.tagName}>`//Code HTML de la balise
        }
        return html
    }

    addChild(element){

        if(this.autoclosed){
            throw "No child allowed"
        }
        this.childrenList.push(element)

        return this

    }

    setAttributes(attrList) {
        this.attributes = attrList;
        return this

    }
    setAttribute(key, val) {
        this.attributes[key] = val;// Initialiser dans le constructeur sinon undifined  #Ligne 7
        return this

    }

    getAttributesAsString() {
        let attr = [];               // Décalre tableau vide
        for (let key in this.attributes) {           //Parcourir attributes
            attr.push(` ${key}="${this.attributes[key]}"`); // Ajout dans attr 
            // ac des espaces
        }return attr.join(" "); 

    }

    toString(){
        return this.render()
    }

}





class ImageElement extends HTMLElement {
    constructor(source, altText) {
        super("img", "", true);
        this.setAttributes({
            src: source,
            alt: altText
        });

    }
}


const test = new HTMLElement("header", "yolo");
const img1 = new ImageElement("photo","Yolo");
const img2 = new ImageElement("photo","Yolo");

test.addChild(img1).addChild(img2);
console.log(test +"");



