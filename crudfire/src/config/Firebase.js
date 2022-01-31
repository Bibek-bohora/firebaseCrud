// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref,set,update,onValue} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgJYSJ6ZFkeJ-WVQKPStUY9u9CPsLQfqM",
  authDomain: "crud-15e1f.firebaseapp.com",
  databaseURL: "https://crud-15e1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-15e1f",
  storageBucket: "crud-15e1f.appspot.com",
  messagingSenderId: "317844244551",
  appId: "1:317844244551:web:6b3af912b2159b319f4962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = getDatabase(app);


export { database,ref,set,update,onValue} ;