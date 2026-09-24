const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreElement();
document.body.addEventListener('keydown',(event)=>{
    if(event.key==='r'){
        playGame('rock')
    }
    else if(event.key==='p'){
        playGame('paper')
    }
    else if(event.key==='s'){
        playGame('scissor')
    }
})
function playGame( playerMove){
    //playerMove = playerMove.toLowerCase();
    const computerMove= pickComputerMove();
     let result = '';
    
    if(playerMove=== 'Rock'){
        if(computerMove === 'rock'){
            result='Tie'
        }
        else if( computerMove === 'paper'){
            result='You Lose'
        }
        else if( computerMove === 'scissor'){
            result='You Win'
        }
    }
    else if(playerMove === 'Paper'){
        if(computerMove === 'rock'){
            result='You Win'
        }
        else if( computerMove === 'paper'){
            result='Tie'
        }
        else if( computerMove === 'scissor'){
        result='You Lose'
        }
    }
    else if(playerMove === 'Scissor'){
        if(computerMove === 'rock'){
            result='You Lose'
        }
        else if( computerMove === 'paper'){
            result='You Win'
        }
        else if( computerMove === 'scissor'){
        result='Tie'
    }
    }
     
    if (result ==="You Win"){
        score.wins++;
    }
    else if(result ==="You Lose"){
        score.losses++;
    }
    else if(result ==="Tie"){
        score.ties++;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You picked ${playerMove}, computer chose ${computerMove}`;
    //  document.querySelector('.js-move').innerHTML = `You picked <img src="${playerMove.toLowerCase()}-png.png" alt="${playerMove}" class="move-icon">, computer chose <img src="${computerMove}-png.png" alt="${computerMove}" class="move-icon">`;
     
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove(){
     const randomNum = Math.random();
        let computerMove = '';
        if( randomNum >=0 && randomNum < 1/3){
        computerMove = 'rock';
        }
        else if ( randomNum >=1/3 && randomNum<2/3){
        computerMove = 'paper';
        }
        else if( randomNum >=2/3 && randomNum<1){
        computerMove = 'scissor';
        }
        return computerMove;
}
