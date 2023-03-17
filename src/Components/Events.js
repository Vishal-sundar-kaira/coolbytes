import React from 'react'
import Addnotes from './Addnotes'
import Navbar from './Navbar'
import Notes from './Notes'

const Events = (props) => {
  const {showalert}=props
  return (
    <div>
          <Navbar/>
    <div className="container">
      <Addnotes  showalert={showalert}/>
      <Notes text="This is your personal dashboard" stat="personal"/>
    </div>
    </div>
  )
}

export default Events
