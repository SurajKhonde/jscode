import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material';
import logo from "./images/newPICS.png"
const Container = styled(AppBar)`
background:#060606;
height:9vh;

`


const Header = () => {
  return (
      <Container position='static'>
          <Toolbar>
        <img className='w-[78px]' src={ logo}></img>
          </Toolbar>
    </Container>
  )
}

export default Header