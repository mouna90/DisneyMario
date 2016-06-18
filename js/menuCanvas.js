    
  /*Menu-toggle*/
    $("#menu-toggle").click(function(e) {
        console.log(">>>");
       // window.alert(">>>Hey>>>>")
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

    /*Scroll Spy*/
    $('body').scrollspy({ target: '#spy', offset:80});

    /*Smooth link animation*/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


//mon ptit super mario



$(document).keydown(function(key) {
    var pos = $("#perso").position().left; /*Cette variable récupère la position du personnage*/

        switch(parseInt(key.which,10)) {
        case 39: //81 correspond au touche clavier q our aller à gauche

        if ((pos > -10) && (pos < 750)) { /*Pour que le personnage ne sorte pas du champ*/
            $("#perso") /*Si le personnage était dans l'autre direction*/
            .css({
                transform: "scaleX(1)", 
                backgroundPosition: '0px 0px'});
            $('#map').animate({ /*On le déplace vers la gauche*/
                left: '-=5' 
                 }, 20, "linear");
                }
        break;

        case 37: //83 correspond au touche clavier s pour aller en bas
        if ((pos > 0) && (pos < 740)) {
            $("#perso")
            .css({
                transform: "scaleX(-1)",
                backgroundPosition: '0px -44px'
            });
            $('#map').animate({ /*On le déplace vers la gauche*/
                left: '+=5' 
                 }, 20, "linear");
        }

        break;

        case 90: //90 correspond au touche clavier z pour aller en haut
         if ((pos > -10) && (pos < 750)) {
        $("#perso").animate({top: '-=300px'}, 500,function(){
                    $("#perso").animate({top: '+=300px'}, 500);
            if ((pos > -10) && (pos > 0)) { 
            $(".s1").delay(160).animate({
                        'top': '210px'
                    }, 200).fadeOut(200, function(){
                        alert("vous avez gagnez");
                    });}
                });

                }
        break;
        /*case 68: //68 correspond au touche clavier d pour aller  droite
        $('#perso').animate({left: "+=10px"}, 'fast');
        break;*/
        default:
        break;
        }
});