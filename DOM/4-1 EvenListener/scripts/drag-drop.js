//fonction immédiate, tout ce qui est crée dedans est delete après
(function () {
    [
        document.querySelector('#source'),  // Tableau avec deux élément HTML Document
        document.querySelector('#target')
    ].forEach(function (source) {

        source.addEventListener('drop', function (e) {
            e.preventDefault();
            let id = e.dataTransfer.getData('Text')
            let parent = e.target;
            if (parent.nodeName !== "DIV") {
                parent = parent.parentNode;
            }


            parent.appendChild(document.querySelector("#" + id));


        })

        source.addEventListener('dragover', function (e) {
            e.preventDefault();

        })
    })





    for (let i = 1; i < 9; i++) {
        let src = `img/portrait (${i}).png`;
        let img = document.createElement("img");
        img.src = src;
        img.title = `portrait${i}`;
        img.id = `portrait${i}`;
        img.draggable = true;
        source.appendChild(img);
        img.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('Text', e.target.id);
        }


        )
    }



})();