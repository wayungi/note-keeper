import noteModel from "../model/noteModel";
import Note from "./Note";

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
        </section>
    );
};

export default NotesList;
