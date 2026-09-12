import { FaGraduationCap } from "react-icons/fa"
import { Link } from "react-router-dom"
import { userArray } from "../App"
import {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom"


function Login() {

    const { userDetail, setUsername } = useContext(userArray)
    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const navigate = useNavigate()


    function handleUsername(event) {
        setUsernameValue(event.target.value)
    }

    function handlePassword(event) {
        setPasswordValue(event.target.value)
    }

    function handleLogin() {

        var userFound = false

        userDetail.forEach(function (item) 
        {
            if(item.username === usernameValue && item.password === passwordValue){
                setUsername(usernameValue)
                alert("Login Successful")
                userFound = true
                navigate('/home')
            }
        })

        if(userFound===false){
            alert("Login failed, Please try again")
            setUsernameValue('')
            setPasswordValue('')
        }
    }


    return (
        <div className="h-[calc(100dvh-80px)] bg-gray-200 flex justify-center items-center text-centre">
            <div className=" text-center bg-white p-6 border rounded-lg shadow-lg flex flex-col items-center gap-2 md:w-96">
                <FaGraduationCap className="text-5xl text-blue-700 " />
                <h1 className="text-xl font-bold md:text-2xl">Favourite Student</h1>
                <p>Login to Continue</p>
                <div className="flex flex-col py-1">
                    <input value={usernameValue} onChange={handleUsername} type="text" placeholder="Username" className="border border-gray-300 rounded-md py-1 px-2 w-52 outline-1 outline-gray-300 md:w-56" /><br />
                    <input value={passwordValue} onChange={handlePassword} type="password" placeholder="Password" className="border border-gray-300 rounded-md py-1 px-2 w-52 outline-1 outline-gray-300 md:w-56" />
                </div>
                <button onClick={handleLogin} className="bg-blue-950 p-1 r   ounded-md text-white w-52 md:w-56">Login</button>
                <p>If haven't account? <Link to={'/signup'} className="underline text-blue-700">Signup</Link></p>
            </div>
        </div>
    )
}

export default Login