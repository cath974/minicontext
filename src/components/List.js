import React, { useContext } from 'react';
import ListItem from './ListItem';
import  { ShoppingListContext } from '../contexts/ShoppingListContext';


const List = () => {

  const { shoppings, counter } = useContext(ShoppingListContext)

    return shoppings.length ? ( 
        <div className='shop-list'>
            <ul>
              {shoppings.map(shopp => 
                    <ListItem shopp={shopp} key={shopp.id}/>
                )}
            </ul>
            <div>{counter}</div>    
        </div>
     ) : 
     (
        <div>no item in your list</div> 
     )
}
 
export default List;