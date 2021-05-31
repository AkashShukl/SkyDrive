import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
  apiKey: "AIzaSyC_YlC4IsC1qGxjFGTVTW9cxkfZnUV5nP0",
  authDomain: "junkbox-v1.firebaseapp.com",
  projectId: "junkbox-v1",
  storageBucket: "junkbox-v1.appspot.com",
  messagingSenderId: "741768435781",
  appId: "1:741768435781:web:0140cea603d680978eeb2c",
});

export const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const auth = app.auth();
export const storage = app.storage();
export default app;
