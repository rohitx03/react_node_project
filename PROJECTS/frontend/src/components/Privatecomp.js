import React from 'react'
import {Navigate,Outlet} from 'react-router-dom'

const Privatecomp=()=> {
    const auth = localStorage.getItem('user');
  return auth ? <Outlet/> : <Navigate to='/sign'></Navigate>
}

export default Privatecomp;
