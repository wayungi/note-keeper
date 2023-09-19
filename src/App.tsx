import './App.css'
import NotesList from './components/NotesList';
import noteModel from './model/noteModel';

const App = () => {

  const notes: noteModel[] =  [
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
  ]

  const setNoteText = () => {
    console.log('hello world');
  }

  const deleteNote = () => {
    console.log("delete note")
  }


  return (
    <>
      <NotesList notes={notes} setNoteText={setNoteText} deleteNote={deleteNote}/>
    </>
  )
}

export default App
