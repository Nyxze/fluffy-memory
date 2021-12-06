//fonction immédiate, tout ce qui est crée dedans est delete après
(function() {
    const source = document.querySelector('#source');
    for(let i =1 ; i<11; i++){
        let src = `img/portrait (${i}).png`;
        let img = document.createElement("img");
        img.src = src;
        img.title = `portrait (${i})`;
        source.appendChild(img);
        img.addEventListener('click', function () {
            let parent = this.parentNode;
            if(parent.id ==="source"){
                document.querySelector("#target").appendChild(this);

            }else {
                document.querySelector("#source").appendChild(this);
            }      
            
        })

    
    }

  
    
})();