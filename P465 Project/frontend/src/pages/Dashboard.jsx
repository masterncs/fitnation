import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import React from 'react'
import "../Dashboard.css";
import calenderImg from './calender.jpeg';
import myWorkoutsImg from './myWorkouts.png';


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
      <h1>Client Dashboard</h1>
    
    <div className = "parent">
      <Link to = '/calendar'>
        <img className = "left"
          src = {calenderImg}
          alt = "calendar" />
        </Link> 

      <Link to = '/myWorkout'>
        <img className = "right"
          src = {myWorkoutsImg}
          alt = "myWorkout"/>
        </Link>

    </div>
    </div>

      

  );
}

export default Dashboard

