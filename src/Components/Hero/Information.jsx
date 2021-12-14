import React from 'react'

const Information = ({number,data,color}) => {
    return (
        <>
        <div className="construction__hero-left__infoContainer">
            <div className="construction__hero-left__color" style={{background:color}}></div>
            <div>
            <h2>{number}</h2>
            <p>{data}</p>
            </div>
            
        </div>
        </>
    )
}

export default Information
