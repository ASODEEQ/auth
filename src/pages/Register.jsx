import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setname] = useState('')
      const [email, setemail] = useState('')
      const [phonenumber, setphonenumber] = useState('')
      const [password, setpassword] = useState('')

      let navigate = useNavigate()

      const submit = async()=>{
        let endpoint = 'http://localhost:5200/register'
        let registerDetails ={name, email, phonenumber, password}

            let response = await axios.post(endpoint, registerDetails )

            console.log(response.data);
            
              if(response.data.status){

                navigate('/login')
              }else{
                console.log(response.data);
                
              }
            

        

      }

  return (
    <div className='registerDiv'>
       <input type="text" placeholder='name'  onChange={(e)=>setname(e.target.value)} /> 
       <input type="text" placeholder='email'  onChange={(e)=>setemail(e.target.value)} /> 
       <input type="text" placeholder='phonenumber'  onChange={(e)=>setphonenumber(e.target.value)} /> 
       <input type="text" placeholder='password'  onChange={(e)=>setpassword(e.target.value)} /> 

       <button onClick={submit}>submit</button>
    </div>
  )
}

export default Register