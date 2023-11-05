import React, { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from './Context/DataProvider';
const Container = styled(Box)`
display:flex;
background-color:#060606;
height:54vh;
`

const Code = () => {
  const  {Html,setHtml,Css,setCss, Js,setJs} =useContext(DataContext)
  return (
    <Container >
        <Editor
          heading="Html"
          icon="/"
          color="#FF3C41"
          value={Html}
          onchange={setHtml } />
        <Editor
          heading="Css"
          icon="*"
          color="#0EBEFF"
        value={Css}
          onchange={setCss }/>
        <Editor
          heading="JavaScript"
          icon="()"
          color="yellow"
        value={Js}
          onchange={setJs }/>
            </Container>
  )
}

export default Code