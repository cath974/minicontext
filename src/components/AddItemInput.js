import React, { useState, useContext } from 'react';
import  { ShoppingListContext } from '../contexts/ShoppingListContext';


const AddItemInput = () => {
const { addItem } = useContext(ShoppingListContext)

const [item, setItem] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem('');
}

    return (  
        <form onSubmit={handleSubmit}>
            <label>Item name</label>
            <input 
            type='text' required 
            value={item}
            onChange={(e) => setItem(e.target.value)}>
            </input>
            <input type='submit' value='add item'></input>
        </form>
    );
}
 
export default AddItemInput;