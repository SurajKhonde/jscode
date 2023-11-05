import React, { useContext, useState } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';
import { DataContext } from './Context/DataProvider';

const Container = styled(Box)`
display:flex;
background-color:#060606;
height:58vh;
`
const CodeMobile = () => {
    const { Html, setHtml, Css, setCss, Js, setJs } = useContext(DataContext)
  const [Data, setData] = useState(1)
  switch (Data) { 
    case (1):
      return (
        <><div className='flex bg-black '>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(1) }}>HTML</button>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(2) }}>CSS</button>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(3) }}>Js</button>
        </div>
            
          <Container >
            <Editor
              heading="Html"
              icon="/"
              color="#FF3C41"
              value={Html}
              onchange={setHtml} />
          </Container>
          
        </>
      )
      break;
     case (2):
      return (
        <><div className='flex bg-black '>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(1) }}>HTML</button>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(2) }}>CSS</button>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(3) }}>Js</button>
        </div>
            
          <Container >
            <Editor
          heading="Css"
          icon="*"
          color="#0EBEFF"
        value={Css}
          onchange={setCss }/>
          </Container>
          
        </>
      )
      break;
    case (3):
      return (
        <><div className='flex bg-black '>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(1) }}>HTML</button>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(2) }}>CSS</button>
          <button className='shadow-md w-12 bg-slate-600 text-white border-r-2 border-[gray]' onClick={() => { setData(3) }}>Js</button>
        </div>
            
          <Container >
            <Editor
          heading="JavaScript"
          icon="()"
          color="yellow"
        value={Js}
          onchange={setJs }/>
      
          </Container>
          
        </>
      )
      break;
  }
    
}

export default CodeMobile