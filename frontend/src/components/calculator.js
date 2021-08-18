import React, { useState } from "react";
import FoodTable from "./FoodTable";

const Calculator = props => {
    const value2 = props.value


    return (
        <div>
            <h1>Calculator</h1>
            <FoodTable value={value2}/>
            <h1>UserId: {value2}</h1>
        </div>
    )
}

export default Calculator;
