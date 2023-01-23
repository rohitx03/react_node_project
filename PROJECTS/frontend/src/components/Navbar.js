import React from 'react'
import './css/Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const auth = localStorage.getItem('user');
    const logout = () => {
        localStorage.clear();
        navigate('/sign')

    }
    return (
        <>
            <header className='header-color'>
                <div class="container">

                    <nav class="navbar navbar-expand-lg">
                        <NavLink className="navbar-brand text-decoration-none text-white fw-bold" to="/">LOGO</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {auth ?
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul class="navbar-nav m-auto mb-2">
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/">Home</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/addproduct">Add-Product</NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink class="nav-link" to="/list">Product-Lists</NavLink>
                                    </li>
                                </ul>

                                <div className='singup d-flex'>
                                <p className='header-login p-0 m-0 '><NavLink  onClick={logout} className='text-decoration-none text-white fw-bold' to='/sign'>Logout 
                                <span className='text-black px-2'>
                                ({JSON.parse(auth).name})</span>
                                </NavLink></p>

{/* 

                                    <p className='header-login p-0 m-0 '>{auth ? <NavLink onClick={logout} className='text-decoration-none text-white fw-bold' to='/sign'>Logout</NavLink>
                                        : <>
                                            <NavLink className='text-decoration-none text-white fw-bold' to='/sign'> Sign Up</NavLink>

                                            <NavLink class="nav-link text-decoration-none text-white fw-bold" to="/login" style={{ textDecoration: "none", color: "white", paddingLeft: "5px", fontWeight: "bold" }}>Login</NavLink></>}
                                    </p> */}

                                    {/* <p className='header-login p-0 m-0 '>{auth ?<NavLink  onClick={logout} className='text-decoration-none text-white fw-bold' to='/sign'>Logout</NavLink>:<NavLink className='text-decoration-none text-white fw-bold' to='/sign'> Sign Up</NavLink>}                                
                                
                                <NavLink class="nav-link text-decoration-none text-white fw-bold" to="/login" style={{textDecoration:"none",color:"white",paddingLeft:"5px",fontWeight:"bold"}}>Login</NavLink></p> */}

                                </div>
                            </div> :
                            <div className='singup d-flex second-box'>
                                <p className='header-login p-0 m-0 '>
                                        <NavLink className='text-decoration-none text-white fw-bold' to='/sign'> Sign Up</NavLink>

                                        <NavLink class="nav-link text-decoration-none text-white fw-bold" to="/login" style={{ textDecoration: "none", color: "white", paddingLeft: "5px", fontWeight: "bold" }}>Login</NavLink>
                                </p></div>
                        }
                    </nav>
                </div>

            </header>
        </>
    )
}

export default Navbar;