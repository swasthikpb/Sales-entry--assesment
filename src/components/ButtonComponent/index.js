import React from 'react'
import { Button } from 'reactstrap'
// import './ButtonContainer.css'

const ButtonComponent = ({name,color,handleClick}) => {
  return (
    
        <Button onClick={()=>handleClick(name)} style={{width:"70px",height:"30px"}}  size='sm' color={color}>{name}</Button>
  )
}

export default ButtonComponent