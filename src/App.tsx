import {useState} from 'react';
import './App.css'
import NotesList from './components/NotesList';
import noteModel from './model/noteModel';
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [notes, setNotes] = useState<noteModel[]>([
    {
      text: 'today is it',
      date: new Date().toLocaleDateString(),
      id: "0980"
    },
    {
      text: "Golan heights",
      date: new Date().toLocaleDateString(),
      id: "0988"
    }
  ]);

  const setNoteText = ():void => {
    console.log('hello world');
  }

  const deleteNote = (): void => {
    console.log("delete note")
  }

  const addNote = (): void => {
    const newNote: noteModel = {
      text: "",
      date: new Date().toLocaleDateString(),
      id: uuidv4()
    };

    setNotes([...notes, newNote]);
  }


  return (
    <>
      <NotesList
        notes={notes}
        setNoteText={setNoteText}
        deleteNote={deleteNote}
        addNote={addNote}
      />
    </>
  )
}

export default App
