import useState from 'react'
import React from 'react'

const ColorBlock = (props) => {
  return (
    <div className = "ColorBlock" style = {{backgroundColor: props.color}}>
      <p>{props.color}</p>
      {console.log(props.color)}
    </div>
  )
}

export default ColorBlock

//ColorBlocks will take in the color prop