async function getData(){
const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    return data;
  
}
const data=await getData();

export default data;
