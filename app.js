let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

getComputerChoice = () => {
    const choices = ['r', 'p', 's'];
    randomNumber = (Math.round(Math.random()*2));       //or use math.floor and have math.round multiplied bt 3 ==> math.floor(math.random()*3)
    return choices[randomNumber];
}

convertToWord = (letter) => {
    if(letter === 'r') return 'Rock';
    if(letter === 'p') return 'Paper';
    if(letter === 's') return 'Scissors';
}
 
win = (userChoice, computerChoice) => {
    const userSmallSub = "user".fontsize(5).sub();
    const compSmallSub = "comp".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    console.log(`${userChoice} ${computerChoice} --> WON! (${userScore})`)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallSub} beats ${convertToWord(computerChoice)}${compSmallSub}. User WINS!🌟`;
    userChoice_div.classList.add('green-glow');
    setTimeout(()=>{userChoice_div.classList.remove(green-glow)}, 500);
}
lose = (userChoice, computerChoice) => {
    const userSmallSub = "user".fontsize(5).sub();
    const compSmallSub = "comp".fontsize(5).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    console.log(`${userChoice} ${computerChoice} --> LOST!`)
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallSub} loses to ${convertToWord(computerChoice)}${compSmallSub}. User LOST!😕`;
    userChoice_div.classList.add('red-glow');
    setTimeout(()=>{userChoice_div.classList.remove(red-glow)}, 500);
}
draw = (userChoice, computerChoice) => {
    const userChoice_div = document.getElementById(userChoice);
    console.log(`${userChoice} ${computerChoice} --> DRAW!`);
    userSmallSub = "user".fontsize(5).sub();
    compSmallSub = "comp".fontsize(5).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSmallSub} is same as ${convertToWord(computerChoice)}${compSmallSub}. It's a DRAW!🤝`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(()=>{userChoice_div.classList.remove(gray-glow)}, 500);
}

game = (userChoice) => {
    const computerChoice = getComputerChoice();
    console.log(`user choice ==> ${userChoice}`);
    console.log(`computer choice ==> ${computerChoice}`);
    switch (userChoice + computerChoice) {
        case "rp":
        case "ps":
        case "sr":
            win(userChoice, computerChoice);
            break;
        case "pr":
        case "sp":
        case "rs":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break; 
    }
}

main = () => {
    rock_div.addEventListener('click', ()=>{
        //console.log('you clicked on rock');
        game('r');
    })
    paper_div.addEventListener('click', ()=>{
        //console.log('you clicked on paper')
        game('p');
    })
    scissors_div.addEventListener('click', ()=>{
        //console.log('you clicked on scissors')
        game('s');
    })    
}

main();
