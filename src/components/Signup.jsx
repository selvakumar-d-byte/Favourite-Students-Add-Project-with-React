import { FaGraduationCap } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userArray } from "../App"

function Signup() {

    const navigate = useNavigate()

    const { userDetail, setUserDetail } = useContext(userArray)
    const [usernameValue, setUsernameValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("")

    function handleUsername(event) {
        setUsernameValue(event.target.value)
    }

    function handlePassword(event) {
        setPasswordValue(event.target.value)
    }

    function handleConfirmPassword(event) {
        setConfirmPasswordValue(event.target.value)
    }

    function addUser() {

        if (usernameValue === "" || passwordValue === "" || confirmPasswordValue === "") {
            alert("Please fill all the fields")
            return
        }

        if (passwordValue === confirmPasswordValue) {
            const newUser = {
                username: usernameValue,
                password: passwordValue
            }

            setUserDetail([...userDetail, newUser])
            alert("Account created successfully")
            navigate('/')

            setUsernameValue('')
            setPasswordValue('')
            setConfirmPasswordValue('')
        }
        else {
            alert("Password and Confirm Password are not same")
        }
    }

    return (
        <div className="h-[calc(100dvh-80px)] bg-gray-200 flex justify-center items-center text-centre">
            <div className=" text-center bg-white p-6 border rounded-lg shadow-lg flex flex-col items-center gap-2 md:w-96">
                <FaGraduationCap className="text-5xl text-blue-700 self-centre " />
                <h1 className="text-xl font-bold md:text-2xl">Favourite Student</h1>
                <p>Create Account</p>
                <div className="flex flex-col py-1 gap-4">
                    <input onChange={handleUsername} value={usernameValue} type="text" placeholder="Username" className="border border-gray-300 rounded-md py-1 px-2 w-52 outline-1 outline-gray-300 md:w-56" />
                    <input onChange={handlePassword} value={passwordValue} type="password" placeholder="Password" className="border border-gray-300 rounded-md py-1 px-2 w-52 outline-1 outline-gray-300 md:w-56" />
                    <input onChange={handleConfirmPassword} value={confirmPasswordValue} type="password" placeholder="Confirm Password" className="border border-gray-300 rounded-md py-1 px-2 w-52 outline-1 outline-gray-300 md:w-56" />
                </div>
                <button onClick={addUser} className="bg-blue-950 p-1 rounded-md text-white w-52 md:w-56">Signup</button>
                <p>If you have account? <Link to={'/'} className="underline text-blue-700">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup