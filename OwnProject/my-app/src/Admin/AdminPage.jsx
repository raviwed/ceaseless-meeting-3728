import {Input} from "@chakra-ui/react"
import {useState} from "react"
import getData from "../Admin/api"
import { Popular} from "./api"
import {non_friction} from "./api"
import {Friction} from "./api"
import {majorBaseball} from "./api"

const insiate={
    movie:"",
    movie_name:"",
    plot:"",
    description:""
}
const Intake={
    movie_url:""
}
const non_friction_movie={
    photo:""
}
const friction={
    cenima:"",
}
const majorbaseball={
  baseball:"",
} 

const AdminPage=()=>{
    const[Data,setData]=useState(insiate)
    const[popular,setpopular]=useState( Intake)
    const[nonfriction,setnonfriction]=useState(non_friction_movie)
    const[Allfriction,setAllfriction]=useState(friction)
    const[major,setmajor]=useState(majorbaseball)
   const HandleChange=(e)=>{
    const{name,value}=e.target;
     setData({
        ...Data,
        [name]:value,
     })
   }
   const HandleSubmit=(e)=>{
    e.preventDefault()
    console.log(Data)
    getData(Data)
   }
const Handlefriction=(event2)=>{
   const{name,value}=event2.target
   setAllfriction({
    ...Allfriction,
    [name]:value
   })
}
   const HandlePopular=(event)=>{
    const {name,value}=event.target;
    setpopular({
        ...popular,
        [name]:value,
        
    })

   } 
   const HandlePopularMovie=(event)=>{
     event.preventDefault()
     console.log(popular)
     Popular(popular)
   }
   const Handlenonfriction=(event1)=>{
   const{name,value}=event1.target
   setnonfriction({
    ...nonfriction,
    [name]:value,
   })
   }
   const Handlesubmitnonfriction=(event1)=>{
       event1.preventDefault()
       non_friction(nonfriction)
   }
   const Handlesubmitfriction=(event2)=>{
    event2.preventDefault()
    Friction(Allfriction)
   }
   
   const Handlemajorbaseball=(event3)=>{
      const{name,value}=event3.target
      setmajor({
        ...major,
        [name]:value
      })
   }
   const  HandlesubmitmajorLeague=(event3)=>{
     event3.preventDefault()
     majorBaseball(major)
  }
  
    return(
        <div style={{width:"400px",margin:"auto",paddingTop:"10px" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }} >
           
         <form onSubmit={HandleSubmit}>
            <div style={{margin:"15px"}}>
                <lable>
                <Input placeholder="enter_image" name="movie" type="url" value={Data.movie} onChange={HandleChange}/>
                </lable>
            </div>
            <div style={{margin:"15px"}}>
            <lable>
            <Input placeholder="enter_name" name="movie_name" type="text"  value={Data.movie_name} onChange={HandleChange} />
            </lable>
            </div>
           <br/>
           <div style={{margin:"15px"}}>
            <lable>
            <Input placeholder="plot related_movie" name="plot" type="text" value={Data.plot} onChange={HandleChange}  />
            </lable>
           </div>
            <br/>
            <div style={{margin:"15px"}}>
                <lable>
                <Input placeholder="enter_Description" name="description" type="text" value={Data.description} onChange={HandleChange} />
                </lable>
            </div>
               <br/>
               <div style={{margin:"15px"}}>
                 <lable>
                 <Input bg={"blue.500"} value="onClick" type="submit"  />
                 </lable>
               </div>
        </form> 
            <br/>
            <h1>Most Popularmovies</h1> 
            <div>
            <form onSubmit={HandlePopularMovie}>
                <div style={{margin:"15px"}}>
                    <label>
                    <Input placeholder="enter_Url" name="movie_url" value={popular.movie_url} type="url" onChange={HandlePopular} />
                    </label>
                </div>
                <br/>
                <div style={{margin:"15px"}}>
                    <lable>
                    <Input value="submit" type="submit" bg={"blue.500"}/>
                    </lable>
                </div>
                 
            </form> 
            </div>
            <h1>Non-friction Film & Series</h1>
           <div>
            <form onSubmit={ Handlesubmitnonfriction}>
                <div  style={{margin:"15px"}}>
                    <label>
                    <Input placeholder="enter_url" name="photo" type="url" value={nonfriction.photo} onChange={Handlenonfriction} />
                    </label>
                </div>
                <div  style={{margin:"15px"}}>
                 <label>
                 <Input value="onClick" type="submit" bg={"blue.500"} />
                 </label>
                </div>
                               
            </form>
           </div>
           <h1>All Frictional Stories</h1>
           <div>
            <form onSubmit={ Handlesubmitfriction}>
                <div style={{margin:"15px"}}>
                    <lable>
                    <Input placeholder="enter_url" name="cenima" type="url" value={Allfriction.cenima} onChange={Handlefriction} />
          
                    </lable>
                </div>
                <div style={{margin:"15px"}}>
                    <lable>
                    <Input value="onClick" type="submit" bg={"blue.500"} />
                    </lable>
                </div>
                    
            </form>
           </div>
           <h1>Major League BaseBAll</h1>
           <div>
            <form onSubmit={ HandlesubmitmajorLeague}>
                <div style={{margin:"15px"}}>
                    <lable>
                    <Input placeholder="enter_url" name="baseball" type="url" value={major.baseball} onChange={Handlemajorbaseball} />
                    </lable>
                </div>
                <div style={{margin:"15px",padding:"10px"}}>
                    <lable>
                    <Input value="onClick" type="submit" bg={"blue.500"} />
                    </lable>
                </div>
                      
            </form>
           </div>
        </div>
    )
}
export default AdminPage