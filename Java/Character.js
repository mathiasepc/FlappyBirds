var character = document.getElementById('character');
var jump = 0;

/*Laver en checker for om man hopper for at gøre hoppet i spillet mere smooth.*/
var checkJump = false;

window.onload = function(){
    /*placering på mappet*/
    character.style.left = 540 + 'px';
    character.style.top = 100 + 'px';

    /*Når spil stopper, sæt scorer på load.*/
    document.getElementById('scoreboard').innerHTML = scoreBoard = 'Din highscore er: ' + 0;
}

/*Jeg laver tyngdekræften */
setInterval(function() {      
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    /*Den skal rykke ned med 1 når der ikke hoppes.*/
    if(checkJump == false){
        character.style.top = (characterTop+1)+'px';  
    }
},10);

function Jump(){
    /*Stopper tyngdekræft*/
    checkJump = true;

    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));

    /*Den skal hoppe med 40 */
    character.style.top = (characterTop-40)+'px';  

    /*Tyngdekræften begynder igen */
    checkJump = false;
}



