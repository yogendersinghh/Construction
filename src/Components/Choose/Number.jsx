import React from 'react'
import "./number.css"
const Number = ({color,number,content}) => {
    return (
        <div className="construction__choose-right__div">
            <div className="construction__choose-color" style={{background:color}}></div>
                <p className="construction__choose-number">{number}</p>
                <p className="construction__choose-content">{content}</p>

        </div>
    )
}

export default Number
