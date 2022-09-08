var block = document.getElementById('block') 
var scoreBoard = 0;

block.addEventListener('animationiteration', () =>{
    /*Laver udprint af scorer.*/
    document.getElementById('scoreboard').innerHTML = 'Din highscore er: ' + ++scoreBoard;
});
