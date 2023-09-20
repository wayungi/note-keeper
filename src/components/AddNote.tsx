import {AiOutlineFileAdd} from 'react-icons/ai';

type addNoteProps = {
    addNote: () => void,
}

const AddNote = ({addNote}: addNoteProps): JSX.Element => {

    const handleAddNote = (): void => {
        addNote();
    };

    return (
        <div  className="add-note">
            <AiOutlineFileAdd size="3em" onClick={() => handleAddNote()}/>
        </div>
    )

};

export default AddNote;
