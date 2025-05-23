/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'
import axios from 'axios'
import { toast } from 'react-toastify'
import { data } from 'react-router-dom'
const Login = () => {
    const [state, setState] = useState('Login')
    const {setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try{
            if(state === 'Login'){
              const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
              
              if(data.success){
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token', data.token);
                setShowLogin(false)
              } else{
                toast.error(data.message) 
              }
            } else {
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})
              
              if(data.success){
                setToken(data.token)
                setUser(data.user)
                localStorage.setItem('token', data.token);
                setShowLogin(false)
              } else{
                toast.error(data.message) 
              }
            }
        } catch (error){
            toast.error(error.message)    
        }
        
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden';
        return () => {
             document.body.style.overflow = 'unset'
        }
    })
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        
        <motion.form onSubmit={onSubmitHandler}
        initial={{opacity:0.2, y:50}}
        transition={{duration:.3}}
        whileInView={{opacity:1, y:0}}
        viewport={{once: true}}
        className='relative bg-black p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-white font-medium'>{state}</h1>
            <p className='text-sm text-neutral-400'>Welcome Back please sign in to continue</p>

           { state != 'Login' && <div className='border px-6 py-2 flex items-center gap-2 rounded-xl mt-5 bg'>
                <img width={25} src={assets.profile_icon} alt="" />
                <input onChange={e=> setName(e.target.value)} value= {name} type="text" required placeholder='Full Name' className='outline-none text-sm bg-transparent'/>
            </div>}

            <div onChange={e=>setEmail(e.target.value)} value= {email} className='border px-6 py-2 flex items-center gap-2 rounded-xl mt-4'>
                <img width={20} src={assets.email_icon} alt="" />
                <input type="email" required placeholder='Email Id' className='outline-none text-sm bg-transparent'/>
            </div>

            <div onChange={e=>setPassword(e.target.value)} value= {password} className='border px-6 py-2 flex items-center gap-2 rounded-xl mt-4'>
                <img width={15} src={assets.lock_icon} alt="" />
                <input type="password" required placeholder='Password' className='outline-none text-sm bg-transparent'/>
            </div>

            <p className='text-sm text-orange-300 my-4 cursor-pointer'>Forgot password?</p>

            <button className='bg-orange-400 w-full text-white py-2 rounded-full'>
                {state !== 'Login' ? 'create account' : 'login'}
            </button>

            {state === 'Login' ?<p className='mt-5 text-center'>Don't have an account? <span className='text-orange-300 cursor-pointer' onClick={()=>{setState('Sign up')}}>SignUp</span></p>
             :
            <p className='mt-5 text-center'>Already have an account? <span className='text-orange-300 cursor-pointer'onClick={()=>{setState('Login')}}>Login</span></p>}
            <img onClick={() => {setShowLogin(false)}} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer '/>
        </motion.form>
    </div>
  )
}

export default Login