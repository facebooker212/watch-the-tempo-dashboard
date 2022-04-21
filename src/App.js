import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import './styles.css'

function App() {

  const [email, setEmail] = useState('');
  const [pssw, setPssw] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    if(currentUser) {
      setUser(currentUser);
    }
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pssw);
    } catch(error){};
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, pssw);
    } catch(error){};
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="wrapper">
      <input placeholder="Ingresa tu e-mail" onChange={(event) => {
        setEmail(event.target.value);
      }}></input><br/><br/>
      <input type="password" placeholder="Ingresa una password" onChange={(event) => {
        setPssw(event.target.value);
      }}></input><br/><br/>
      <button onClick={register}>Register User</button>
      <button onClick={login}>Login User</button>
      <button onClick={logout}>Logout User</button>
      <span>{user?.email}</span>
    </div>
  );
}

export default App;
