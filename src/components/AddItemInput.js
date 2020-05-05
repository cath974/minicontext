import React, { useState } from 'react';


const AddItemInput = ({addItemList}) => {

    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    addItemList(item);
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