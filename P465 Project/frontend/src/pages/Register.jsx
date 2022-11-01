import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'



function Register() {

    const[role, setRole] = useState()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const {name, email, username, password, password2} = formData 
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError){
            toast.error(message)
        }

        //if state is fufilled or user is already logged in.
        if(isSuccess || user){
            if (role === 'Client') {
                navigate('/dashboard')
            }
            else if (role === 'Admin') {
                navigate('/dashboardForAdmin')
            }
            else if (role === 'Trainer') {
                navigate('/dashboardForTrainer')
            }


        }

        dispatch(reset())

    }, [user,isError,isSuccess,message,navigate,dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error('Passwords do not match.')
        }
        else{
            const userData = {
                name,
                role,
                email,
                username,
                password,
            }
            dispatch(register(userData)) //dispatching the register function and passing in the user

        }
    }

  if(isLoading){
    return <Spinner />
  }

  return ( <>
   <section className = "heading">
     <h1>
        <FaUser/> Register
     </h1>
     <p> Please Create an Account</p>
    </section>

    
    <section className = "form">
        <form onSubmit = {onSubmit} >

            <div className = "form-group">
            <select id = "role" value = {role} onChange={(e) => setRole(e.target.value)}>
            <option value = "Choose your role"> Choose your role</option>
            <option value = "Client"> Client</option>
            <option value = "Trainer"> Fitness Professional</option>
            <option value = "Admin"> Admin Team</option>
            </select>
            </div>

            <div className="form-group">
            <input type="text" 
            className="form-control" 
            id = "name"
            name = 'name' 
            value = {name} 
            placeholder = 'Enter Your Name'
            onChange = {onChange} 
            />
            </div>


            {/* <div className="form-group">
            <input type="text" 
            className="form-control" 
            id = "role"
            name = 'role' 
            value = {role} 
            placeholder = 'Enter Your Role'
            onChange = {onChange} 
            />
            </div> */}


            <div className="form-group">
            <input type="email" 
            className="form-control" 
            id = "email"
            name = 'email' 
            value = {email} 
            placeholder = 'Enter Your Email'
            onChange = {onChange} 
            />

            </div>  
            <div className="form-group">
            <input type="text" 
            className="form-control" 
            id = "username"
            name = 'username' 
            value = {username} 
            placeholder = 'Enter Your Username'
            onChange = {onChange} 
            />
            </div> 

            <div className="form-group">
            <input type="password" 
            className="form-control" 
            id = "password"
            name = 'password' 
            value = {password} 
            placeholder = 'Enter Your Password'
            onChange = {onChange} 
            />
            </div> 

            <div className="form-group">
            <input type="password" 
            className="form-control" 
            id = "password2"
            name = 'password2' 
            value = {password2} 
            placeholder = 'Confirm Your Password'
            onChange = {onChange} 
            />
            </div>

            
            <div className="form-group">
                <button type = "submit" className = 'btn btn-block'> 
                Submit
                </button>
            </div>
        </form>
    </section>
   
    </>
  )
}

export default Register