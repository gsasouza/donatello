import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBKTq6Q9Mn3hqVzdmMQ-If8JLdbdrJugWo',
  authDomain: 'turtle-880d5.firebaseapp.com',
  databaseURL: 'https://turtle-880d5.firebaseio.com',
  projectId: 'turtle-880d5',
  storageBucket: 'turtle-880d5.appspot.com',
  messagingSenderId: '732818747881',
  appId: '1:732818747881:web:4c11b51765b338f4'
};

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.firestore();
