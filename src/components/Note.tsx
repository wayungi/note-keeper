import {useState} from 'react';
import {AiFillDelete} from 'react-icons/ai';
import noteModel from '../model/noteModel';

type noteProps = {
    note : noteModel, /*{text: string, date: string, id: string}*/
    updateNoteText: (text: string, id: string) => void,
    deleteNote: (id: string) => void
}

const Note = ({note, updateNoteText, deleteNote}: noteProps): JSX.Element /*other types include: ReactNode, ...*/ => {

    const [text, setText] = useState<string>(note.text);
    const [showSaveButton, setShowSaveButton] = useState<boolean>(false);
    // const [isEditable, setIsEditable] =  useState<boolean>(note.displayEditable);
    const characterCount: number = 200;

    const handleTextChange = (value: string, id: string): void => {
        if(characterCount - value.length <= 0) return;
        setShowSaveButton(true);
        setText(value);
        updateNoteText(value, id);
    }

    // const handleEditable = (): void => {
    //     setIsEditable((prev) => !prev)
    // }

    const handleDeleteNote = (id: string): void => {
        deleteNote(id);
    }

    return (
        <article className="notes">
            <textarea
                placeholder="Add notes here ..."
                onChange={(e) => handleTextChange(e.target.value, note.id)}
                value={text}
            />

            {/* {<div
                onDoubleClick={() => handleEditable()}
                className="display-note"
            >{note.text}</div>} */}

            {/* <p>{isEditable && `${characterCount - text.length} characters remaining`} </p> */}

            <footer>
                <p>{note.date}</p>
                <span className="controls">
                    { showSaveButton &&  <button onClick={() => handleEditable()} className="save">save</button>} 
                    <AiFillDelete onClick={() => handleDeleteNote(note.id)} className="delete-btn"/>
                </span>
            </footer>
        </article>
    )
};

export default Note;

// you can also have return type of  ReactElement === return <h1>tags</h1>
