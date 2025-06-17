// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDxmeeJ8qvsHI0USWk0K9Of0fLzZyLiLI",
  authDomain: "fir-test-3b845.firebaseapp.com",
  databaseURL:"https://fir-test-3b845-default-rtdb.firebaseio.com/",
  projectId: "fir-test-3b845",
  storageBucket: "fir-test-3b845.firebasestorage.app",
  messagingSenderId: "277657873480",
  appId: "1:277657873480:web:c39f02e2768b9015053c7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

export default database