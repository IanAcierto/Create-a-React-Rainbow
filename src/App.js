import React, {useState} from 'react';
import {ColorBlock} from './components/ColorBlock.js'
import {ColorForm} from './components/ColorForm.js'
function App() {
  let colors = ['violet', 'orange', 'red', 'blue', 'yellow', 'green', 'purple',]
  let colorMap = colors.map((color, i) =>{
    return(
      <ColorBlock key ={i} color={color}/>
    )
  })
  let [colors, setColors] = useState('')
  const addColor =(newColor) =>{
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
      {colorMap}
      <ColorForm/>
    </div>
  );
}

export default App;
