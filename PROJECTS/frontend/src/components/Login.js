import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './css/Login.css'

const Login = () => {
  // const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [pass,setPass]= useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
})
  
  const userdata = async ()=>{
    console.log(email,pass);
    let result = await fetch('http://localhost:5000/login',{
      method:'post',
      body:JSON.stringify({email,pass}),
      headers:{'Content-Type':'application/json'}
    });
    // result = await result.json();
    result = await result.json();
    console.log(result)
    localStorage.setItem("user",JSON.stringify(result));
    if(result){
      navigate("/")
    }
  }
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-2 col-xs-12 col-sm-12'>
            </div>

            <div className='col-lg-6 col-md-8 col-xs-12 col-sm-12'>
              <div className='login-content text-center input-color-box '>
                <h1>Login</h1>
                <div className='user-input'>
                  <input type='email' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}value={email}></input>

                  <input type='password' placeholder='Password'
                    onChange={(e) => setPass(e.target.value)} value={pass}></input>

                  <button className='btn mt-3' type='submit' onClick={userdata}>Login</button>
                  <p id='alert' className='text-green fw-bold d-none p-2'>Thank you Submiting the Form</p>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-2 col-xs-12 col-sm-12'>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
