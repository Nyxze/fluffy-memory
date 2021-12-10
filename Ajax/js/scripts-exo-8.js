/**
    $('#show').bind('click', function () {
        //$('#calque').css('display','block');
        //$('#calque').fadeIn('slow');
        $('#calque').show('slow');
    
    })
    $('#hide').bind('click', function () {
        //$('#calque').css('display','none');
        //$('#calque').fadeOut('slow');
        $('#calque').hide('slow');
    
    })
    
    //this représente l'objet qui trigger l'event 
    $('#calque').hover(function () {
        $(this).css({
            width: '400px',
            height: '400px'
        })
    
    }, function () {
        $(this).css({
            width: '200px',
            height: '200px'
    
        })
    
    })
    
    $('#calque').mouseenter(function () {
    
    
    })
    $('#calque').mouseleave(function () {
    
    
    })
    
    $('#number').keypress(function (e) {
        let utf = e.keyCode;
        console.log(utf);
        if (utf< 48 || utf> 57) e.preventDefault(); //Empèche le déclanchement de l'event
    })
*/




/**
    $('#animate').click(function () {
        $('#calque').animate({
            width: "90%",
            fontSize: "36px"
    
        }, {
            duration: 5000
    
    
        }).animate({
            height: '600px'
    
        }, {
            duration: 5000,
            queue: false
        })
    
    
    })
*/


$('#animate').click(function () {
    $('#calque').addClass('animate');
})
    

$('#reset').click(function () {
    $('#calque').removeClass('animate')
})

