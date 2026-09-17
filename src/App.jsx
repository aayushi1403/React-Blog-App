import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login,logout } from './store/authSlice';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import {Outlet}  from 'react-router-dom';

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  const [Loading,setLoading]=useState(true);
  const dispatch=useDispatch();
   useEffect(()=>{
    authservice.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
   },[])

  return !Loading?(
    <div className='min-h-screen flex flex-wrap content-bewteen bg-gray-400'>
     <div className='w-full block tx'>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
     </div>
    </div>
  ):null
}

export default App
