var character = document.getElementById('character');
var jump = 0;

/*Laver en checker for om man hopper for at gøre hoppet i spillet mere smooth.*/
var checkJump = false;

/*Tilføjer en død function sådan så jeg kan få reset min highscore */
var death = false;

/*fungere lidt som en constructor for hele mit spil. */
window.onload = function(){
    /*placering på mappet*/
    character.style.left = 540 + 'px';
    character.style.top = 100 + 'px';

    /*Laver udprint af scorer.*/
    document.getElementById('scoreboard').innerHTML = 'Din highscore er: ' + scoreBoard;
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



