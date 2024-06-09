import { Identity } from "./identity";

export function Card({data}){
    const divStyle={ margin : "50px", 
                 marginLeft : "50px", 
                 marginRight : "1000px", 
                 paddingTop : "20px", 
                 paddingBottom : "20px",
                 paddingLeft: "10px", 
                 border : "2px  solid black"} 
    return <div>
        {data.map((unit)=>(<div style={divStyle}><Identity persons={unit} ></Identity></div>))}
    </div>
}


