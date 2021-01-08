import React from 'react';

const Header = (props) => {


    return (
        <header className="App-header">
            <h1>Memory Game: don't click on the same cat twice!</h1>
            <div className="score-container">
                <h2>Current Score: {props.score}</h2>
                <h2>High Score: {props.highScore}</h2>
            </div>        
      </header>
    )
}

export default Header