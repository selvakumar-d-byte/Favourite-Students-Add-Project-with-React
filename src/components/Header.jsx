import { FaGraduationCap } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userArray } from "../App";


function Header() {

    const { username } = useContext(userArray)

    const location = useLocation()
    const navigate = useNavigate()

    function handleButton() {
        if (location.pathname === '/') {
            navigate("/signup")
        }

        else {
            navigate('/')
        }
    }

    return (
        <div className="h-20     flex justify-between bg-[#152E50] text-white items-center p-2 md:py-5 md:px-8">
            <div className=" flex gap-2 items-center">
                <FaGraduationCap className="text-2xl md:text-4xl text-[#91CEF3]" />
                <h1 className="text-xs sm:text-xl md:text-3xl l">Favourite Student Portal</h1>
            </div>

            <div>
                {
                    (location.pathname==='/') && (
                        <button onClick={handleButton} className="bg-white text-blue-950 px-5 py-2 rounded-lg">Signup</button>
                    )
                }

                {
                    (location.pathname==='/signup') && (
                        <button onClick={handleButton} className="bg-white text-blue-950 px-5 py-2 rounded-lg">Login</button>
                    )
                }

                {
                    (location.pathname === "/home" ||
                        location.pathname === "/addstudent" ||
                        location.pathname === "/studentslist" ||
                        location.pathname === "/favourite") && (
                        <div className="flex items-center gap-2">
                            <FaUser className="text-white text-base md:text-xl" />
                            <p className="text-sm md:text-base">Hello, {username}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header