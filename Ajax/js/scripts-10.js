//fonction immédiate, tout ce qui est crée dedans est delete après
(function () {
    const source = $('#source');
    for (let i = 1; i < 11; i++) {
        $('<img>').appendTo('#source').attr({
            'src': "img/portrait (" + i + ").png",
            'title': "Protrait(" + i + ")"
        }).click(function () {

            //if (this.parentNode.id === "source")
            if ($(this).parent().attr('id') === "source") { // Ecriture Jquerry
                $("#target").append(this);

            } else {
                $("#source").append(this);
            }

        })


    }



})();