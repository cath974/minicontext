import React from 'react';
import ShoppingListContextProvider from './contexts/ShoppingListContext'
import './App.css';
import List from './components/List';
import AddItemInput from './components/AddItemInput';

function App() {
  return (
    <div className="App">
        <ShoppingListContextProvider>
        <List />
        <AddItemInput />
       </ShoppingListContextProvider>
    </div>
  );
}

export default App;
