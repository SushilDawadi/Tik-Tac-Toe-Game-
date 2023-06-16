let gameOverMusic = new Audio("/Sounds/gameOverMusic.wav");
let gamePlay = new Audio("/Sounds/playTingMusic.wav")
let playTurn = new Audio("/Sounds/nextTurn.mp3")

let  turn = "X";
let isGameOver = false;


//function to change the turn

const changeTurn = ()=>{
    return turn==="X"?"0":"X"
}

const checkWin =()=>{
    let boxText = document.getElementsByClassName('boxText')
    let wins =[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[2]].innerText===boxText[e[1]].innerText) &&(boxText[e[0]].innerText!=='')){
            document.querySelector('.info').innerText = boxText[e[0]].innerText+" Won"
            isGameOver =true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = " 100px"
            gameOverMusic.play();
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = '20vw';
            
        }
    })
}

//Game Logic 

let boxes = document.querySelectorAll('.box')
boxes.forEach(element=>{
    let boxText = element.querySelector('.boxText')
    element.addEventListener('click',()=>{
        if(boxText.innerText ===''){
            boxText.innerText = turn;
            turn = changeTurn();
            gamePlay.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
            
           
        }
    })
})

//add on click to reset button 
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxText')
    boxtexts.forEach(element=>{
        element.innerText =""
    })
    turn = "X";
    isGameOver=false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = " 0px"
    document.querySelector('.line').style.width = " 0px"
   
   
})