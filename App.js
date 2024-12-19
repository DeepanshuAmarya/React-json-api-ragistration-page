import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReadUser from './component/ReadUser'
import SearchUser from './component/SearchUser'
import CreateUser from './component/CreateUser'
import UpdateUser from './component/UpdateUser'
import DeleteUser from './component/DeleteUser'
import Menu from './component/Menu'
import Home from './component/Home'
function App() {
  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/read" element={<ReadUser/>}/>
    <Route path="/search" element={<SearchUser/>}/>
    <Route path="/create" element={<CreateUser/>}/>
    <Route path="/update/:id" element={<UpdateUser/>}/>
    <Route path="/delete" element={<DeleteUser/>}/>
    </Routes>
    </BrowserRouter></>
  )
}

export default App