
var diceRoll = function(){
  return Math.floor(Math.random()*6+1)
}
var numberOfPlayers = 5
var player = 1
var chosenDice = false
var array = []
var diceOne = 0
var diceTwo = 0
var main = function(input){
  if (chosenDice == false){
    // if all players played restart the game from player 1
    if (numberOfPlayers == player){
      player = 1
      array = []
    }
    // return players roll
    diceOne = diceRoll()
    diceTwo = diceRoll()
    chosenDice = true
    return `Welcome Player ${player}.<br>You rolled ${diceOne} for Dice 1 and ${diceTwo} for Dice 2.<br> Choose the order of the dice "1" or "2".`
  }

  if (chosenDice == true){
    //input validation
    if (input!=1 && input!= 2){
      return `Welcome Player ${player}.<br>You rolled ${diceOne} for Dice 1 and ${diceTwo} for Dice 2.<br> Choose the order of the dice "1" or "2".`
    }

    // find dice number
    firstDiceIndex = input
    diceNumber = diceOne * 10 + diceTwo 
    if (firstDiceIndex == 2){
      diceNumber = diceTwo *10 + diceOne
    }
    // add dicenumber to the array
    array.push(diceNumber) 
    player += 1
    // return winner if all players played
    if (player == numberOfPlayers){
      var winIndex = array.indexOf(Math.max(...array));
      chosenDice = false
      return `Player ${winIndex +1} is the winner!<br><br> Press the submit button if you would like to play again!`
    }
    // next players turn
    chosenDice = false;
    return `Player ${player-1}, you chose Dice ${firstDiceIndex} first.<br>Your number is ${diceNumber}.<br>It is now Player ${player}'s turn.<br>Please hit the Submit button to begin your turn Player ${player}`


  }
}