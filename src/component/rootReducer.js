import { query, collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const initState = {
    notes: [],
};



const rootReducer = (state = initState, action)=>{
    if(action.type == 'FETCH_DATA_SUCCESS'){
        console.log('ho caricato');
        return {
            ...state,
            notes: action.payload,
          };
    }else if (action.type === 'CHANGE_STATE') {
      const newState = state.notes.map(note => {
        if (note.id === action.id) {
          return {
            ...note,
            descrizione: action.change,
            nome: action.nome,
          };
        }
        return note;
      });
  
      // Aggiorna il documento corrispondente nel database
      const noteRef = doc(db, 'note', action.id);
      updateDoc(noteRef, {
        descrizione: action.change,
        nome: action.nome,
      });
  
      return {
        ...state,
        notes: newState,
      };
    } else if (action.type === 'ADD_NOTE') {
      const newNote = {
        id: Math.random(),
        nome: 'new note',
        descrizione: '.',
      };
  
      // Aggiungi un nuovo documento nel database
      addDoc(collection(db, 'note'), newNote);
  
      const newNotes = [...state.notes, newNote];
      return {
        ...state,
        notes: newNotes,
      };
    } else if (action.type === 'DELETE_NOTE') {
      // Elimina il documento corrispondente dal database
      const noteRef = doc(db, 'note', action.id);
      deleteDoc(noteRef);
  
      const newState = state.notes.filter(note => note.id !== action.id);
      return {
        ...state,
        notes: newState,
      };
    }
    
    return state;
  };
  
 

export default rootReducer;
