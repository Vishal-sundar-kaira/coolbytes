import React,{useContext, useState} from 'react'
import Notes from './Notes'
import notescontext from "../Components/context/notes/notecontext"
const Addnotes = (props) => {
  const {showalert}=props
  const context=useContext(notescontext)
  const {addnote}=context;
  const[note,setNote]=useState({name:"",list:"",location:"",number:""})
  const[op,setop]=useState("0")
  const handleclick=(e)=>{
    e.preventDefault()
    addnote(note.name,note.list,note.location,note.number);//here we are adding note whose state is changed using onchange.
    setNote({name:"",list:"",location:"",number:""})
    props.showalert("Added note succesfully","success")
    setop("100")
    setTimeout(() => {
      setop("0")
    }, 2000);
  }
  const onchange=(e)=>{
    setNote({...note,[e.target.name]:e.target.value})//...note says that keep previous all note and add in it after comma wala
  }
  return (
    <div>
      <h1 className='my-3'>Register For donating food</h1>
      <div className="mb-3 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name='name'
          onChange={onchange} minLength={5} required value={note.name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          location
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          name='location'
          onChange={onchange} minLength={5} required value={note.location}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Number
        </label>
        <input
          type="text"
          className="form-control"
          id="number"
          name='number'
          onChange={onchange} minLength={10} required value={note.number}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          List of foods
        </label>
        <textarea
          className="form-control"
          id="list"
          name='list'
          rows="3"
          onChange={onchange} minLength={5} required value={note.list}
        ></textarea>
      </div>
      <button disabled={note.name.length<5||note.list.length<5} className="btn btn-outline-success" type="submit" onClick={handleclick}>Add</button>
      <div className={`h-16 text-center pt-2 text-[30px] my-10 rounded-2xl bg-green-400 opacity-${op}`}>
        <h1> Thank you For Helping us to stop food waste and donate them to the one who need it</h1>
      </div>
      <div className={`h-16 text-center pt-2 text-[30px] my-10 rounded-2xl bg-green-400 opacity-${op}`}>
        <h1> Our Volunteers will call you back for taking food</h1>
      </div>
    </div>
  )
}

export default Addnotes
