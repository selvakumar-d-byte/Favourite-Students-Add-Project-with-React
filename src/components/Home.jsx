import { useContext } from "react";
import { userArray } from "../App";
import { FaUserPlus, FaList, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
    const { username } = useContext(userArray)

    var navigate = useNavigate()

    function handleAddStudent() {
        navigate('/addstudent')
    }

    function handleStudentsList() {
        navigate('/studentslist')
    }

    function handlefavourite() {
        navigate('/favourite')
    }

    return (
        <div className="p-5 md:p-10 flex justify-center">
            <div className=" w-full max-w-5xl bg-white rounded-xl shadow-lg p-5 md:p-10 flex flex-col items-center gap-5">
                <div className="text-3xl pt-12 flex gap-2">
                    <p>Hello,</p> 
                    <p className="font-bold">{username}</p>
                </div>

                <div className="flex gap-5 flex-wrap items-center justify-center">
                    <div className="w-full sm:w-72 flex flex-col gap-1 items-center  border border-blue-600 rounded-md bg-blue-100 p-5">
                        <FaUserPlus className="text-3xl text-blue-600" />
                        <h1 className="text-2xl font-bold">Add Student</h1>
                        <p>Add a new student</p>
                        <button onClick={handleAddStudent} className=" mt-5 bg-blue-600 text-white py-1 px-2 rounded-md">Add Student</button>
                    </div>

                    <div className="w-full sm:w-72 flex flex-col gap-1 items-center  border border-green-600 rounded-md bg-green-100 p-5 ">
                        <FaList className="text-3xl text-green-600" />
                        <h1 className="text-2xl font-bold">Students List</h1>
                        <p>View all students List</p>
                        <button onClick={handleStudentsList} className=" mt-5 bg-green-600 text-white py-1 px-2 rounded-md">Students List</button>
                    </div>

                    <div className="w-full sm:w-72 flex flex-col gap-1 items-center  border border-purple-600 rounded-md bg-purple-100 p-5">
                        <FaHeart className="text-3xl text-purple-600" />
                        <h1 className="text-2xl font-bold">Favourite Students</h1>
                        <p>View all favourite students</p>
                        <button onClick={handlefavourite} className=" mt-5 bg-purple-600 text-white py-1 px-2 rounded-md">Favourite Students</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home