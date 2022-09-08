/*Animationiteration lytter til når en animation slutter og en anden begynder*/
block.addEventListener('animationiteration', () => {
    var coin = document.getElementById('coin');
    
    /*math.randon returner som standard et tal mellem 0-1. derfor ganger jeg sådan så det mellem
    0-x x er større end 1. jeg tilføjer så x, sådan så det imellem f.eks. 50-700.*/
    var randomTop = -((Math.random()*640)+120);

    /*Det er top indstillingen fra css coin der gør dte muligt
    at rykke på placeringen.*/
    coin.style.top = randomTop + 'px';
});

 /*Laver en timerout sådan så den først blive synlig når den spawner igen.*/
 if(coin.style.display == 'none'){
    setTimeout(() =>{
    coin.style.display = 'block';
    }, 2000);
}