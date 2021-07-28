import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDgMGV_yliLlRcdJQ_T2_hRUo6G3wBssXE',
  authDomain: 'chat-web-app-11f33.firebaseapp.com',
  projectId: 'chat-web-app-11f33',
  storageBucket: 'chat-web-app-11f33.appspot.com',
  messagingSenderId: '1090896733650',
  appId: '1:1090896733650:web:ebaff78e2dfef9e81c540b',
  measurementId: 'G-5F60KGB07C',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
