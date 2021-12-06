/**Créez une fonction qui ajoute une colonne à chaque ligne d'un tableau. Dans cette colonne, 
 * vous ajouterez un lien HyperText qui aura une image de fond de 16px (CSS et non un élément img). 
 * Lors du clic sur ce lien vous supprimerez la ligne courante.
   **/
//**  Ajouter une colonne =>  & td   //
(function () {

    let tr = document.querySelector('thead tr'); //**  Ajouter une colonne =>  au premier tr de thead  //
    let th = document.createElement('th');   // Crée un th 
    tr.appendChild(th) // ajouter a tr, l'enfant th

    document.querySelectorAll('tbody tr').forEach(function (tr) { // Renvoi une nodeList
        let td = document.createElement('td');   // Crée un table header
        tr.appendChild(td);
        let a = document.createElement('a')
        a.href = '#'
        let id = tr.querySelector('td').textContent;  // Select premier cell du table row
        a.title = "Delete contact N°" + id;
        td.appendChild(a);
        let img = document.createElement("img")
        img.src = "img/delete.png";
        a.appendChild(img)
        a.addEventListener('click', function () {
            let tr = this.closest('tr')
            tr.parentNode.removeChild(tr);

        })



    })





})();