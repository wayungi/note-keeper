import {useState} from 'react';
import {AiFillDelete} from 'react-icons/ai';

/*
    {
        text: string
        date: new Date().toLocaleDateString()
        id: string
    }

*/ 

const Note = ({note, setNoteText, deleteNote}) => {

    const [text, setText] = useState<string>("");
    const [isEditable, setIsEditable] =  useState<boolean>(false);
    const characterCount = 200;

    const handleTextChange = (value) => {
        if(characterCount - value.length <= 0) return;
        setText(value);
        setNoteText(value);
    }

    const handleEditable = () => {
        setIsEditable((prev) => !prev)
    }

    const handleDeleteNote = (id) => {
        deleteNote(id);
    }

    return (
        <section>
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
        </section>
    )
};

export default Note;
