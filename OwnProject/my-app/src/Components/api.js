import axios from "axios"

const Display=()=>{
   return axios.get(`https://js-211-mockserver.herokuapp.com/api/products`)
}
export default Display
//https://js-211-mockserver.herokuapp.com/api/MostPopular
//https://js-211-mockserver.herokuapp.com/api/NONfrictionMovies
//https://js-211-mockserver.herokuapp.com/api/Friction
//https://js-211-mockserver.herokuapp.com/api/major_league_baseball
export const dispaly=()=>{
   return axios.get(`https://js-211-mockserver.herokuapp.com/api/MostPopular`)
}
export const display=()=>{
   return axios.get(`https://js-211-mockserver.herokuapp.com/api/NONfrictionMovies`)
}
export const ConTainer=()=>{
   return axios.get(`https://js-211-mockserver.herokuapp.com/api/Friction`)
}
export const League=()=>{
   return axios.get(`https://js-211-mockserver.herokuapp.com/api/major_league_baseball`)
}