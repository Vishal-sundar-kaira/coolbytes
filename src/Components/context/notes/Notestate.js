import React, { useState } from "react";
import noteContext from "./notecontext";
const Notestate=(props)=>{
  const host="http://localhost:5000"
    const notesinitial=[]
    const [notes,setNotes]=useState(notesinitial)
    //get all notes
    const getnotes=async()=>{
      //To do API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }, 
      });
      const json=await response.json()
      console.log(json)
      setNotes(json)
    }
    //personal notes
    const personalnotes=async()=>{
      //To do API call
      const response = await fetch(`${host}/api/notes/fetchyournotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        }, 
      });
      const json=await response.json()
      console.log(json)
      setNotes(json)
    }
    //Add a note
    //for adding we first made note which we have to add which we taken from client(frontend) with parameters of addnote in which i use onchange and onclick and add value given as name list and location and then add them to new notes name and finally i used concat function to add that notes in then end of list or data.
    const addnote=async(name,list,location,number)=>{
      //To do API call
      const response = await fetch(`${host}/api/notes/Addnotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({name,list,location,number}) 
      });
      const note=await response.json()
      setNotes(notes.concat(note))//use for adding note in last
        //concat return an array while push updates the array.
    }

    //Delete a note
    // for deleting i had taken an id from frontend by running deletenote function in given note  and taken id as parameter and then compare given id with notes id if not equal than store it and make new notes without that id wala note.
    const deletenote=async(id)=>{
      //To do api
      const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        }, 
      });
      const json=await response.json()
      console.log(json)
      setNotes(json)
        console.log("deleting the id with id"+id)
        const newnotes=notes.filter((notes)=>{
          return notes._id!==id
        })
        setNotes(newnotes)
        
    }

    //Edit a note
    //for edit note first take parameters from frontend in editnote and than use for loop and input new name,list and location in given id note.
    const editnote=async (id,name,location,list,number)=>{
      // Api call
      const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body: JSON.stringify({name,location,list,number}) 
      });
      const json= await response.json(); 
      console.log(json)
      let newnotes=JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newnotes.length; index++) {
          const element = newnotes[index];
          console.log(element._id)
          if(element._id===id)
          {
            console.log("yess its working")
            newnotes[index].name=name;
            newnotes[index].list=list;
            newnotes[index].location=location;
            newnotes[index].number=number;
            break;
          }
        }
        console.log(newnotes)
        setNotes(newnotes)
    }


    return(
        <noteContext.Provider value={{notes,getnotes,addnote,deletenote,editnote,personalnotes}}>
            {props.children}
        </noteContext.Provider>

    )
}
export default Notestate;