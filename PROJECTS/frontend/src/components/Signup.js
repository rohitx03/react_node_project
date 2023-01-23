import React ,{useEffect, useState} from 'react';
import './css/Signup.css'
import {useNavigate } from 'react-router-dom';

const Signup=()=> {
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [pass,setPass]= useState('');
    const navigate = useNavigate();
    const data = {name,email,pass};

    const userdata= async ()=>{
        // console.log(data);
        let result = await fetch('http://localhost:5000/signin',{
            method:'post',
            body: JSON.stringify(data),
            headers:{'Content-Type':'application/json'},
        });
        result = await result.json();
        console.log(result)
        localStorage.setItem('user',JSON.stringify(result))
        if(result){
            navigate('/')
        }
        // console.log(result);
        if(result){
            navigate("/")
        }
        // let x = document.getElementById("alert");
        // x.style.display = "block";
    }
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })
  return (
    <>
    <section className='signup p-5'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-2 col-xs-12 col-sm-12'></div>
                <div className='col-lg-6 col-md-8 col-xs-12 col-sm-12'>
                    <div className='sign-content text-center input-color-box '>
                        <h1>Register</h1>
                        <div className='user-input'>
                            <input type='text' value={name} placeholder='Full Name..'
                             onChange={(e)=>setName(e.target.value)}></input>

                            <input type='email' placeholder='Email'
                            onChange={(e)=>setEmail(e.target.value)}></input>

                            <input type='password' placeholder='Password'
                            onChange={(e)=>setPass(e.target.value)}></input>

                            <button className='btn mt-3 ' type='submit' onClick={userdata}>Submit</button>
                            <p id='alert' className='text-green fw-bold d-none p-2'>Thank you Submiting the Form</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-2 col-xs-12 col-sm-12'></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Signup;
