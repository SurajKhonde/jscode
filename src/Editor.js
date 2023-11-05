import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material';
import { useState } from 'react';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'
const Heading = styled(Box)`
   background: #1d1e22;
   display:flex;
   padding :9px 12px
   `
   const Header = styled(Box)`
   background: #060606;
   display:flex;
   color:#AAAECB;
   justify-content: space-between;
   font-weight:800

   `
const Container = styled(Box)`
 flex-grow:1;
 flex-basis:0;
 display:flex;
 flex-direction:column;
 padding:0 8px
 `

const Editor = ({ heading, icon, color, value, onchange }) => {
  const [open,setopen]=useState(true)
  const handleChange = (editor, data, value) => { 
    onchange(value);

  }
  return (
    <Container style={open ? null : {flexGrow:0}}>
          <Header>
          <Heading >
          <Box component="span" className=' flex  h-5 w-5 place-content-center rounded-md mr-1 pb-1' style={{background:color}}>
            { icon}
              </Box>
          { heading}
          </Heading>
        <CloseFullscreenIcon
          fontSize='small'
          style={{alignSelf:'center'}}
          onClick={()=>setopen(!open) }
        />
          </Header>
      <ControlledEditor
        className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme: 'material',
          lineNumbers: true
        }}/>
    </Container>
  )
}

export default Editor