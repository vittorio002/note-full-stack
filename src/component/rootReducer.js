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
 

export default rootReducer;