import React from 'react'

const Productitem = (props) => {
    const { list } = props;
  return (
    <div>
      <div className="col-md-3" >
      <div className="card my-3">
        <div className="card-body border border-success rounded ">
            <div className="d-flex align-items-center">
            <h5 className="card-title me-4 blockquote">{list.product}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{list.Date}</h6>
            {/* <i className="fa-solid fa-trash-can mx-2"onClick={()=>{
              deletenote(list._id);showalert("deleted succesfully","success")
            }}></i> */}
            </div>
            <h6 class="card-subtitle mb-2 text-muted">{list.price}</h6>
          {/* <p className="card-text">{notes.list}</p>
          <button  className={`btn btn-outline-success my-2  d-${on}` }type="submit" onClick={handleclick}>Book</button>
          <h1>hii</h1> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Productitem
