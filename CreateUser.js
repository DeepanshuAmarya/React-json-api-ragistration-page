import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {

  let Navigate=useNavigate()
  let[name,setname]=useState()
  let[email,setemail]=useState()
  let[age,setage]=useState()
  let[city,setcity]=useState()
  let submitdata=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3000/users",{
      name,email,age,city
    }).then((res)=>{})
    Navigate('/read')
  }
  return (
    <>
    <div className="container-fluid">
        <div className="row mx-auto col-6 p-4 shadow-lg mt-4">
        <form onSubmit={submitdata}>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={(e)=>{setname(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" name="email" placeholder="Enter Email" onChange={(e)=>{setemail(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Age</label>
  <input type="number" className="form-control" name="age" placeholder="Enter Age" onChange={(e)=>{setage(e.target.value)}}/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">City</label>
  <input type="text" className="form-control" name="city" placeholder="Enter City" onChange={(e)=>{setcity(e.target.value)}}/>
</div>
<div className="mb-3">
  <input type="submit" className="form-control bg-danger"/>
</div>
        </form>
        </div>
    </div>
    </>
  )
}

export default CreateUser