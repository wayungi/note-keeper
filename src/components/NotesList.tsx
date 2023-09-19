import noteModel from "../model/noteModel";
import Note from "./Note";

type NotesListProps = {
    notes: noteModel[],
    setNoteText: (text: string) => void,
    deleteNote: (id: string) => void
}

const NotesList = ({notes, setNoteText, deleteNote}: NotesListProps) => {

    const displayNotes: JSX.Element[] = notes.map((note) => <Note note={note} setNoteText={setNoteText} deleteNote={deleteNote}/>)

    return (
        <section>
            {displayNotes}
        </section>
    );
};

export default NotesList;
