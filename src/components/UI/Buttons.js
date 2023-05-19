import React, { useState, useEffect } from 'react';
export const ActionButton = (props) => {
    return (
        <div>
            <button
                className={`grid place-items-center bg-[${props.color}] w-20 h-10 text-white rounded-md text-center`}
            >
                {props.title}
            </button>
        </div>
    );
};

export const IngredientButton = ({ label }) => {
    const tabColor = ["#6097CE", "#A6BA43", "#E1D3D5", "#CF39D6", "#000000", "#88F7DB", "#F788F2", "#00D835", "#FF0000", "#919633", "#40B5BB"];
    const [usedColors, setUsedColors] = useState([]);

    const getRandomColor = () => {
        const availableColors = tabColor.filter(color => !usedColors.includes(color));
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const randomColor = availableColors[randomIndex];
        return randomColor;
    };
    
    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const randomColor = getRandomColor();
        setUsedColors(prevColors => [...prevColors, randomColor]);
    }, []);

    const buttonStyle = {
        backgroundColor: usedColors[usedColors.length - 1],
    };
    return (
        <button
            className={`text-white rounded-full px-2 py-2 text-center truncate`}
            style={buttonStyle}
        >
            {label}
        </button>
    )
}

export const CancelButton = () => {
    return (
        <button
            className={`bg-[#FA6161] text-white rounded-lg p-2 text-center border-[#E5E7E9]-500 border-2`}
        >
            Clear All
        </button>
    );
};