import React, { useState,useEffect,useContext } from "react";
import productcontext from "../Components/context/notes/productcontext"
import Productitem from "./Productitem";
const Retailer = (props) => {
  const {showalert}=props
  const context=useContext(productcontext)
  const {addlist}=context;
  const [notes,setNotes]=useState("")
  const [sortedJson, setSortedJson] = useState([]);
  const[list,setlist]=useState("")
  const handleclick=(e)=>{
    e.preventDefault()
    addlist(list.product,list.Date,list.price);
    setlist({product:"",Date:"",price:""});
    console.log("added")
    showalert("Added product succesfully","success")
  }
  const onchange=(e)=>{
    setlist({...list,[e.target.name]:e.target.value})
  }
  var start=false;
  useEffect(() => {
    async function fetchData() {
      console.log("fetching...")
      const res = await fetch('http://localhost:5000/data');
      const json = await res.json();
      var data=JSON.parse(json)
      setNotes(data)
      start=true
      console.log(notes)
      setSortedJson(
        Object.entries(notes.diff)
        .sort((a, b) => a[1] - b[1]))
      console.log(sortedJson)
    }
    fetchData();
  });

  return (
    <>
    {/* <div>
      <h1 className='my-3'>Register For donating food</h1>
      <div className="mb-3 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          product
        </label>
        <input
          type="text"
          className="form-control"
          id="product"
          name='product'
          onChange={onchange} minLength={5} required value={list.product}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Expiry Date
        </label>
        <input
          type="text"
          className="form-control"
          id="location"
          name='location'
          onChange={onchange} minLength={5} required value={list.Date}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control"
          id="number"
          name='number'
          onChange={onchange} minLength={10} required value={list.price}
        />
      </div>
      <button className="btn btn-outline-success" type="submit" onClick={handleclick}>Add</button>
    </div>
    {list.map((list) => {
          return (
            <Productitem key={list._id} list={list} showalert={props.showalert}/>
          );
        })} */}

    {/* {notes==""?console.log("done"):
    <div>{notes.ngo[0]}
    <div>{notes.ngo[1]}</div>
    <div>{notes.ngo[2]}</div></div>} */}
    
    {notes===""?console.log("done"):
    <div>
       <table>
        <thead>
            <tr>
              <th>Product</th>
              <th>days remain</th>
          </tr>
        </thead>
        <tbody>
          <div className="m-[5opx]">
          {sortedJson.map(([key, value]) => (
  <tr key={key}>
    <td>{notes.product[key]}</td>
    <td>{value}</td>
  </tr>
))}
          </div>


        </tbody>
      </table>
    </div>
    }
    </>
  );
};

export default Retailer;
