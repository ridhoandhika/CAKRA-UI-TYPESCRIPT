import React from "react"; 
interface Paragraphprops{
    text:string
}
export default function Paragraph({text}: Paragraphprops){
    return (
        <p style={{
            backgroundColor:"aqua",
            color:"black",
        }}>
            {text}
        </p>

    )
}