import React, {useState, useEffect} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { auth } from './firebase';
import './App.css';

const Home = () => {
	const [user, loading, error] = useAuthState(auth);
	const [name, setName] = useState("");
	const history = useHistory();
	
	useEffect(() => {
		if (loading) return;
		if (!user) return history.replace("/");
	}, [user, loading]);
	
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