import{Img} from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import {ConTainer} from "./api"
import Slider from "react-slick";
export const AllNonfrictional=()=>{
    const [Auth,setAuth]=useState([])
    useEffect(()=>{
        ConTainer().then((res)=>setAuth(res.data))
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
              <h1>All Frictional Movie +</h1>
             <br/>
            <Slider {...settings}>
                {
                    Auth.map((el)=>{
                        return(
                            <div>
                                <Img style={{borderRadius:"10px",width:"300px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} src={el.cenima} alt={"name"} />
                            </div>
                        )
                    })
                }
                </Slider>
            </div>
    )
}