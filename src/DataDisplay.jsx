import React from "react";
import Data from "./Data";
import getData from "./api.js";
export default function DataDisplay(){
//    console.log(apiData);
const[apiData,setApiData]=React.useState([]);
React.useEffect(()=>{
async function light(){
    const data=await getData();
    setApiData(data);
}
light();
},[]);
    return(
<div className="displayApi">
    { apiData && apiData.length!=0 && apiData.map((data)=>{
        return <Data key={data.id} object={data}/>
    })}
</div>
    )
}