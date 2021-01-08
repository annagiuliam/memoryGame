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
     if (score === cats.length) {
      setDisplayWin(true)
     }

  }, [score, cats])


  function handleWin(score) {
    setDisplayWin(false)
    setHighScore(score)
    setScore(0)
    resetCats();
  }

  function handleClick(clickedCat) {
    (! clickedCat.clicked ) ?  handleScore(clickedCat) :  setDisplayLose(true);
  }

  function handleScore(clickedCat) {    
    setScore(score + 1); 
    clickCat(clickedCat);    
   setCats(shuffle(cats))
   console.log(cats)
  }  

  function handleLose() {
    setDisplayLose(false)
    if (score > highScore) {
      setHighScore(score) 
    }   
    setScore(0);
    resetCats();
    setCats(shuffle(cats))
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
              onClick={() => handleClick(cat)}></Card>
            )
          })}
      </div>
      {displayWin && <Modal 
                        show={displayWin}
                        text={"Congratulations, you won!"}
                        onClick={() => handleWin(score)}
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