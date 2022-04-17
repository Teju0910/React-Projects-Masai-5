import { useEffect, useState } from "react"
import { Filter } from "./Filter";
import { Form } from "./Form"
import { Resto } from "./Resto"
import "./Resto.css";



export const Allpage = () =>{
    const [restom, setresto] = useState([])


useEffect(() => {
    getData()
})

const  priceFilter =async() =>{
    let xy = restom.map((x)=>(
        x.prize
    ))        
   xy.sort((a, b) => (a) - (b));
   console.log(xy,"XY")
   setresto(restom)
}

const getData = async() =>{
    const data = await fetch("http://localhost:8000/Restorent")
    .then((d)=> d.json())
    setresto(data)
}

return (
    <div className="onepage">
    
        <Form getData={getData}/>
        <div>
        <Filter priceFilter={priceFilter}/>
        <div className="usegrid">
      
        {restom.map((t) => (
        <Resto 
           food={t}
           key={t.id}
           getData={getData}
            />
        ))}
        </div>  
        </div>             
    </div>
)


}