import React from "react";
import Table from 'react-bootstrap/Table'
//import uuid from "uuid";

const Recipes = ({ title, calories }) => {
  return (
    <div>
    <Table striped bordered hover>
        <thead>
            <tr>
                 
            <td>Food</td>
          
            <td>Kcal</td>
           
            </tr>
        </thead>
            <tbody>
                <tr>
                
                <td>{title}</td>
             
                <td>{calories}</td>
         
                </tr>
            
            </tbody>
  </Table>
</div>
  );
};
export default Recipes;