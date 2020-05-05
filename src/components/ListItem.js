import React , { useContext } from 'react';
import  { ShoppingListContext } from '../contexts/ShoppingListContext';


const ListItem = ({shopp}) => {
    const {removeItem} = useContext(ShoppingListContext)
    return (
        <li onClick={()=>removeItem(shopp.id)}>
        <div>{shopp.item}</div>
        </li>
      );
}
 
export default ListItem;