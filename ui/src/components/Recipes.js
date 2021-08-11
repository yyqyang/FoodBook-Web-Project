import React from "react";
import Table from 'react-bootstrap/Table'
//import uuid from "uuid";

const Recipes = ({ title, calories }) => {
  return (
    <div>
    <Table striped bordered hover>
        <thead>
            <tr>
            <td>Index</td>          
            <td>Food</td>
            <td>Quantity</td>
            <td>Kcal</td>
            <td>Operation</td>
            </tr>
        </thead>
            <tbody>
                <tr>
                <td>#</td>        
                <td>{title}</td>
                <td>{1}</td>
                <td>{calories}</td>
                <td>operation</td>
                </tr>
            
            </tbody>
  </Table>
</div>
  );
};
export default Recipes;