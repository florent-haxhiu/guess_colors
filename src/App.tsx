import React, { useEffect, useState } from 'react';

function App() {

  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [results, setResults] = useState<boolean | undefined>(
    undefined
  )

  const generateColors = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };

  const getRandomColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`
  };

  useEffect(() => {
    // TODO: Generate a random color
    generateColors();
  }, []);

  const handleAnswer = (answer: string) => {
    console.log(color)
    if (color === answer) {
      setResults(false);
      generateColors();
    } else {
      setResults(true);
    }
  };


  return (
    <div className="container">
      <div className="guess-me" style={{ background: color }}></div>
      <div className='buttons'>
      {answers.map((color) => {
        return <button key={color} onClick={() => handleAnswer(color)}>{color}</button>
      })}
    </div>
    {results  ? <div className='wrong'>Wrong Answer</div> : <div className='correct'>Correct</div>}
    </div>
  );
}

export default App;
