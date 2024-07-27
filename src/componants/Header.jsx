import { useState } from "react"
import Form from "./Form"
function  Header(){
    const [isOpen ,setIsOpen] = useState(false)
    const handeleOpen =() =>{
        setIsOpen(true)
    }
    const handelclose = ()=>{
        setIsOpen (false)
    }

    return <div>
    <div  className= " p-4 bg-purple-500">
         <div className=" flex justify-between">
            <h1 className="text-3xl text-white">NOOTY</h1>
            <button onClick={handeleOpen} className="bg-orange-400 rounded p-5">Add NOTE</button>
         </div>
    </div>
         {
            isOpen ==true ?  <Form close={handelclose} /> :""
         }
    </div> 
    
}
 export default Header