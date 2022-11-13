import {Img} from "@chakra-ui/react"
import Slider from "react-slick";
import { useEffect } from "react"
import { useState } from "react"
import Display from "./api"
export const Popoular=()=>{
    const[data,setdata]=useState([])
    useEffect(()=>{
        Display().then((res)=>setdata(res.data))
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
     
    return(
        <div >
             <h1>Most Popular Movies & series </h1>
             <br/>
             <Slider {...settings} >
            {
            data.map((el)=>
                    
                    <div key ={el.id}  >
                       <Img style={{borderRadius:"10px",width:"300px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={el.movie} alt={el.movie_name}/>     
                       {el.movie_name} 
                        <i>{el.plot} </i>
                        <b>{el.description}</b> 
                    </div>
                    )
            }
            </Slider>
     </div>
    )
}