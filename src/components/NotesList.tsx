import noteModel from "../model/noteModel";
import Note from "./Note";
import AddNote from './AddNote';


type NotesListProps = {
    notes: noteModel[],
    updateNoteText: (text: string, id: string) => void,
    deleteNote: (id: string) => void,
    addNote: () => void
}

const NotesList = ({notes, updateNoteText, deleteNote, addNote}: NotesListProps) => {

    const displayNotes: JSX.Element[] = notes.map((note) => <Note key={note.id} note={note} updateNoteText={updateNoteText} deleteNote={deleteNote}/>)

    return (
        <section className="notes-list">
            {displayNotes}
            <AddNote addNote={addNote}/>
        </section>
    );
};

export default NotesList;
