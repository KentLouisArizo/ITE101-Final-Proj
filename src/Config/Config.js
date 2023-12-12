import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC5uisOGefuO63tFDX80dw5j4VSvKktNHI",
  authDomain: "ite-final-project.firebaseapp.com",
  projectId: "ite-final-project",
  storageBucket: "ite-final-project.appspot.com",
  messagingSenderId: "709911884103",
  appId: "1:709911884103:web:b303fd2c7a3218eb085c62",
  measurementId: "G-Y60K97BCS3"
};

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db} 