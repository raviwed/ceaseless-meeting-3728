// http://localhost:4000/Products
import axios from "axios"
const getData=(data={})=>{
  return  axios.post(`http://localhost:4000/Products`,{
    movie: data.movie,
    movie_name:data.movie_name,
    plot:data.plot,
    description: data.description
  })
}
export default getData;

export const Popular=(data={})=>{
  return axios.post(` http://localhost:4000/MostPopular`,{
   movie_url:data.movie_url
  })
}
export const non_friction=(data={})=>{
 return axios.post(` http://localhost:4000/NONfrictionMovies`,{
  photo:data.photo
 })
} 
export const Friction=(data={})=>{
 return axios.post(` http://localhost:4000/Friction`,{
  cenima:data.cenima
 })
}
export const majorBaseball=(data={})=>{
return axios.post(`http://localhost:4000/major_league_baseball`,{
  baseball:data.baseball
})
}


// http://localhost:4000/major_league_baseball
// http://localhost:4000/login