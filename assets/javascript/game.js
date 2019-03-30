$(document).ready(function() { 
    console.log("Ready");
    let yourWins = 0;
    let yourLosses = 0;
    let yourTotalScore = 0;
    let blue = 0;
    let yellow = 0;
    let green = 0;
    let red = 0;
    let computerNum = 0;
    // displaying initial score of 0
    $("#score").html(yourTotalScore);
 
    const generateRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    // Generating random number to match
    $("#randomNum").html(generateRandomNum());

    const generateCrystalNum = function() {
        let random = Math.floor(Math.random() * 12 + 1);
        return random;
    }

    // generating random numbers for each crystal and assigning their values to declared variables above
    const initialCrystalNum = function() {
        blue += generateCrystalNum();
        red += generateCrystalNum();
        green += generateCrystalNum();
        yellow += generateCrystalNum();
    }

    initialCrystalNum();

    // assigning value of button clicked to correct crystal. 
    $("button").on("click", function() {
        if(this.id === "blue") {
            yourTotalScore += blue;
        } else if(this.id === "yellow") {
            yourTotalScore += yellow;
        } else if(this.id === "red") {
            yourTotalScore += red;
        } else if(this.id === "green") {
            yourTotalScore += green;
        }
        // setting yourTotalScore equal to the value of any button pressed.
        $("#score").html(yourTotalScore);
        winOrLose();
    });

    const winOrLose = function() {
        if(yourTotalScore === computerNum) {
            yourWins += 1;
            $("#win").html(yourWins);
            alert("You win!");
            reset();   
        } else if(yourTotalScore > computerNum) {
            yourLosses += 1;
            $("#loss").html(yourLosses);
            alert("You lose.");
            reset();
        }
    }
    
    // resets all values back to 0 for user to play again.
    const reset = function() {  
        yourTotalScore = 0;
        $("#score").html(yourTotalScore);
        blue = 0;
        green = 0;
        yellow = 0;
        red = 0;
        computerNum = 0;
        initialCrystalNum();
        $("#randomNum").html(computerNum += generateRandomNum());
    }
});