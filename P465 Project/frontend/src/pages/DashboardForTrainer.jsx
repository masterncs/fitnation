import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import React from 'react'
import "../Dashboard.css";
import click from './click.jpg';
import {Link} from 'react-router-dom';
import calenderImg from './calender.jpeg';




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
      <h1>Professional Dashboard</h1>

    <div className = "main">
      <h1>Post A Video Or Check Calendar:</h1>
    
    <div className = "parent">
      <Link to = '/Videos'>
        <img className = "right"
          src = {click}
          alt = "myWorkout"/>
        </Link>

        <Link to = '/calendar'>
        <img className = "left"
          src = {calenderImg}
          alt = "calendar" />
        </Link> 

    </div>
    </div>
    </div>

      

  );
}

export default Dashboard

