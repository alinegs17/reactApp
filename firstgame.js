import React from 'react';
import './firstgame.css';
import NavBar from './navBar';

class FirstGame extends React.Component {
    var secret_number = -1;
    var num_guesses = -1;
    var total_score = 0;
    var num_games_played = 0;

    render () {
        return (
            <NavBar></NavBar>
            <div className="container">
                <img src="img/tropical.jpg"></img>
                <button onClick={startGame()} class="btn">{"Play 'Guess the Number' by clicking here!"}</button>
                <input type="text" name="txt" id="numberGuess" onchange="getUserGuess()" className="user-input"></input>
                <p id="output" className="game-info"></p>
            </div>
            <script>
                startGame() {
                    document.getElementById("output").innerHTML = "Guess the number between 0-99";
                    secret_number = Math.floor(Math.random() * 100);
                    /* window.alert(secret_number); for debugging */
                    num_guesses = 0;
                }

                function getUserGuess() {
                var user_guess = document.getElementById("numberGuess").value;
                if (user_guess <= 0) {
                    document.getElementById("output").innerHTML = "You entered a incorrect value. Guess again";
                }
                else { 
                    /* user guessed a number */
                    num_guesses += 1;
                    if (user_guess > secret_number) {
                        document.getElementById("output").innerHTML = "Guess lower than " + user_guess;
                    }
                    else if (user_guess < secret_number) {
                        document.getElementById("output").innerHTML = "Guess higher than " + user_guess;
                    }
                    else { /* user has guessed the secret number */
                    num_games_played += 1;
                    total_score += num_guesses;
                    var average_score = total_score/num_games_played;
                    document.getElementById("output").innerHTML = "Congrats you have guessed the number " + secret_number + " in " + num_guesses + " guesses!\n" + " Your average score in " + num_games_played + " games is " + average_score + ".";      
                    }
                document.getElementById("numberGuess").value = " ";
                } 
            }
            </script>
        );
    }
}