var words=[];
var test=new Word ("alphabetical", "animal");
var guessBox=document.getElementsByClassName('guess')[0];
var guessButton=document.getElementsByClassName('submitGuess')[0];
var reset=document.getElementsByClassName('reset')[0];
var displayBox=document.getElementsByClassName('game-display')[0];
var animation=document.getElementsByClassName('animation')[0];
var displayWord=document.getElementsByClassName('display-word')[0];



window.addEventListener("load", resetAction);
guessButton.addEventListener("click", resetAction);

function initiateGuess(letter){
  if (letters.indexof(letter)!=-1) {
    letters
    checkIfRight(letter);
  }
  else {alert("You already guessed that letter!")}
}

function removeFromArray(item, specificArray){
  for(var i = specificArray.length-1; i--;){
	   if (specificArray[i] === item) {specificArray.splice(i, 1)};
  }
}

function checkIfRight(letter){

}































function resetAction () {
  console.log("hi");
  turns=6;
  letters=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  wordToGuess=test;
  initialDisplayWordAction(wordToGuess.word);
}

function initialDisplayWordAction  (wordToEvaluate){
  displayWord.innerHTML="";
  for (let i=0; i<wordToEvaluate.split("").length; i++){
    displayWord.innerHTML+=
      "<span class='letter"+[i]+"'>___  </span>";
  }
}



function Word (word, hintOrCategoryOrDefinition){
  this.word=word;
  this.hint=hintOrCategoryOrDefinition;
  words.push(this);
}
