import React, { useState, useEffect } from 'react';
import axios from "axios";

function Admin() {
  // const [enquiries, setEnquiries] = useState([]); 
 

  // useEffect(()=>{

  //   const fetchData = async()=>{
  //       const response = await axios.get("http://localhost:8000/api/enquiries");
  //       setUsers(response.data);
  //   }

  //   fetchData();

  // },[])'''

  const [users ,setUsers] = useState([])


  // useEffect(() =>{
  //   const fetchData =async(()=>{
  //     const response = await axios.get("http://localhost:8000/api/enquiries")
  //   })
  // })




 
 

  

  return (
    <div>
      <div>
        <button >New</button>
        <button>Pending</button>
        <button>Completed</button>
      </div>
    </div>
  );
}

export default Admin;
