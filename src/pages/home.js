import { useState } from 'react';

const Home = function() {

  const login = async () => {
    window.location.href='/login'
  };


  const register = async () => {
    window.location.href='/register'
  };

  return (
    <div>
      <button onClick={login}>Login User</button><br/><br/>
      <button onClick={register}>Register User</button><br/><br/>
    </div>
  );
};

export default Home;
