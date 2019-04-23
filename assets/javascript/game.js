window.addEventListener('DOMContentLoaded', () => {


  var randomResult = document.getElementById("random-result").value;

  var lost;

  var win;

  var prevNum = 0;

  var userScore = 0;


  //DOM Manipulation
  var newUserScore = document.getElementById('user-score');

  console.log(newUserScore);



  // A game with 4 crystals and Random Result

  // Every crystal needs to have a random number between 1 - 50 
  // A new random random number should generate every single time we win or lose 
  // to those 4 crystals


  var crystals = document.getElementsByClassName("click-buttons");

  for (var i = 0; i < 4; i++) {

    var randomCrystals = Math.floor(Math.random() * 50) + 1;
    console.log(randomCrystals);

    var crystal = crystals[i]

    $(crystal).attr({
      "data-random": randomCrystals
    });

  }

  // When clicking any CRYSTAL, it should be added to previous result 

  $(".click-buttons").on('click', function () {
    var crystalNum = parseInt($(this).attr('data-random'));

    // $(".user-score").on('click', function() {
    //   var userScore = parseInt ($(this).attr('data-random'));

    // prevNum += crystalNum;

    userScore += crystalNum;

    //If added crystals are greater than random result, you lose, reset game
    console.log(userScore, Number(document.getElementById("random-result").value) );



    if (userScore > Number(document.getElementById("random-result").value) ) {
      console.log("You lose!");
      alert("You Lose!");
    };

    else (userScore === Number(document.getElementById("random-result").value) ) {
      console.log("You win!");
      alert("You Win!");
    };



    newUserScore.innerHTML = userScore;

  });


  var $randomButton = $('#random-button');
  var $randomInput = $('#random-result');
  $randomButton.on('click', () => {
    var result = Math.floor(Math.random()*470) + 30;
    $randomInput.val(result)
  })



  //until it hits total score 

  //If it's not equal we start over//
})