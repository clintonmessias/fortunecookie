const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const tryButton = document.querySelector('#tryButton');
const resetGame = document.querySelector('.screen2 button');

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
let mensagem = xAttempts == 1 ? 'tentativa' : 'tentativas'
let inputNumber = document.querySelector("#inputNumber");
inputNumber.focus();

console.log(randomNumber);

//Eventos + funções de callback
tryButton.addEventListener('click', handleClick);
resetGame.addEventListener('click', restartGame);
document.addEventListener('keypress', pressEnter);


//Funções
function handleClick(event){
  event.preventDefault(); //Previne o comportamento padrão do form (Não envia/recarrega a página/form)


  if (Number(inputNumber.value) == randomNumber){
    toggleScreen()

    document.querySelector('.screen2 h2').innerText = `Acerou em ${xAttempts} ${mensagem}`;

    return;
  }

  verifyNumber();
  inputNumber.value = ''

}
function restartGame(){
  toggleScreen();

  randomNumber = Math.round(Math.random() * 10);
  console.log(randomNumber)
  console.log('restart: ' + randomNumber)

  inputNumber.value = ''

  xAttempts = 1;
  inputNumber.focus();
}

function toggleScreen() {
  screen2.classList.toggle('hide');
  screen1.classList.toggle('hide');
}

function pressEnter(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    restartGame();
  }
}

function verifyNumber(){
    if(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10 && inputNumber.value != ''){
      xAttempts++
    } else {
      alert('Número inválido');
    }

}