import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBJuuunghq6xyxV5szomoMZdWNvUuGS0FA",
    authDomain: "note-full-stack.firebaseapp.com",
    projectId: "note-full-stack",
    storageBucket: "note-full-stack.appspot.com",
    messagingSenderId: "1036139791575",
    appId: "1:1036139791575:web:591130ad09858190279c92"
}

const app = initializeApp(firebaseConfig);





export const db = getFirestore(app);