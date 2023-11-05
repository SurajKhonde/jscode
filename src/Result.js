import React from 'react'
import { useContext, useState,useEffect} from 'react';
import { Box, styled } from "@mui/material";
import { DataContext } from './Context/DataProvider';
const Container = styled(Box)`
height:41vh;`



const Result = () => {
  const { Html, Css, Js } = useContext(DataContext);
  const [src, setSrc] = useState('');

  const srcCode = `<html>
  <body>${Html}</body>
  <style>${Css}</style>
  <script>${Js}</script>
  </html>`
  useEffect(() => { 
       const timeOut = setTimeout(() => { 
setSrc(srcCode)
    }, 2000)
    return()=>clearTimeout(timeOut)

  },[Html,Css,Js])
  return (
    <Container>
      <iframe
        srcDoc={src} 
        title='Output'
        sandbox='allow-scripts'
        width="100%"
        height="100%"

      />
    </Container>
  )
}

export default Result;