import { useContext } from "react"
import { favouriteArray } from "../App"
import { useNavigate } from "react-router-dom"
import { FaRegHeart, FaArrowLeft, FaTrash } from "react-icons/fa"

function Favourite() {

    const { favouriteStudents, setFavouriteStudents } = useContext(favouriteArray)
    const navigate = useNavigate()

    function handleBack() {
        navigate('/home')
    }

    function handleDelete(student) {
        setFavouriteStudents(favouriteStudents.filter(function (item) {
            return item !== student
        }))
    }

    return (

        <div className="bg-gray-200 px-5 py-10 flex justify-center">
            <div className="p-5 sm:p-10 w-full max-w-lg h-fit bg-white rounded-xl shadow-lg md:p-10 flex flex-col items-center ">
                <div className="flex justify-between items-center pb-2 w-full flex-col md:flex-row">
                    <h1 className="text-lg font-bold flex items-center gap-2"><FaRegHeart /> Favourite Students</h1>
                    <p>Total Students : {favouriteStudents.length}</p>
                </div>

                <div className="w-full py-3">
                    {favouriteStudents.length === 0 ? <p>No favourite students added yet</p> :
                        favouriteStudents.map(function (student, index) {
                            return (
                                <div key={index} className="flex justify-between items-center px-0 py-3 border-t-2 border-gray-300 w-full gap-2 text-xs md:text-base">
                                    <p>{index + 1}. {student}</p>
                                    <button onClick={() => handleDelete(student)} className="bg-red-500 text-white px-2 py-1 rounded-md flex items-center gap-2">
                                        <FaTrash />Delete
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={handleBack} className="flex items-center text-blue-500 gap-2"><FaArrowLeft /> Back</button>
            </div>
        </div>
    )
}

export default Favourite