import React from "react"; 
interface Buttonprops{
    backgroundColor:string;
    text:string;
}
export default function Button({backgroundColor,text}:Buttonprops){
    return (
        <button 
            style={{
                backgroundColor:backgroundColor,
            }}
            onClick={() => {
                console.log("clicked")
            }}
        >
            {text}
        </button>
    ) 
}