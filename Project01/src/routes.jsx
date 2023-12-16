import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from './components/nav'
import MyUser from './pages/user'
import EditUser from './pages/user/edit'

const RoutesAPP = () => {

return (

<>

<BrowserRouter>

<MyNavbar/>

<Routes>

<Route path='/user' element={<MyUser/>}/> 
<Route path='/editUser' element={<EditUser/>}/> 

</Routes>


</BrowserRouter>


</>


)


}

export default RoutesAPP