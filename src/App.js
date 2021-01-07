import React, {useState, useEffect} from 'react';
import {shuffle} from 'lodash';
import catArr from './components/cats';
import './App.css';
import Card from './components/card';
import Wrapper from './components/wrapper';
import Header from './components/header';

function App() {
  const [cats, setCats] = useState(catArr);
  const  [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  useEffect(() => {
     if (score === cats.length) {
       handleWin();
     }
  })

  function handleClick(catId) {
    const clickedCat = cats.find((cat) => cat.id === catId);
    (! clickedCat.clicked ) ?  handleScore(clickedCat) :  handleLose();
   
  }

  function handleScore(clickedCat) {    
    setScore(score + 1); 
    clickCat(clickedCat);
    shuffleArray(cats);    
  }

  function handleWin() {
    alert("You won!")
      setHighScore(score)
      setScore(0)
      resetCats();
  }

  function handleLose() {
    if (score > highScore) {
      setHighScore(score) 
    }   
    setScore(0);
    resetCats();
    alert("You lost, try again!")
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
         
        
      
      </Wrapper>
  );
}

export default App;
