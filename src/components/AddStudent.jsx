import { useContext, useState } from "react"
import { FaArrowLeft } from "react-icons/fa";
import { studentsArray } from "../App";
import { FaPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function AddStudent() {

    const navigate = useNavigate()
    const [studentName, setStudentName] = useState()
    const { studentsDetail, setStudentsDetail } = useContext(studentsArray)

    function handleStudentName(event) {
        setStudentName(event.target.value)
    }

    function handleAddStudent() {
        if (studentName.trim() === '') {
            alert("Please enter name")
            return
        }
        alert("Student name Added")

        setStudentsDetail([...studentsDetail, studentName])
        setStudentName('')
    }

    function handleBack() {
        navigate('/home')
    }

    return (
        <div className="bg-gray-200 px-5 py-10 flex justify-center">
            <div className="p-5 sm:p-10 w-full max-w-md h-fit bg-white rounded-xl shadow-lg md:p-10 flex flex-col items-center gap-5">
                <FaPlus className="bg-blue-500 text-white w-10 h-10 rounded-full" />
                <h1 className="text-2xl font-bold">Add New Student</h1>
                <input value={studentName} onChange={handleStudentName} type="text" placeholder="Student Name" className="w-full border border-gray-400 px-2 py-1 rounded-md outline-gray-400" />
                <button onClick={handleAddStudent} className="bg-blue-500 text-white py-1 px-2 rounded-md">Add Student</button>

                <button onClick={handleBack} className="flex items-center text-blue-500 "><FaArrowLeft /> Back</button>
            </div>
        </div>
    )
}

export default AddStudent