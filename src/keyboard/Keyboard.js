import './Keyboard.css'
import Key from './Key'
import EnterKey from './EnterKey'
import DeleteKey from './DeleteKey'

export default function KeyBoard({ type, guess, backspace }) {

    const keyboardCharacters = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
    ]

    return (
        <div>

            {keyboardCharacters.map(keyboardRow => {

                return (

                    <div className="keyboard-row" key={keyboardRow}>

                        {keyboardRow.map(character => {

                            if (character.length === 1) {

                                return (
                                    <Key key={character} type={type} character={character} />
                                )
                            } else if (character === 'ENTER') {

                                return (
                                    <EnterKey key={character} guess={guess} />
                                )
                            } else if (character === 'DELETE') {

                                return (
                                    <DeleteKey key={character} backspace={backspace} />
                                )
                            }
                        })}
                    </div>
                )
            })}
        </div>
    )
}