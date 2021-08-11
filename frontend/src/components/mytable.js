import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";


const MyTable = (props) => {

    const APP_ID = "51a353f2";
    const APP_KEY = "480a9349965ab2c4dc491fe714b9cea9";

    const [search, setSearch] = useState([])
    const [recipes, setRecipes] = useState("")
    const [query, setQuery] = useState("")

    const [food, setFood] = useState([])
    const [nums, setNums] = useState([])

    useEffect(() => {
        getRecipes();
      }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/api/food-database/v2/parser?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${query}&nutrition-type=cooking`
        );
        const data = await response.json();
        console.log(data.parsed);
        setRecipes(data.parsed);
    };
    
    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };    


    const handleClick = e => {
        var newfood = food;
        var newnums = nums;

        newfood.push(search);
        newnums.push(1);

        setFood(newfood)
        setNums(newnums)
        getSearch(e)
    }

    const handleItemChanged = (i, event) => {
        var newfood = food;
        newfood[i] = event.target.value;
        setFood(newfood)
    }

    const handleNumChanged = (i, event) => {
        var newnums = nums;
        nums[i] = event.target.value;

        setNums(newnums)
    }

    const handleItemDeleted = (i) => {
        var newfood = food;

        newfood.splice(i, 1);

        setFood(newfood)
    }

    const renderRows = () => {

        return food.map(function (o, i) {
            return (
                <tr key={"item-" + i}>
                    <td>
                        {i}
                    </td>
                    <td>
                        <input
                        type='text'
                        value={o}
                        onChange={handleItemChanged(i)}
                        />
                    </td>
                    <td>
                        <input 
                        type="number"
                        value = {nums[i]}
                        onChange={handleNumChanged(i)}
                        />
                    </td>
                    <td>
                        {recipes.food.nutrients.ENERC_KCAL}
                    </td>
                    <td>
                        <button onClick={handleItemDeleted(i)}>
                        Delete
                        </button>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div>
        <input
            type='text'
            value={search}
            onChange={updateSearch}
        />
        <button onClick={handleClick}>Add Item</button>
        <hr />
        <Table className=''>
            <thead>
            <tr>
                <th>Index</th>
                <th>Food</th>
                <th>Quantity</th>
                <th>Kcal</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>{renderRows}</tbody>
        </Table>

        </div>
    );
}

export default MyTable
