// import firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAz40e4QBJ6drkc1_2PYVK79zeg5XYWJ-Q',
  authDomain: 'financehub0.firebaseapp.com',
  databaseURL: 'https://financehub0.firebaseio.com',
  projectId: 'financehub0',
  storageBucket: 'financehub0.appspot.com',
  messagingSenderId: '7120312129',
  appId: '1:7120312129:web:129016e6a7a4ec4cd0f3c0'
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
