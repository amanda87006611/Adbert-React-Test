import React, { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from '@mui/material/Box' ;
// import CameraController from './CameraController'



const App = () => {
    const [number, setNumber] = useState(0);
    const [clickDisable,setClickDisable] = useState(true);
    // console.log(clickDisable)

    const buttons = [
        <Button key="one" onClick={()=> setNumber(number +1)} disabled={clickDisable ? false : true}>CLICK:{number}</Button>,
        <Button key="two" onClick={()=> setNumber(0)}>CLEAR</Button>,
        <Button key="three" onClick={()=>{
        setClickDisable(false)
        if(clickDisable == false){
            setClickDisable(true)
        }
        }}>{clickDisable ? 'DISABLE' : 'ABLE'}</Button>,
      ];
    return (
        <Box
            sx={{
                display: 'flex',
                '& > *': {
                 m: 1,
                },
            }}
    >
     <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
    )
}

export default App
