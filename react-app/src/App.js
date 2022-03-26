import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";
import { query, where } from "firebase/firestore";
import React from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"
import "datatables.net-dt/css/jquery.dataTables.min.css"


function App() {
  const [courses, setCourses] = useState([]);
  const courseCollectionRef = collection(db, "InitializeDatabase");

  useEffect(() => {
    const getCourses = async () => {
      const data = await getDocs(courseCollectionRef);
      setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getCourses();
  }, []);
  


  return (

    
    <div className="MainDiv">
      <div class="jumbotron text-center bg-sky">
        <br/>
      <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Type in the course number (eg:121)" title="Type in a name" />
      <br/><br/>
      </div>
    
      <div className="container">        
          <table id="myTable" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th></th>
                    <th>Course Name</th>
                    <th>Course Code</th>
                    <th>Pre-Requisites</th>
                </tr>
            </thead>
            <tbody>
            {courses.map((course) => {
                
                return (
                  
                    <tr>     
                    <td><input type="checkbox"></input></td>
                    <td>{course.CourseName}</td>
                    <td>{course.CourseNum}</td>
                    <td>{course.Prereqs}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
         
          
     </div>
     
    </div>
    
  );

  
}

export default App;
