import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const logout=()=>{
    if(navigate){
      navigate('/login')
     console.log('logout successfully');
     
    }else{
      console.log('error loging out');
      
    }

  }
  return (
    <div>
                
        <h1>yeaaa</h1>

        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home