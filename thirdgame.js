import React from 'react';
import "./thirdgame.css";
import NavBar from './navBar';
import Game from './App.';

class ThirdGame extends React.Component {
    startGame() {
        return <Game></Game>;
    }
    render () {
        return (
            <>
            <NavBar></NavBar>
            <div className="container">
                <img src="img/tropical.jpg"></img>
                <button onClick={startGame()} class="btn">{"Play 'Guess the Number' by clicking here!"}</button>
            </div>
            </>
        );

    }
}