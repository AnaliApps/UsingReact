import React, {useState} from 'react';
function Example(props){
    return<h1>{props.data}</h1>
}
function Greeting(){
    const [ change,setChange] = useState(false);
    return (<div>
        <button onClick={()=>setChange(!change)}>Click Here!</button>
        {change?(<Example data="Welcome to GeeksforGeeks"/>):(<Example data="A computer science portal for Geeks"/>)}
    </div>);
}
export default Greeting