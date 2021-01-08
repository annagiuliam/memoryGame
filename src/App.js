import React, {useState, useEffect} from 'react';
import {shuffle} from 'lodash';
import catArr from './components/cats';
import './App.css';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [cats, setCats] = useState(catArr);
  const  [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [displayWin, setDisplayWin] = useState(false);
  const [displayLose, setDisplayLose] = useState(false);
  
  useEffect(() => {
    function displayWin() {
      setDisplayWin(true);
    }
    
     if (score === cats.length) {
      displayWin();
     }
  })

  function handleWin() {
    setDisplayWin(false)
    setHighScore(score)
    setScore(0)
    resetCats();
  }

  function handleClick(catId) {
    const clickedCat = cats.find((cat) => cat.id === catId);
    (! clickedCat.clicked ) ?  handleScore(clickedCat) :  setDisplayLose(true);
   
  }

  function handleScore(clickedCat) {    
    setScore(score + 1); 
    clickCat(clickedCat);
    shuffleArray(cats);    
  }  

  function handleLose() {
    setDisplayLose(false)
    if (score > highScore) {
      setHighScore(score) 
    }   
    setScore(0);
    resetCats();
    shuffleArray(cats);
  }

  function resetCats() {
    const newCats = cats.map((cat) => {
      cat.clicked = false
      return cat;
    });
    setCats(newCats)
  }

  function clickCat(clickedCat) { 
    const newCats = cats.map((cat) => {
      if (cat.id === clickedCat.id) {
        cat.clicked = true;
      }
      return cat
    })
    setCats(newCats);
  }

  function shuffleArray(array) {
    const newArr = shuffle(array)
    setCats(newArr);
  }

  return (
    <Wrapper>
      <Header 
        score={score}
        highScore={highScore} />
      <div className="cards-container">
        {cats.map((cat) => {
            return (
              <Card 
              cat={cat}
              key={cat.id}
              onClick={() => handleClick(cat.id)}></Card>
            )
          })}
      </div>
      {displayWin && <Modal 
                        show={displayWin}
                        text={"Congratulations, you won!"}
                        onClick={handleWin}
       />}
      {displayLose && <Modal 
                        show={displayLose}
                        text={"Sorry, you lost, try again!"} 
                        onClick={handleLose}
        />}
        
      
      </Wrapper>
  );
}

export default App;