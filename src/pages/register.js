import { useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

const Register = function() {

  if(auth.currentUser) {
    window.location.href='/dashboard'
  }

  //Hooks to set email, password and user
  const [email, setEmail] = useState('');
  const [pssw, setPssw] = useState('');
  const [user, setUser] = useState({});

  //Check if user changed and update it
  onAuthStateChanged(auth, (currentUser) => {
      if(currentUser) {
        setUser(currentUser);
      }
  });

  //Register function
  const register = async () => {
    try {
      createUserWithEmailAndPassword(auth, email, pssw);
    } catch(error){};
  };

  return (
    <div>
      <input placeholder="Ingresa tu e-mail" onChange={(event) => {
        setEmail(event.target.value);
      }}></input><br/><br/>
      <input type="password" placeholder="Ingresa una password" onChange={(event) => {
        setPssw(event.target.value);
      }}></input><br/><br/>
      <button onClick={register}>Register User</button>
    </div>
  );
};

export default Register;
