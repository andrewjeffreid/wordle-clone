import './Board.css'
import Word from './Word'

export default function Board({ guesses, colors }) {

    return (
        <div className="board">
            <Word guess={guesses[0]} colors={colors[0]} />
            <Word guess={guesses[1]} colors={colors[1]}/>
            <Word guess={guesses[2]} colors={colors[2]}/>
            <Word guess={guesses[3]} colors={colors[3]}/>
            <Word guess={guesses[4]} colors={colors[4]}/>
            <Word guess={guesses[5]} colors={colors[5]}/>
        </div>
    )
}