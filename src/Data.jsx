import React from "react";
import { themeContext } from "./App";
export default function Data(props){
    // console.log(props.object);
    const darkMode=React.useContext(themeContext);
    // console.log(darkMode);
    
    const data=props.object;

    const styles={border:darkMode?"1px solid white":"1px solid black"}

    return(
        <div  className="data--container" style={styles}>
        <div>Name : {data.name}</div>
        <div>Username : {data.username}</div>
        <div>Email :{data.email}</div>
        <div>phone : {data.phone}</div>
        <div>company : {data.company.name}</div>
        </div>
    );
}