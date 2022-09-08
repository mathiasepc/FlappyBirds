/*Laver en setInterval for at det skal tjekke hvert 10 millisekund for collision. */

/*Den tjekker for spillets border.*/
setInterval(() =>{
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    
    /*Jeg matcher op med spilletsgrænse som er sat statisk. 669=top og 14=bunden.*/
    if(characterTop>470 || characterTop<14){
        character.style.top = 100 + 'px';
        scoreBoard = 0;
        alert("Game Over.");
    }
},10);

/*Collision væg og lave hul.*/
setInterval(() =>{
    wallLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    var hole = document.getElementById('hole');
    var holeTop =
    parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    
    var characterTop = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'))

    /*Da mit hul har en negativ værdig, bliver jeg nød til at finde en negativ værdig for
    min character*/
    var cBottom = -(500-characterTop);

    /*holeTop+110 fordi jeg plusser med 110 er pga. hullet er 100px og characteren er 40px
    characteren kommer til at tage noget pixel*/
    if(((wallLeft<57) && ((cBottom<holeTop) || (cBottom>holeTop+115)))){
        character.style.top = 350 + 'px';
        scoreBoard = 0;
        alert("Game Over.");
    } 
},10);