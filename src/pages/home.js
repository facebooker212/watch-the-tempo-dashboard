import { useState } from 'react';

const Home = function() {

  //Changes route into /login when called
  const login = async () => {
    window.location.href='/login'
  };

  //Changes route into /register when called
  const register = async () => {
    window.location.href='/register'
  };

  //Changes route to download when called
  const download = async () => {
    window.location.href='/WTT.rar'
  };

  const manual = async () => {
    window.location.href='/user_manual.pdf'
  };

  return (
      <div>
        <h1>Watch the tempo!</h1>
        <button onClick={login}>Login User</button><br/><br/>
        <button onClick={register}>Register User</button><br/><br/>
        <button onClick={download}>Download</button><br/><br/>
        <button onClick={manual}>User Manual</button><br/><br/>
      </div>
    );
};

export default Home;
