import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function UpdateUser() {
  let navigate=useNavigate()
  let {id}=useParams()
  let[name,setname]=useState()
  let[email,setemail]=useState()
  let[age,setage]=useState()
  let[city,setcity]=useState()
  useEffect(()=>{
axios.get("http://localhost:3000/users/"+id).then((res)=>{
  setname(res.data.name);
  setemail(res.data.email);
  setage(res.data.age);
  setcity(res.data.city);
})
  },[id])

  let updatedata=(e)=>{
    e.preventDefault()
axios.put("http://localhost:3000/users/"+id,{
  name,email,age,city
}).then((res)=>{
navigate("/read")
})
  }
  return (
    <>
    <div className="container-fluid">
        <div className="row mx-auto col-6 p-4 shadow-lg mt-4">
        <form onSubmit={updatedata}>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" name="name" placeholder="Enter Name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" name="email" placeholder="Enter Email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Age</label>
  <input type="number" className="form-control" name="age" placeholder="Enter Age" value={age} onChange={(e)=>{setage(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">City</label>
  <input type="text" className="form-control" name="city" placeholder="Enter City" value={city} onChange={(e)=>{setcity(e.target.value)}}/>
</div>
<div className="mb-3">
  <input type="submit" className="form-control bg-danger" value="update"/>
</div>
        </form>
        </div>
    </div>

    </>
  )
}

export default UpdateUser