import React from 'react';

import { auth } from './firebase'

import './App.css';

const Home = ({ user }) => {
  return (
    <div className="home">
      <h1>Hello</h1>
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

//, <span></span>{user.displayName}
//<img src={user.photoURL} alt="" />

export default Home;