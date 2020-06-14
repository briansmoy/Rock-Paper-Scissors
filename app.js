//ROCK PAPER SCISSOR



//User can select a rock, paper or scissors
    // function for call variable rock, paper, scissors
window.onload = function() {
    rockPaperScissorOnClick();
};

function rockPaperScissorOnClick() {
    let rock = document.getElementsByClassName("rock_image");
    rock.addEventListener('click', function(rockHit) {
        console.log("rock hit")
    });
    let paper = document.getElementsByClassName("paper_image");
    paper.addEventListener('click', function(paperHit) {
        console.log("paper hit")
    });
    let scissor = document.getElementsByClassName("scissors_image");
}
//When selecting an item, the user is updated to:
    //what the computer player has chosen
    //function for comparing user to computers choice math.random()

//whether they have won or lost
    //if statements to compare user/computer and if won

//The user can play as many times as they want
    //possible reset of the game?
