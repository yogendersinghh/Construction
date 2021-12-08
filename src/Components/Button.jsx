import React from 'react'

const Button = ({content,background,color, boxShadowStyle}) => {
    const styling = {
        width:"190px",
        height:"50px",
        background:background,
        borderRadius:"40px 5px",
        boxShadow:boxShadowStyle,
        fontFamily: "Poppins",
fontStyle: "normal",
fontWeight: "500",
fontSize: "17px",
lineHeight: "20px",
textAlign: "center",
letterSpacing: "-0.5px",

color: color,
border:"1px solid #18A7B9",
outline:"none",
padding:"0.6rem 1.9rem",
    }
    return (
        <>
            <button style={styling}>{content}</button>
            
        </>
    )
}

export default Button
