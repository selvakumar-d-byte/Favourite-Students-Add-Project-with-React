import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { createContext, useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentsList from "./components/StudentsList";
import Favourite from "./components/Favourite";

const userArray = createContext()
const studentsArray = createContext()
const favouriteArray = createContext()

function App() {

  const [userDetail, setUserDetail] = useState([
    {
      username: 'selva',
      password: '123'
    }
  ])

  const [username, setUsername] = useState("")

  const [studentsDetail, setStudentsDetail] = useState([])

  const [favouriteStudents, setFavouriteStudents] = useState([])

  return (
    <div>
      <userArray.Provider value={{ userDetail, setUserDetail, username, setUsername }}>
        <studentsArray.Provider value={{ studentsDetail, setStudentsDetail }}>
          <favouriteArray.Provider value={{favouriteStudents, setFavouriteStudents}}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />}></Route>
                <Route path='/addstudent' element={<AddStudent />}></Route>
                <Route path='/studentslist' element={<StudentsList />}></Route>
                <Route path='/favourite' element={<Favourite />}></Route>
              </Routes>
            </BrowserRouter>
          </favouriteArray.Provider>
        </studentsArray.Provider>
      </userArray.Provider>
    </div>
  );
}

export default App;
export { userArray }
export { studentsArray }
export {favouriteArray}