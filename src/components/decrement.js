import React , {useState} from "react";

const DecrementComponents = ()=>{
    const [count,setCount] = useState(0);
    const DecrementByOne = ()=>{
        setCount((nextValue)=>{
            return nextValue -1;
        });
    };
return(
    <div>
        <h1>{count}</h1>
        <button onClick = {DecrementByOne}>Decrement</button>

    </div>
);



};

export default DecrementComponents;
