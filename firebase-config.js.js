import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBugR7dM0f5ClUO5qEmknTzotEvrJG6FOY",
    authDomain: "rehamacasemy.firebaseapp.com",
    projectId: "rehamacasemy",
    storageBucket: "rehamacasemy.firebasestorage.app",
    messagingSenderId: "494526906082",
    appId: "1:494526906082:web:be92e4553824676b17e8bb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };