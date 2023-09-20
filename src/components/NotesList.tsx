import noteModel from "../model/noteModel";
import Note from "./Note";
import AddNote from './AddNote';


type NotesListProps = {
    notes: noteModel[],
    setNoteText: (text: string) => void,
    deleteNote: (id: string) => void
}

const NotesList = ({notes, setNoteText, deleteNote}: NotesListProps) => {

    const displayNotes: JSX.Element[] = notes.map((note) => <Note key={note.id} note={note} setNoteText={setNoteText} deleteNote={deleteNote}/>)

    return (
        <section className="notes-list">
            {displayNotes}
            <AddNote />
        </section>
    );
};

export default NotesList;
