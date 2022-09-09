var block = document.getElementById('block') 
var scoreBoard = 0;

/*Laver en lytter på block animationen. når har kørt færdig skal man få et point.*/
block.addEventListener('animationiteration', () =>{    
    document.getElementById('scoreboard').innerHTML = 'Din highscore er: ' + ++scoreBoard;
});


function CheckScoreBoard(){
    scoreBoard = 0
    scoreBoard += -scoreBoard;
    if(scoreBoard >= 1 && death == true){
        document.getElementById('scoreboard').innerHTML = 'Din highscore er: ' + scoreBoard;
    }
}    
