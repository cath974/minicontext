import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddItemInput from './AddItemInput';
import ListItem from './ListItem';


const List = () => {

    const [shoppings, setShoppings] = useState([
        {item: 'Shopping1', id:1},
        {item: 'Shopping2', id:2}
    ]); 
    const [counter, setCounter]= useState(0) 

    const addItem =(item) => {
        setShoppings([...shoppings, { item , id:uuidv4() }])
        setCounter(counter + 1)
    }

    // useEffect(() => {
    //     setCounter(counter + 1)
    // }, [shoppings])


    return ( 
        <div>
            <ul>
              {shoppings.map(shopp => 
                <li key={shopp.id}>
                    <ListItem item={shopp.item}/>
                </li>
                )}
            </ul>
            <AddItemInput addItemList={addItem}/>
            <div>{counter}</div>    
        </div>
     );
}
 
export default List;