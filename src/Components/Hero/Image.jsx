import React from 'react'

const Image = ({image}) => {
    const divStyle={
        position: 'absolute',
        top:'-5rem',
        right:"2rem",
        width: "100%", 
        height: "100vh",
        zIndex: "-2",
        borderRadius:"30px",
        overflow: "hidden"
    }
    const imageStyle={
        width: "100%",
        height: "100%",
       borderBottomLeftRadius: "40%"
    }
    return (
        <>
           <div style={divStyle}>
          <img src={require(`${image}`).default} alt="Mask" style={imageStyle} />
        </div>  
        </>
    )
}

export default Image
