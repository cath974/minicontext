import  React, {createContext} from 'react';

export const ShoppingListContext = createContext();

class ShoppingListContextProvider extends React.Component {
    constructor() {
        super();
        this.state = {
            isUserOnline: false
        }
    }
   
    handleUserStatus= () => {
        this.setState({isUserOnline : !this.state.isUserOnline})
    }

    render() { 
        return (
            <ShoppingListContext.Provider value={{...this.state, handleUserStatus: this.handleUserStatus}}>
                {this.props.children}
            </ShoppingListContext.Provider>
          )
    }
}
 
export default ShoppingListContextProvider;