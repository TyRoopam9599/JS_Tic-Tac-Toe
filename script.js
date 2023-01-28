let ting = new Audio("./Assets/ting.mp3")
let IsGameOver = false; 
let turn = "X";


const changeTurn = () => {
    return turn === "X" ? "0":"X"
}


const checkwinner = () => {
    let boxTexts = document.getElementsByClassName('boxText');

    let wins = [
        [0,1,2, 5, 5, 0],
        [3,4,5, 5, 15, 0],
        [6,7,8, 5, 25, 0],
        [0,3,6, -5, 15, 90],
        [1,4,7, 5, 15, 90],
        [2,5,8, 15, 15, 90],
        [0,4,8, 5, 15, 45],
        [2,4,6, 5, 15, 135]
    ]

    wins.forEach(e => {
        if((boxTexts[e[0]].innerText === boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText === boxTexts[e[2]].innerText) && boxTexts[e[0]].innerText!='' && IsGameOver===false){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won" ;
            IsGameOver = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '200px';
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            
            setTimeout(() => {
                reset.click();
            },3000);
        }
    })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText")

    element.addEventListener('click', ()=> {
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkwinner();
            if(!IsGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn ;
            }
        }
    })
})

reset.addEventListener('click', (e) => {
    let boxTexts = document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    IsGameOver = false
    document.getElementsByClassName('info')[0].innerText = "Turn for "+ turn ;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = '0px';
    document.querySelector('.line').style.width = "0vw";
})