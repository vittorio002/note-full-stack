import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

function SingleId (props) {
    let {id}=useParams();
    let notes = props.notes.filter(note=> note.id == id)
    let change 
    const [isEditing, setIsEditing] = useState(false);
    const [textNomeValue, setTextNomeValue] = useState(notes[0].nome);
    const [textDescrizioneValue, setTextDescrizioneValue] = useState(notes[0].descrizione);

    const loadChange = (e) =>{
        setTextDescrizioneValue(e.target.value)
    }

    const toChange = () =>{
        props.onModify(textDescrizioneValue, id, textNomeValue)
    }

  const handleChange = (e) => {
    setTextNomeValue(e.target.value);
  };

   const handleEdit = () => {
    setIsEditing(true);
  };

   const handleSave = () => {
    setIsEditing(false);
  };
    return ( 
        <>
                <div style={{textAlign:"center "}}>
                  

                    <div>

                        {isEditing ? (
                            <input className="title" type="text" value={textNomeValue} onChange={handleChange} />
                        ) : (
                            <p className="title">{textNomeValue}</p>
                        )}


                        {!isEditing && <button onClick={handleEdit}>Edit</button>}

                        {isEditing && <button onClick={handleSave}>Save</button>}
                    </div>

                    <br/>
                    <textarea onChange={loadChange} className="subtitle responsive-textarea" placeholder='type' >{textDescrizioneValue}</textarea>
                   
                    <div className="buttons is-centered">
                        <button onClick={toChange} class="button is-success">Salva</button>
                       <Link to="/note"> <button class="button is-info">Torna Indietro</button></Link>
                    </div>
                    <br/>
                </div>
            
            </>
     );
}

export default SingleId;