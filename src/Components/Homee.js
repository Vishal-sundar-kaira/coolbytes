import React,{useContext} from 'react'
import Navbar from './Navbar'
import notescontext from "../Components/context/notes/notecontext";
import Notes from "./Notes"
const Homee = (props) => {
  const context = useContext(notescontext);
  // const { notes, getnotes} = context;
return (
  <div>
    <Navbar/>
    <Notes text={"Select Wedding/Events From where you can Take and Donate Food"} stat="all"/>
  </div>
)
}

export default Homee
