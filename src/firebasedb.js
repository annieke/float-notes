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
  return (database.ref().child('noteboardIDs').push().key);
}

export function nameBoard(boardID, name, callback) {
  database.ref('noteboardIDs').child(boardID).update(name);
}

export function fetchNoteBoardIDs(callback) {
  database.ref('noteboardIDs').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function fetchNoteBoard(boardID, callback) {
  database.ref(boardID).on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

export function removeNote(boardID, id, callback) {
  database.ref(boardID).child(id).remove();
}

export function addNote(boardID, newnote, callback) {
  database.ref(boardID).push(newnote);
}

export function editNote(boardID, id, updates, callback) {
  database.ref(boardID).child(id).update(updates);
}
