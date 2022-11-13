//http://localhost:4000/login
import axios from "axios"
export const UpadateLogin=(data={})=>{
  return axios.post(`http://localhost:4000/login`,{
    name: data.name,
    email: data.email,
    password: data.password,
    
  })
}
