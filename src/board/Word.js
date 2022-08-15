import Tile from './Tile'

export default function Word({ guess, colors }) {

    return (
        <div className="word">
            <Tile letter={guess[0]} color={colors[0]} />
            <Tile letter={guess[1]} color={colors[1]}/>
            <Tile letter={guess[2]} color={colors[2]}/>
            <Tile letter={guess[3]} color={colors[3]}/> 
            <Tile letter={guess[4]} color={colors[4]}/>
        </div>
    )
}