import React, { useState } from 'react'
// Make sure to import the component we just built:
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'
function App(){
    let colors, setColors = useState()//state variable returning as undefined, not sure what's going on
    
    const addColor = (newColor) =>{
    }
    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color={color} key = {i} />
        )
    })

    return (
        <div className="App">
            {console.log("colors log", colors)}
            <ColorBlock color = {"red"}/>   
            {colorMap}
            <ColorForm addColor = {addColor}/>
        </div>
    )
}


// import ColorBlock from './ColorBlock'
// import {useState} from 'react'
// function App() {
//   let colors, setColors = useState(["red", "orange", "yellow", "green", "blue", "indigo"])
//    let colorMap = colors.map(color, i => {
//       return(
//         <ColorBlock color = {color}/>
//       )
//     }
//   )
//   return (
//     <div className="App">
//       <ColorBlock key={1} color = "red"/>
//       {colorMap}
//     </div>
//   );
// }

export default App;
