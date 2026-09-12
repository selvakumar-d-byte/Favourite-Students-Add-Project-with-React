import { useContext } from "react"
import { studentsArray } from "../App"
import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa";
import { FaRegHeart } from 'react-icons/fa';
import { FaList } from "react-icons/fa";
import { favouriteArray } from "../App";


function StudentsList() {
    const { studentsDetail } = useContext(studentsArray)
    const { favouriteStudents, setFavouriteStudents } = useContext(favouriteArray)
    const navigate = useNavigate()

    function handleBack() {
        navigate('/home')
    }

    function handleFavourite(student) {
        setFavouriteStudents([...favouriteStudents, student])

        
    }

    return (

        <div className="bg-gray-200 px-5 py-10 flex justify-center">
            <div className="p-5 sm:p-10 w-full max-w-lg h-fit bg-white rounded-xl shadow-lg md:p-10 flex flex-col items-center ">
                <div className="flex justify-between items-center pb-2 w-full flex-col md:flex-row">
                    <h1 className="text-xl font-bold flex items-center gap-2"><FaList /> List of Students</h1>
                    <p>Total Students : {studentsDetail.length}</p>
                </div>
                <div className="py-3 w-full">
                    {studentsDetail.length === 0 ? (<p>No Students added yet now</p>) :

                        (studentsDetail.map(function (student, index) {
                            return (
                                <div className="flex justify-between items-center px-0 py-3  border-t-2 border-gray-300 w-full gap-2-2 text-xs md:text-base">
                                    <p>{index + 1}. {student}</p>
                                    <button disabled={favouriteStudents.includes(student)} onClick={() => handleFavourite(student)} className={`bg-blue-500 text-white px-2 py-1 rounded-md flex items-center gap-2 ${favouriteStudents.includes(student) ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}><FaRegHeart />Add to Favourite</button>
                                </div>)
                        }))
                    }
                </div>

                <button onClick={handleBack} className="flex items-center text-blue-500 gap-2"><FaArrowLeft /> Back</button>
            </div>
        </div>
    )
}

export default StudentsList