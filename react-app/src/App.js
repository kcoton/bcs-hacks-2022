import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  // firebase info
  const [users, setUsers] = useState([]); // holds list of users in table
  const usersCollectionRef = collection(db, "users");
  
  useEffect(() => { // auto-updates on refresh
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    getUsers();
  }, []);

  return (
    <div className="main">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
