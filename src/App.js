import './App.css'
import { answers, acceptedGuesses } from './WordList'
import Board from './board/Board'
import Keyboard from './keyboard/Keyboard'
import { useState } from 'react'

function App() {

  const [answer, setAnswer] = useState(answers[Math.floor(Math.random()*answers.length)].toUpperCase())
  const [guesses, setGuesses] = useState(["", "", "", "", "", ""])
  const [colors, setColors] = useState([...Array(6)].map(e => Array(5)))
  const [currentGuess, setCurrentGuess] = useState(0)

  const type = (letter) => {

    if (currentGuess < 6) {
      if (guesses[currentGuess].length < 5) {
        let newGuesses = [...guesses]
        newGuesses[currentGuess] += letter
        setGuesses(newGuesses)
      }
    }
  }

  const guess = () => {

    // check if user has available guesses
    if (currentGuess < 6) {

      // check if guess is 5 characters
      if (guesses[currentGuess].length === 5) {

        // check if guess is valid 
        if (acceptedGuesses.includes(guesses[currentGuess].toLowerCase())) {

          // check if guess is answer
          if (guesses[currentGuess] === answer) {
            let newColors = colors
            newColors[currentGuess] = ["green", "green", "green", "green", "green"]
            setColors(newColors)
            setAnswer(answers[Math.floor(Math.random()*answers.length)].toUpperCase())

          // wrong guess
          } else {

            for (let i = 0; i < 5; i++) {

              // check for green letters
              if (guesses[currentGuess][i] === answer[i]) {
                let newColors = colors
                newColors[currentGuess][i] = "green"
                setColors(newColors)

              // check for yellow letters
              } else if (answer.includes(guesses[currentGuess][i])) {
                let newColors = colors
                newColors[currentGuess][i] = "yellow"
                setColors(newColors)
              } else {
                let newColors = colors
                newColors[currentGuess][i] = "grey"
                setColors(newColors)
              }
            }

            // next guess
            let newCurrentGuess = currentGuess + 1
            setCurrentGuess(newCurrentGuess)
            
          }
        }
      }
    }
  }

  const backspace = () => {

    if (currentGuess < 6) {
      if (guesses[currentGuess].length > 0) {
        let newGuesses = [...guesses]
        newGuesses[currentGuess] = guesses[currentGuess].slice(0, -1)
        setGuesses(newGuesses)
      }
    }
  }

  return (

    <div className="App">
      <h1>Wordle</h1>
      <div className="board-container">
        <Board guesses={guesses} colors={colors}/>
      </div>
        <Keyboard type={type} guess={guess} backspace={backspace} />
    </div>
  );
}

export default App;
