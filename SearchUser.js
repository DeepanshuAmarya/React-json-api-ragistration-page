import React,{useState} from 'react'
import axios from 'axios'

function SearchUser() {
  let[val,setval]=useState()
  let[sdata,setsdata]=useState()
  let searchdata=(key)=>{
    axios.get("http://localhost:3000/users?name="+key).then((res)=>{
      // console.log(res.data);
      setsdata(res.data)
    })
  }
  return (
    <>
    <div className="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search Name"  aria-describedby="basic-addon2" onChange={(e)=>{setval(e.target.value)}}/>
  <button className="btn btn-danger" onClick={()=>searchdata(val)}>Search</button>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Age</th>
      <th scope="col">City</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {sdata?<tbody>
    {sdata.map((item)=>{
      return(
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.age}</td>
          <td>{item.city}</td>
        </tr>
      )
    })}
  </tbody>:<p>No Data</p>}
</table>
   
    </>
  )
}

export default SearchUser