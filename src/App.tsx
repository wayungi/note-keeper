import {useState, useEffect} from 'react';
import './App.css'
import NotesList from './components/NotesList';
import noteModel from './model/noteModel';
import { v4 as uuidv4 } from 'uuid';

const App = () => {}

  const [notes, setNotes] = useState<noteModel[]>([]);
  const [saveToLocalStorage, setSaveToLocalStorage] = useState<boolean>(false);

  // load all notes from local storage when page loads
  useEffect(() => {
    getNotes();
  },[]);

  useEffect(() => {
    saveToLocalStorage && save() && setSaveToLocalStorage(false);
  }, [saveToLocalStorage]);

  const getNotes = (): void => {
    const localStoarageNotes: string | null = localStorage.getItem('typescript-note-app');
    if(!localStoarageNotes) return;
    const storedNotes: noteModel[] = JSON.parse(localStoarageNotes)
    setNotes(storedNotes)
  }

  const save = (): boolean => {
    let hasSaved = false;
    if(notes.length > 0) {
      localStorage.setItem('typescript-note-app', JSON.stringify(notes));
      hasSaved = !hasSaved
    }else{
      localStorage.removeItem('typescript-note-app');
    }
    return hasSaved;
  }


  /** this method will need improving the algorithm **/
  const updateNoteText = (text: string, id: string):void => {
    const editedElement: noteModel | undefined = notes.find((note) => note.id === id);
    if(!editedElement) return
    editedElement.text = text;
    editedElement.displayEditable = false;
    setSaveToLocalStorage(true);
  }

  const deleteNote = (id: string): void => {
    const filteredNotes: noteModel[] = notes.filter((note) => note.id !== id);
    setNotes([...filteredNotes]);
    //save();
  }

  const addNote = (): void => {
    const newNote: noteModel = {
      text: "",
      date: new Date().toLocaleDateString(),
      id: uuidv4(),
      displayEditable: true
    };
    setNotes([...notes, newNote]);
  }



  return (
    <>
      <NotesList
        notes={notes}
        updateNoteText={updateNoteText}
        deleteNote={deleteNote}
        addNote={addNote}
      />
    </>
  )
}

export default App
