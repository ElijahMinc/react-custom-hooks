import { ThemedInput } from './components/ThemedInput/ThemedInput';
import { Hover } from './components/Hover/Hover';
import { List } from './components/List/List';
import './App.css';
import { useState, useEffect } from 'react';
import { debounce } from '@material-ui/core';
import { useDebounce } from './hooks/useDebounce';

const App = () => {
  const [valueInput, setValue] = useState('')
  // const { debounce } = useDebounce(search, 1000)

//   function search(query) {
//     fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
//        .then(response => response.json())
//        .then(json => {
//           console.log(json)
//        })
//  }
  
function fetchTodos(query) {
  fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
     .then(response => response.json())
     .then(json => {
        console.log(json)
     })
}

 const handleChange = (value) => {
    setValue(value)
    debounce(value)
 }
  
  return (
    <div className="App">
      <div className="container">
         {/* <ThemedInput /> */}
         {/* <Hover /> */}
         {/* <List /> */}
         <input type="text" value={valueInput} onChange={(event) => handleChange(event.target.value)}/>
      </div>
    </div>
  );
}

export default App;
