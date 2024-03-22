import React from "react";
import DataDisplay from "./DataDisplay";
export const themeContext=React.createContext();
export default function App(){

const[darkMode,setDarkMode]=React.useState(false);
// console.log(darkMode);
const[test,setTest]=React.useState(false);
React.useEffect(()=>{
setDarkMode(!darkMode);
},[test]);

function handleClick()
{   
    setDarkMode((prevData)=>!prevData)
}

document.body.style.backgroundColor = darkMode?"black":"white";
const styles={color:darkMode?"white":"black"};

return(
<div style={styles}>
<div className="btndiv">
    <button onClick={handleClick}>{darkMode?"Turn off Dark Mode":"Turn on Dark Mode"}</button>
    <button onClick={()=>{setTest(!test)}}>Same Thing Different way</button>
</div>
<themeContext.Provider value={darkMode}>
<DataDisplay/>
</themeContext.Provider>


</div>
);
}