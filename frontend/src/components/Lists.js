import React,{useEffect, useState} from 'react'
import axios from "axios"

const BASE_URL = "loose-prose-production.up.railway.app"

export default function Lists(){
  const [userData, setUserData] = useState("");
  const [neworder, setNewOrder] = useState("ASC");

  const fetchUserData = async ()=>{
    const resp = await axios.get(`${BASE_URL}/getUsers`);
    console.log(resp)

    if(resp.data.newusers.length>0){
      
      setUserData(resp.data.newusers);
      for (let index = 0; index < resp.data.newusers.length; index++)
         {
            console.log(resp.data.newusers[index].title)
          }
    }
  };

  useEffect(()=>{
    fetchUserData();
  },[userData])

  const handleEdit = async (newuser)=>{
    const userName = prompt("Enter updated ToDo Title")
    const usertitle = prompt("Enter the updated tasks")

    if (!userName || !usertitle){
      alert("Enter the username and usertitle")
    }
    else{
      const resp = await axios.put(`${BASE_URL}/editUser/${newuser._id}`, {
        title:userName,
        tasks:usertitle
      });
      console.log(resp);
    }
  };

  const handledelete = async(useriD)=>{
    const resp = await axios.delete(`${BASE_URL}/deleteUser/${useriD}`);
    
  };

  const handleEdittitle = async(newuser)=>{
    const userName = prompt("Enter updated ToDo Title")
    if (!userName ){
      alert("Enter the Title ")
    }
    else{
      const resp = await axios.put(`${BASE_URL}/editUser/${newuser._id}`, {
        title:userName,
        tasks:newuser.tasks
      });
      console.log(resp);
    }
  };
  
 
  


  return(
    <div>
      <button></button>
    <h1 class="m-auto  w-1/2 flex font-bold justify-center pt-12 pb-8 underline underline-offset-8 text-4xl text-white"> TASKS CREATED</h1>
      <table class="m-auto">
        <thead class = "">
            {/* <th class="w-10  border-white text-white">S.No</th> */}
            <th class="w-32 pb-8 text-white text-xl" onClick={()=>{}}>Title</th>
            <th class="w-60 pb-8 text-white text-xl">Tasks</th>
            <th class="w-32 pb-8 text-white text-xl">Edit ToDo</th>
            <th class="w-32 pb-8 text-white text-xl">Delete ToDo</th>
            <th class="w-32 pb-8 text-white text-xl">Created on</th>
            <th class="w-32 pb-8 text-white text-xl">Updated on</th>

        </thead>
        <tbody>
          {userData && userData.map((newuser)=>(
            <tr>
              
                <td class="text-white text-center "> {newuser.title}</td>
                <td class="text-white text-center"> {newuser.tasks}</td>
                <td class="text-white  "><button onClick = {()=>{handleEdit(newuser)}} class="flex ml-4 text-center pl-8 rounded-lg w-3/4 bg-sky-500 ">EDIT</button></td>
                <td class="text-white  "><button onClick = {()=>{handledelete(newuser._id)}} class="flex ml-4 text-center pl-6 rounded-lg w-3/4 bg-sky-500 ">DELETE</button></td>
             
                <td class="text-white text-center"> {newuser.createdAt}</td>
                <td class="text-white text-center"> {newuser.createdAt}</td>
            </tr>
            ))}
        </tbody>
      </table>
      
    </div>
  )
}
