import React,{useContext, useState} from "react";
import notescontext from "../Components/context/notes/notecontext"
const Noteitem = (props) => {
  const [font,setfont]=useState("Take order")
  const[on,seton]=useState("0")
  const context=useContext(notescontext)
  const {deletenote}=context;
  const { notes,updatenotes,showalert } = props;
  const handleclick=()=>{
    setfont("Order confirmed")
    seton("none")
    setTimeout(() => {
      deletenote(notes._id)
    }, 5000);
    
  }
  return (
    <div className="col-md-3" >
      <div className="card my-3">
        <div className="card-body border border-success rounded ">
            <div className="d-flex align-items-center">
            <h5 className="card-title me-4 blockquote">{notes.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{notes.number}</h6>
            <i className="fa-solid fa-trash-can mx-2"onClick={()=>{
              deletenote(notes._id);showalert("deleted succesfully","success")
            }}></i>
          <i className="fa-solid fa-pen-to-square mx-2"onClick={()=>{updatenotes(notes)}}></i>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">{notes.location}</h6>
          <p className="card-text">{notes.list}</p>
          <button  className={`btn btn-outline-success my-2  d-${on}` }type="submit" onClick={handleclick}>Book</button>
          <h1>{font}</h1>
        </div>
      </div>
    </div>
    //main
  );
};

export default Noteitem;
