import deleteIcon from './delete-icon.svg'

export default function DeleteKey({ backspace }) {

    return (
        <div className="key" onClick={backspace}>
            <img src={deleteIcon} alt="backspace" onClick={backspace}/>
        </div>
    )
}