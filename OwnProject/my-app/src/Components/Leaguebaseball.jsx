import {Img}from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import{ League} from "./api"
import Slider from "react-slick";
export const Leaguebaseball=()=>{
    const[welcome,setwelcome]=useState([])
    useEffect(()=>{
        League().then((res)=>setwelcome(res.data))
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
              <h1>Major FootBall League</h1>
                <br/>
            <Slider {...settings}>
            {    
            welcome.map((el)=>{
                        return(
                            <div>
                                <Img style={{borderRadius:"10px",width:"300px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}} src={el.baseball} alt={"name"}/>
                            </div>
                        )
                    })
                }
            </Slider>
            </div> 
    )
}