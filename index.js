const cols = document.querySelectorAll('.col');
const turn = document.querySelector('.turn');
const resetBtn = document.getElementById('resetBtn');
let gameOver = false;
let arr = Array(9).fill(null);


let currentTurn = 1;
resetBtn.disabled = true;

function changeTurn(){
    if(!gameOver){
        if(currentTurn == 1){
            turn.innerText = 'Player X';
        }else{
            turn.innerText = 'Player 0';
        }
    }
}

cols.forEach((el)=> {
    el.addEventListener('click', () => {
        resetBtn.disabled = false;
        if(el.innerHTML == '' && !gameOver){
            let c_id = Number(el.id);
            arr[c_id] = currentTurn;
            console.log(arr);
            if(currentTurn == 1){
                el.innerHTML = '<img src="./CROSS.svg" alt="cross">';
                checkWinner();
                currentTurn = 0;
                changeTurn();
            }else{
                el.innerHTML = '<img src="./CIRCLE.svg" alt="circle">';
                checkWinner();
                currentTurn = 1;
                changeTurn();
            }
        }

        if(!arr.some(e => e === null) && !gameOver){
            turn.innerText = "It's a Draw";
            resetBtn.innerText = 'New Game';
        }
        
    })
})

function checkWinner() {
    if(
        (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
        (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
        (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
        (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
        (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
        (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
        (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    ){
        gameOver = true;
        resetBtn.innerText = 'New Game';
        if(currentTurn == 1){
            turn.innerText = "Player X Won";
        }else if(currentTurn == 0){
            turn.innerText = "Player 0 Won";
        }
    }
}



function resetGame() {
    location.reload();
}