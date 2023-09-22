import {useState} from 'react';
import {AiFillDelete} from 'react-icons/ai';
import noteModel from '../model/noteModel';

type noteProps = {
    note : noteModel, /*{text: string, date: string, id: string}*/
    setNoteText: (text: string) => void,
    deleteNote: (id: string) => void
}

const Note = ({note, setNoteText, deleteNote}: noteProps): JSX.Element /*other types include: ReactNode, ...*/ => {

    const [text, setText] = useState<string>("");
    const [isEditable, setIsEditable] =  useState<boolean>(false);
    const characterCount: number = 200;

    const handleTextChange = (value: string, id: string): void => {
        if(characterCount - value.length <= 0) return;
        setText(value);
        setNoteText(value, id);
    }

    const handleEditable = (): void => {
        setIsEditable((prev) => !prev)
    }

    const handleDeleteNote = (id: string): void => {
        deleteNote(id);
    }

    return (
        <article className="notes">
            {isEditable && <textarea
                placeholder="Add notes here ..."
                onChange={(e) => handleTextChange(e.target.value, note.id)}
                value={text}
            />}

            {!isEditable && <div
                onDoubleClick={() => handleEditable()}
                className="display-note"
            >{note.text}</div>}

            <p>{isEditable && `${characterCount - text.length} characters remaining`} </p>

            <footer>
                <p>{note.date}</p>
                <span className="controls">
                    { isEditable && <button onClick={() => handleEditable()} className="save">save</button>}
                    <AiFillDelete onClick={() => handleDeleteNote(note.id)} className="delete-btn"/>
                </span>
            </footer>
        </article>
    )
};

export default Note;

// you can also have return type of  ReactElement === return <h1>tags</h1>
