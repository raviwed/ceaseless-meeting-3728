import {MajorBaseball} from "./Mostpopular"
import { Nonfrictional} from "./Nonfriction"
import {AllNonfrictional} from "./AllNonfrictional"
import {Leaguebaseball} from "./Leaguebaseball"
import {Popoular} from "./Products"
import "./Box.css";
import Slider from "react-slick";
import {headerVideo} from "../Admin/Video";
import {Footer} from "./Footer"
const Home=()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
    return(
     
        <div className="boxy" >
            
            <Slider {...settings}>
              {
              headerVideo.map((el)=>{
                return(
                  <div className="pic">
                    <iframe  width="100%" height="95%" src={el.video} title={el.title} frameborder={el.frameborder} allow={el.allow}  allowfullscreen ></iframe>
                  </div>
                )
              })
              }
              </Slider>
              <div style={{height:"10px"}}></div>
             <Popoular/>
             <div className="individual" > 
             <Nonfrictional/>
             </div>
             <div className="individual">
           <AllNonfrictional/>
             </div>
             <div className="individual" >
                
             <MajorBaseball/>
             </div>
             <div className="individual" >
           
             <Leaguebaseball/>
             </div>
             <div>
              <Footer/>
               </div>
            
     </div>
    )
}
export default Home