import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    let navigate = useNavigate()

    const loginkey = async()=>{
            let endpoint = 'http://localhost:5200/login'
        let userdetails ={email, password}
        
        let response = await axios.post(endpoint, userdetails)

        console.log(response.data);
        if(response.data.status){
            navigate('/home')
        }else{
            console.log(response.data);
            
        }

        

    }
  return (
    <div>
        <input type="text" placeholder='email' onChange={(e)=>setemail(e.target.value)} />
         <input type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)} />

         <button onClick={loginkey}>Login</button>
    </div>
  )
}

export default Login