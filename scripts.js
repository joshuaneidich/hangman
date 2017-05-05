var words=[];
var test=new Word ("Giraffes", "animal");
var test2=new Word ("refrigerator", "machine");
var test3=new Word ("Suzuki", "car brand");
var test4=new Word ("Saturn", "planet");
var guessBox=document.getElementsByClassName('guess')[0];
var guessButton=document.getElementsByClassName('submitGuess')[0];
var reset=document.getElementsByClassName('reset')[0];
var displayBox=document.getElementsByClassName('game-display')[0];
var animation=document.getElementsByClassName('animation')[0];
var displayWord=document.getElementsByClassName('display-word')[0];
var hangmanImage=document.getElementsByClassName('hangman-image')[0];
var hint=document.getElementsByClassName("hint")[0];
var lettersGuessed=document.getElementsByClassName("letters-guessed")[0];

window.addEventListener("load", resetAction);
reset.addEventListener("click", resetAction);

guessButton.addEventListener("click", function(){
  letterToPass=guessBox.value.toLowerCase();
  guessBox.value="";
  if (turns===0){alert("Please reset game!");}
  else {initiateGuess(letterToPass);}
})


function initiateGuess(letter){
  if (alphabet.indexOf(letter)!=-1) {
    console.log(letter);
    displayLettersGuessed(letter);
    removeFromArray(letter, alphabet);
    checkIfRight(letter);
  }
  else {
    alert("You already guessed that letter!");}
}

function displayLettersGuessed(letter){
  console.log(letter+" lettersGuessed");
  lettersGuessed.innerHTML+="<span>"+letter+"</span>";
}


function checkIfRight(letters){
  if (wordToGuessArray.indexOf(letters) !=-1){
    displayLetters(letters);
  }
  else {
    turns-=1;
    hangmanImage.src="stage"+turns+".png"
  }
}


function displayLetters (letter) {

  for (let i=0; i<wordToGuessArray.length; i++) {
    if (wordToGuessArray[i]===letter){
      var letterToReplace=document.getElementsByClassName('letter');
      letterToReplace[i].innerHTML=letter;
    }
  }
}





function removeFromArray(item, specificArray){
  for(var i = specificArray.length; i--;){
	   if (specificArray[i] === item) {specificArray.splice(i, 1)};
  }
}



function resetAction () {
  turns=8;
  alphabet=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  randomWordNumber=getRandomArbitrary(0, words.length-1);
  console.log(randomWordNumber);
  wordToGuess=words[randomWordNumber];
  console.log(wordToGuess);
  wordToGuessArray=wordToGuess.word.split("");
  initialDisplayWordAction(wordToGuessArray);
  hangmanImage.src="stage8.png";
}

function initialDisplayWordAction  (wordToEvaluate){
  displayWord.innerHTML="";
  hint.innerHTML=wordToGuess.hint;
  for (let i=0; i<wordToGuessArray.length; i++){
    displayWord.innerHTML+=
    // purposely put i in class for future purposes
      "<span class='letter letter"+[i]+"'>___  </span>";
  }
}



function Word (word, hintOrCategoryOrDefinition){
  this.word=word.toLowerCase();
  this.hint=hintOrCategoryOrDefinition;
  words.push(this);
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
}
