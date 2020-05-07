import  React, { createContext , useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ShoppingListContext = createContext();

const ShoppingListContextProvider = (props) => {
    const [shoppings, setShoppings] = useState([
        {item: 'Shopping1', id:1},
        {item: 'Shopping2', id:2},
    ]); 
    

    const addItem =(item) => {
        setShoppings([...shoppings, { item , id:uuidv4() }])
    }

    const removeItem =(id) => {
        setShoppings(shoppings.filter(shopp => shopp.id!==id))
    }

        return (
            <ShoppingListContext.Provider value={{shoppings, addItem,removeItem}}>
                { props.children }
            </ShoppingListContext.Provider>
          )
    }

 
export default ShoppingListContextProvider;