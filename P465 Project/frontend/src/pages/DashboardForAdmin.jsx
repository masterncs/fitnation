import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import React from 'react'
import "../Dashboard.css";

function Dashboard() {

  const navigate = useNavigate()
  const {user} = useSelector((state) =>
   state.auth)


  
  useEffect(() => {

    if(!user){
      navigate('/login')
    }

  }, [user,navigate])

  return (
    <div className = "main">
      <h1>Admin Team Dashboard</h1>

    </div>

    

    
  );
}

export default Dashboard

