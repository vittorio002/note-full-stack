import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const fetchData = () => {
    return async (dispatch) => {
      const q = query(collection(db, 'note'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
        });
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      });
      return () => unsubscribe();
    };
  };

const initState = {
    notes: [],
  };


const RootReducer = (state = initState, action)=>{

    if(action.type == 'FETCH_DATA_SUCCESS'){
        console.log('ho caricato');
        return {
            ...state,
            notes: action.payload,
          };
    }else if(action.type == 'CHANGE_STATE'){
      const newState = state.notes;
      newState.map(note=>{
          if(note.id == action.id){
          note.descrizione = action.change
          note.nome = action.nome
      }})
      return{
          ...state,
         notes: newState
      }
  }else if(action.type == 'ADD_NOTE'){
     let id = state.notes.length
     const newNote = {
      id: Math.random(),
      nome: 'new note',
      descrizione:'.'
     };
     const newNotes =[...state.notes, newNote];
     return{
      ...state,
      notes: newNotes
     }
  }else if(action.type == 'DELETE_NOTE'){
      const newState = state.notes.filter(note=> note.id != action.id)
      return{
          ...state,
          notes : newState
      }
  }
  return state
}
 

export { fetchData, RootReducer };