var b1 = "", b2 = "", b3 = "", b4 = "", b5 = "", b6 = "", b7 = "", b8 = "", b9 = "";
var player = "X";

function tapped(buttonId) {
    let button = document.getElementById(buttonId)
    button.innerHTML = player;
    button.disabled = true; 

    hasAWinner()
    switchPlayer()
}

function tappedB1() { b1 = player }

function tappedB2() { b2 = player }

function tappedB3() { b3 = player }

function tappedB4() { b4 = player }

function tappedB5() { b5 = player }

function tappedB6() { b6 = player }

function tappedB7() { b7 = player }

function tappedB8() { b8 = player }

function tappedB9() { b9 = player }

function switchPlayer() {
    player = player == "X" ? "O" : "X"
}

function hasAWinner() {
    if (((b1 == b2) && (b2 == b3) &&  (b1 != "")) ||
    ((b4 == b5) && (b5 == b6) &&  (b4 != "")) ||
    ((b7 == b8) && (b8 == b9) &&  (b7 != "")) || //horizontal
    ((b1 == b4) && (b4 == b7) &&  (b1 != "")) ||
    ((b2 == b5) && (b5 == b8) &&  (b2 != "")) ||
    ((b3 == b6) && (b6 == b9) &&  (b3 != "")) || //vertical
    ((b1 == b5) && (b5 == b9) &&  (b1 != "")) ||
    ((b3 == b5) && (b5 == b7) &&  (b3 != ""))) { //diagonal   
             
        let label = document.getElementById("labelWinner")
        label.innerHTML = "Player " + player +  " is the winner! 🎉";

        let canvas = document.createElement("canvas");
        canvas.width = 400;
        canvas.height = 400;
        let container = document.getElementsByClassName("row")[0];
        container.appendChild(canvas)
        let confetti_button = confetti.create(canvas)
        confetti_button().then(() => container.removeChild(canvas));
    } 
}

function reset() {
    b1 = "", b2 = "", b3 = "", b4 = "", b5 = "", b6 = "", b7 = "", b8 = "", b9 = "";

    let button1 = document.getElementById("b1")
    button1.innerHTML = "";
    button1.disabled = false; 

    let button2 = document.getElementById("b2")
    button2.innerHTML = "";
    button2.disabled = false; 

    let button3 = document.getElementById("b3")
    button3.innerHTML = "";
    button3.disabled = false; 

    let button4 = document.getElementById("b4")
    button4.innerHTML = "";
    button4.disabled = false; 

    let button5 = document.getElementById("b5")
    button5.innerHTML = "";
    button5.disabled = false; 

    let button6 = document.getElementById("b6")
    button6.innerHTML = "";
    button6.disabled = false; 

    let button7 = document.getElementById("b7")
    button7.innerHTML = "";
    button7.disabled = false; 

    let button8 = document.getElementById("b8")
    button8.innerHTML = "";
    button8.disabled = false; 

    let button9 = document.getElementById("b9")
    button9.innerHTML = "";
    button9.disabled = false; 

    let label = document.getElementById("labelWinner")
    label.innerHTML = "";

    player = "X"
}
