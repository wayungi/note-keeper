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

    const handleTextChange = (value: string): void => {
        if(characterCount - value.length <= 0) return;
        setText(value);
        setNoteText(value);
    }

    const handleEditable = (): void => {
        setIsEditable((prev) => !prev)
    }

    const handleDeleteNote = (id: string): void => {
        deleteNote(id);
    }

    return (
        <article>
            {isEditable && <textarea
                placeholder="Add notes here ..."
                onChange={(e) => handleTextChange(e.target.value)}
                value={text}
            />}

            {!isEditable && <div onDoubleClick={() => handleEditable()}>{note.text}</div>}

            <footer>
                <p>{characterCount - text.length} characters remaining</p>
                { isEditable && <button onClick={() => handleEditable()}>save</button>}
                <AiFillDelete onClick={() => handleDeleteNote(note.id)}/>
            </footer>
        </article>
    )
};

export default Note;

// you can also have return type of  ReactElement === return <h1>tags</h1>
