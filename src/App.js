import React from 'react';
import ShoppingListContextProvider from './contexts/ShoppingListContext'
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
       {/* <ShoppingListContextProvider> */}
        <List />
      {/* </ShoppingListContextProvider> */}
    </div>
  );
}

export default App;
