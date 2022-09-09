var block = document.getElementById('block') 
var scoreBoard = 0;

/*Laver en lytter på block animationen. når har kørt færdig skal man få et point.*/
block.addEventListener('animationiteration', () =>{    
    document.getElementById('scoreboard').innerHTML = 'Din highscore er: ' + ++scoreBoard;
});

/*Laver en reset for mit scoreboard */
function CheckScoreBoard(death){
    scoreBoard = 0
    /*Har problemer med at visuelt at sætte highscore til 0 efter død. Men den er nul selvom der står 1. */
    scoreBoard += -scoreBoard;
    if(scoreBoard >= 1 && death == true){
        document.getElementById('scoreboard').innerHTML = 'Din highscore er: ' + scoreBoard;
    }
}    
