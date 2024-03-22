import React from "react";
import Data from "./Data";
import apiData from "./api.js";
export default function DataDisplay(){
//    console.log(apiData);
    return(
<div className="displayApi">
    { apiData && apiData.length!=0 && apiData.map((data)=>{
        return <Data key={data.id} object={data}/>
    })}
</div>
    )
}