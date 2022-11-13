import { Img} from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import {dispaly} from "./api"
import Slider from "react-slick";
export const MajorBaseball=()=>{
    const[matter,setmatter]=useState([])
    useEffect(()=>{
      dispaly().then((res)=>setmatter(res.data))
    },[])
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };
    return(
        <div>
          <h1>All Commedy & Series </h1>
                <br/>
                      <Slider {...settings}>

                         {
                            matter.map((el)=>{
                              return(<div key={el.id} >
                                    <Img style={{borderRadius:"10px",width:"300px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={el.movie_url} alt={"name"}/> 
                                    
                               </div>)   })      
                          } 
                          </Slider>
                  </div>
    )
}