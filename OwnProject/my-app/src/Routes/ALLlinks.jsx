import {Link} from "react-router-dom"
//import {Button} from "@chakra-ui/react"
//https://js-211-mockserver.herokuapp.com/api/products
//import PrivateRouting from "../Components/PrivateRouting"
import  BasicUsage from "../Components/SignUp"
const ALLlinks=()=>{
    return(
        <div  style={{display:"flex",justifyContent:"space-between" }}>
              <Link to="/" >
            <h1>Login</h1>
            </Link>
            <Link to="/home" >
             <h1>Home</h1>
            </Link>
            <Link to="/signUp">
            < BasicUsage/>
            </Link>
            <Link to="/admin">
            <h1>Admin</h1>
            </Link>
        </div>
    )
}
export default ALLlinks