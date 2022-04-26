import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTbSdKQ9IiPTFkDeDBYZVQkEsdXd_A0qQ",
  authDomain: "login-sys-c993a.firebaseapp.com",
  projectId: "login-sys-c993a",
  storageBucket: "login-sys-c993a.appspot.com",
  messagingSenderId: "122689581155",
  appId: "1:122689581155:web:77fe18f12cbba7fd7dc856"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
