// This Creates a function Named "fight"

var playerName= window.prompt("What is your Robot's Name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'Fight' or 'Skip' to Choose.");

    if (promptFight === "fight" || promptFight === "Fight") {
        enemyHealth = enemyHealth - playerAttack;
        
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    

        // Check enemy's health

        if (enemyHealth <= 0) {
        window.alert(enemyName + " has Died!");
        } else {
        window.alert(enemyName + " Still has " + enemyHealth + " health left.");
        }

        //Remove player's health by subtracting the amount set in the enemyAttack Var

        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //Check Player's Health

        if (playerHealth <= 0) {
        window.alert(playerName + " Has Died.");
        } else {
        window.alert (playerName + " still has " + playerHealth + " health left.");
        }

        //if player chooses skip
    } else if (promptFight === "Skip" || promptFight === "SKIP") {
        //confrim player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye!");

            //Subtract money from playermoney
            playerMoney = playerMoney - 2;
        }

        //if no, ask question again by running fight

        else {
            fight();
        }
    }

   
        window.alert(playerName + " has chosen to skip the fight!");
    } else {
        window.alert(" You need to choose a valid option. Try again!");
    }

    
    
    // Round is beginning
    window.alert("Welcome to Robot WARS!!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // Check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " Has Died!");
        }

     else {
         window.alert (enemyName + " still has " + enemyHealth + " health left.");
         }

    //Subtract the value of enemy attack from the value of player healther and use that result to update the value in the player health
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting message to console so we know that it worked 
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (playerHealth <= 0) {
        window.alert(playerName + " Has Died!");
    }

    else {
        window.alert(playerName + " Still has " + playerHealth + " health left");
    }


};

fight();

window.alert(playerName);

function fight () {
    window.alert("The Fight Has Begun");
}

//fight();

