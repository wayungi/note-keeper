import './App.css'
import Note from './components/Note'

const App = () => {

  const note =  {
    text: "today is it",
    date: new Date().toLocaleDateString(),
    id: "0980"
  }

  const setNoteText = () => {
    console.log('hello world');
  }

  const deleteNote = () => {
    console.log("delete note")
  }


  return (
    <>
      <Note note={note} setNoteText={setNoteText} deleteNote={deleteNote}/>
    </>
  )
}

export default App
