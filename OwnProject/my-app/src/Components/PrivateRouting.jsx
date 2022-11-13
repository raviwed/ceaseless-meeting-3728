import React from "react"
import {AppContext} from "../Context/ContextApplication"
import { Navigate} from "react-router-dom"
const PrivateRouting=({children})=>{
    const {isAuth}=React.useContext(AppContext)
    if(!isAuth){
        return(
         <Navigate to="/home"/>
        )
    }
    return children;
}
export default PrivateRouting