import React, { useContext, useEffect, useRef,useState } from "react";
import notescontext from "../Components/context/notes/notecontext";
import Noteitem from "./Noteitem";
import {useNavigate} from 'react-router-dom';
const Notes = (props) => {
  const context = useContext(notescontext);
  let navigate=useNavigate()
  const { notes, getnotes ,editnote,personalnotes} = context;
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')){
      console.log("token is there")
      console.log(props.stat)
      if(props.stat==="all")
      { 
        getnotes()}
      else
      { console.log("aa to rha he")
        personalnotes();}
  }
    else{
      console.log("error he bro")
      navigate('/login')
    }
    // eslint-disable-next-line
  }, []);
  const[note,setNote]=useState({id:"",ename:"",elist:"",enumber:"",elocation:""})
  
  const updatenotes = (currentnote) => {
    ref.current.click();
    setNote({id:currentnote._id,ename:currentnote.name,elocation:currentnote.location,elist:currentnote.list,enumber:currentnote.number})
  };
  const handleclick=(e)=>{
    console.log("updating notes")
    editnote(note.id,note.ename,note.elocation,note.elist,note.enumber)
    refclose.current.click();
    props.showalert("updated note succesfully","success")
   
  }
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  //use ref is use to give reference if you want to click on any other without clicking it you can click on its reference value.
  const ref = useRef(null);
  const refclose=useRef(null);
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        hidden={true}
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-name fs-5" id="exampleModalLabel">
                Modal name
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h1>Add a Note</h1>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ename"
                  name="ename"
                  placeholder="name@example.com"
                  onChange={onchange}
                  value={note.ename} minLength={5} required

                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="elocation"
                  name="elocation"
                  placeholder="name@example.com"
                  onChange={onchange}
                  value={note.elocation} minLength={5} required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Write Notes
                </label>
                <textarea
                  className="form-control"
                  id="elist"
                  name="elist"
                  rows="3"
                  onChange={onchange}
                  value={note.elist} minLength={5} required
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refclose}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary"onClick={handleclick}disabled={note.ename.length<5||note.elist.length<5}>
                updatenotes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row ">
        <h1 className="text-[30px] my-4 font-bold">{props.text}</h1>
        {notes.length===0&&'No notes to display'}
        {notes.map((notes) => {
          return (
            <Noteitem key={notes._id} updatenotes={updatenotes} notes={notes} showalert={props.showalert}/>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
