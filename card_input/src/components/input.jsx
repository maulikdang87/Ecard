
import { useEffect, useState } from "react";
import axios from "axios"

export function InputCard(){
    const [name ,setName]= useState("");
    const [description, setDescription]= useState("");
    const [interests, setInterests] = useState("");

    function submit(){
        
        axios.post('http://localhost:3000/create', {
            name: name,
            description : description,
            interests : interests
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
        
    }

    return <div>
        <input type="text" placeholder="Name" onChange ={(e)=>{
        setName(e.target.value)
    }} /> <br />
    <input type="text" placeholder="Description" onChange ={(e)=>{
        setDescription(e.target.value)
    }} /> <br />
    <input type="text" placeholder="Interests" onChange ={(e)=>{
        setInterests(e.target.value)
    }} /> <br />

    <button onClick={submit} > Add the Card</button>

    </div>
    
}