import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export function fetchNotes() {
  return async (dispatch) => {
    const q = query(collection(db, 'note'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    });
    unsubscribe();
  };
}