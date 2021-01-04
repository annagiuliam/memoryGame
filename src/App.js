import React, {useState, useEffect} from 'react';
import catArr from './components/cats';
import './App.css';
import Card from './components/card';
import Wrapper from './components/wrapper';
import Header from './components/header';

function App() {
  const [cats, setCats] = useState(catArr);
  let  [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  function handleClick(catId) {
    const clickedCat = cats.find((cat) => cat.id === catId);
    if (clickedCat.clicked === false) { 
      handleWin(clickedCat)
    } else {
      handleLose()
    }
  }

  function handleWin(clickedCat) {
    clickCat(clickedCat);
    setScore(score + 1);
  }

  function handleLose() {
    if (score > highScore) {
      setHighScore(highScore = score)
    }   
    setScore(score = 0);
    
  }

  function clickCat(clickedCat) {   
   clickedCat.clicked = true;
   setCats([...cats]);
   console.log(cats);
  }

  function handleScore(clickedCat) {
    
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
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
