    
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
var $playground = $('#mon_canvas'), // on entre l'objet jQuery dans une variable pour éviter de l'appeler plusieurs fois

    h = 525,
    w = 850; // on définit les dimensions du playground

$playground.playground({

    height : h,
    width : w // puis on passe ces variables en paramètre
});


// Exemple d'ajout de plusieurs groupes à la suite

$.playground()
  .addGroup('background', { height : h, width : w }) // ajout du groupe "background"
    .end() // on revient à l'objet playground
    .addGroup('player', { height : h, width : w }); // ajout du groupe "player"


// première instance
var image1 = new $.gameQuery.Animation({
    imageURL : "background1.gif"
});

// seconde instance
var image2 = new $.gameQuery.Animation({
    imageURL : "background2.gif"
});

// troisième instance
var image3 = new $.gameQuery.Animation({
    imageURL : "background3.gif"
});

$('#background') // on accède à notre groupe
    .addSprite('image1', { // on ajoute un sprite
        animation : image1, // premier objet instancié
        height : h,
        width : w,
        // nous créons ici un arrière-plan, les dimensions sont donc égales à celles du playground
});


//Et pour accéder au groupe précédemment créé, il suffit de passer par son identifiant, qui est le même que son nom
$('#background') // on accède à notre groupe
    .addSprite('image1', { // on ajoute un sprite
        animation : image1, // premier objet instancié
        height : h,
        width : w,
        // nous créons ici un arrière-plan, les dimensions sont donc égales à celles du playground
    })
    .addSprite('image2', { // on répète l'opération
        animation : image2,
        height : h,
        width : w
    })
    .addSprite('image3', { // on répète l'opération
        animation : image3,
        height : h,
        width : w
    });

//réinitialiser la position horizontale si l'image se trouve entièrement hors du game screen 
$.playground()
    .registerCallback(function(){
    var left = parseInt( $("#image1").css("left") ) - 1; // l'image de fond se déplace lentement, on la déplace donc de 1 pixel à chaque intervalle
        if(left < 0 - w) left = w;
        $("#image1").css("left", left);


    left = parseInt( $("#image2").css("left") ) - 3; // l'image du milieu se déplace plus rapidement, on la déplace de 3 pixels à chaque intervalle
        if(left < 0 - w) left = w;
        $("#image2").css("left", left);


    left = parseInt( $("#image3").css("left") ) - 5; // l'image de devant se déplace rapidement, on la déplace de 5 pixels à chaque intervalle
        if(left < 0 - w) left = w;
        $("#image3").css("left", left);

    }, 30); // enfin, on définit l'intervalle de temps à 30ms


//creation et animation du personnage
// nouvelle instance
var repos = new $.gameQuery.Animation({
    imageURL : 'mario.gif',
    numberOfFrame : 4,
    delta : 40,
    rate : 100,

    type : $.gameQuery.ANIMATION_HORIZONTAL
});


// on ajoute un sprite au playground, sans lancer d'animation
$.playground()
    .addSprite('repos', {
        width : 40,
        height : 50
    });

// puis on lance l'animation correspondante au moyen de la méthode adéquate
$('#repos').setAnimation(repos);

// enfin, on oublie pas de lancer le jeu
$.playground().startGame();

//creer une coalition
var liste = $('#personnage').collision('#ennemi'); // on cherche le nombre de collision qu'il y a eu entre personnage et ennemi

if(liste.length > 0){ // si la liste est supérieure à 0
    alert('Il y a eu collision !'); // alors il y a eu collision
}

//utilisation du clavier
$(document).keydown(function(e){ // on écoute le clavier de l'utilisateur

    switch(e.keyCode){
        case 68: // touche D

            // on se déplace à droite

        break;


        case 81: // touche Q

            // on se déplace à gauche

        break;


        case 32: // touche ESPACE

            // on saute

        break;
    }

});

/*$(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
        case 81: //81 correspond au touche clavier q our aller à gauche
        $('img').animate({left: "-=10px"},'fast');
        break;
        case 83: //83 correspond au touche clavier s pour aller en bas
        $('img').animate({top: "+=10px"}, 'fast');
        break;
        case 90: //90 correspond au touche clavier z pour aller en haut
        $('img').animate({top: "-=10px"}, 'fast');
        break;
        case 68: //68 correspond au touche clavier d pour aller  droite
        $('img').animate({left: "+=10px"}, 'fast');
        break;
        default:
        break;
        }
});/