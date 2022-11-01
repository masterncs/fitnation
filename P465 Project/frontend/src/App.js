import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import DashboardForAdmin from './pages/DashboardForAdmin'
import DashboardForTrainer from './pages/DashboardForTrainer'
import Calendar from './pages/CalendarApp'
import Login from './pages/Login'
import Register from './pages/Register'
import MyWorkout from './pages/MyWorkout'
import Videos from './pages/Videos'



function App() {
  return (
    <>
    <BrowserRouter>
    <div className = 'container'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Login/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>} />
        <Route path = '/dashboardForAdmin' element = {<DashboardForAdmin/>}/>
        <Route path = '/dashboardForTrainer' element = {<DashboardForTrainer/>}/>
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/register' element = {<Register/>} />
        <Route path = '/calendar' element = {<Calendar/>} />
        <Route path = '/myWorkout' element = {<MyWorkout/>} />
        <Route path = '/Videos' element = {<Videos/>} />
      </Routes>
    </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );

}

export default App;
