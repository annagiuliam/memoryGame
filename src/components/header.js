import React from 'react';

const Header = (props) => {


    return (
        <header className="App-header">
            <div>Memory Game: don't click on the same cat twice!</div>
            <div className="score-container">
                <div>Current Score: {props.score}</div>
                <div>High Score: {props.highScore}</div>
            </div>        
      </header>
    )
}

export default Header