import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDV0JUxIt3pH5ucy8C7H44QaV4P09s9ebc',
  authDomain: 'float-notes.firebaseapp.com',
  databaseURL: 'https://float-notes.firebaseio.com',
  projectId: 'float-notes',
  storageBucket: 'float-notes.appspot.com',
  messagingSenderId: '856118323523',
};
firebase.initializeApp(config);

// Get a reference to the database service
const database = firebase.database();

export function createBoard(callback) {
  return (database.ref().child('boards').push().key);
}

export function fetchNoteBoards(callback) {
  firebase.database().ref('noteboards').on('value', (snapshot) => {
    //
  });
}
