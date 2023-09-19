import noteModel from "../model/noteModel";

type NotesListprops = {
    notes: noteModel[],
    setNoteText: (text: string) => void,
    deleteNote: (id: string) => void
}

const NotesList = ({notes, setNoteText, deleteNote}: NotesListprops) => {


};

export default NotesList;
