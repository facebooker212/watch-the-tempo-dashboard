import { useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase-config';

const Dashboard = function() {

  //Hook to set current user
  const [user, setUser] = useState({});

  //Check if user changed and update it
  onAuthStateChanged(auth, (currentUser) => {
      if(currentUser) {
        setUser(currentUser);
      }
  });

  //Logout function
  const logout = async () => {
    await signOut(auth);
    window.location.href='/login';
  };

  return (
      <div>
          <span>Login successful</span><br/><br/>
          <span>Email: {user?.email}</span><br/><br/>
          <span>UID: {user?.uid}</span><br/><br/>
          <button onClick={logout}>Logout User</button>
      </div>
  );
};

export default Dashboard;
