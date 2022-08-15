export default function Tile({ letter, color }) {

    const setTileColor = (color) => {
        if (color === "green") {
            return "green-tile"
        } else if (color === "yellow") {
            return "yellow-tile"
        } else if (color === "grey") {
            return "grey-tile"
        } else {
            return "tile"
        }
    }

    return (
        <div className={setTileColor(color)}>
            {letter}
        </div>
    )
}