

export default function Key({ character, type }) {
    
    return (
        <button onClick={e => type(character)} className="key">
            {character}
        </button>
    )
}