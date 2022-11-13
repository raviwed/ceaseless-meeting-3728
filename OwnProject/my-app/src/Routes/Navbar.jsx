import {Routes,Route} from "react-router-dom"
import Home from "../Components/Home"
import Login from "../Components/Login"
import AdminPage from "../Admin/AdminPage"
import Unknow from "../Components/UnKnow"
//import PrivateRouting from "../Components/PrivateRouting"

const Navbar=()=>{
    return(
        <div>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<Unknow/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
          </Routes>
        </div>
    )
}
export default Navbar