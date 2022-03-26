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
      {users.map((user) => {
        return (
        <div>
          <h1>Name: {user.name}</h1>
        </div>
        );
      })}
    </div>
  );
}

export default App;
