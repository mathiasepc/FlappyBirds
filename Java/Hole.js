var hole = document.getElementById('hole');

/*Animationiteration lytter til når en animation slutter og en anden begynder*/
hole.addEventListener('animationiteration', () => {
    /*math.randon returner som standard et tal mellem 0-1. derfor ganger jeg med 600 sådan så det mellem
    0-700. jeg tilføjer så 50, sådan så det imellem 50-700.*/
    var random = -((Math.random()*440)+100);
    
    /*Det er top indstillingen fra css coin der gør dte muligt
    at rykke på placeringen.*/
    hole.style.top = random + 'px';
});