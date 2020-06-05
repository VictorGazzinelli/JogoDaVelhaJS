let turno = 0;
let won = false;
let game = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

function fillDivOnClick (element) {
    const x = element.getAttribute("x");
    const y = element.getAttribute("y");

    if(turno % 2 == 0){
        element.style.backgroundColor = "red"
        game[x][y] = 1;
    }
    else{
        element.style.backgroundColor = "blue"
        game[x][y] = 10;
    }
    turno++;
    element.onclick = false;
}

function checkWinner(){
    const elementMsgWin1 = document.getElementById("msg-win-1") ;
    const elementMsgWin2 = document.getElementById("msg-win-2") ;
    const elementTie = document.getElementById("msg-tie") ;

    for(let i = 0; i < 3 ; i++){
        if(game[i][0] + game[i][1] + game[i][2] === 3 || game[0][i] + game[1][i] + game[2][i] === 3)
            displayMessage(elementMsgWin1)
        else if(game[i][0] + game[i][1] + game[i][2] === 30 || game[0][i] + game[1][i] + game[2][i] === 30)
            displayMessage(elementMsgWin2)
    }

    const dp = game[0][0] + game[1][1] + game[2][2];
    const ds = game[2][0] + game[1][1] + game[0][2];

    if(dp == 3 || ds == 3)
        displayMessage(elementMsgWin1)
    else if (dp == 30 || ds == 30)
        displayMessage(elementMsgWin2)

    if(turno >= 9 && !won)
        displayMessage(elementTie)
}

function displayMessage(element){
    element.hidden = false;
    won = true;
    finnishGame();
}

function finnishGame(){
    const squareList = window.document.getElementsByClassName("square");

    for (let i = 0; i < squareList.length; i++)
        squareList[i].onclick = false;
}

setInterval(checkWinner, 500);