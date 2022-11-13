import { useState } from "react"
import Slider from "react-slick";
import {Img} from "@chakra-ui/react"
import { useEffect } from "react"
import {display} from "./api"
export const Nonfrictional=()=>{
    const [container,setcontainer]=useState([])
    useEffect(()=>{
        display().then((res)=>setcontainer(res.data))
    },[])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4
      };
    return(
        < div>
         <h1>Nonfrictional Film  & Series</h1>
             <br/>
        <Slider {...settings }>
                      {
                          container.map((el)=>{
                              return(
                                  <div>
                                      <Img style={{borderRadius:"10px",width:"300px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={el.photo} alt={"name"}/>
                                  </div>
                              )
                          })
                      }
                    </Slider>
                  </div>
            
    )
}