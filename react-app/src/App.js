import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

function App() {
  const [courses, setCourses] = useState([]);
  const courseCollectionRef = collection(db, "InitializeDatabse");

  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(courseCollectionRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getCourses();
  }, []);

  return (
    <div className="App">
      {courses.map((course) => {
        return (
          <div>
            {" "}
            <h1>Course Name: {course.CourseName}</h1>
            <h1>Course Code: {course.CourseNum}</h1>
          </div>
        );
      })}
    </div>
  );
}
  
/*
  render(){
  return (
    <div className="main">
      <div className="container">
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>FirstName</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                
                return (
                    <tr>     
                    <td>{data.CourseName}</td>
                    <td>{data.CourseNum}</td>
                    <td>{data.OneOrAll}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
  );
}
}
*/


export default App;
