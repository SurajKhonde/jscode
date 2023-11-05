import React from 'react'
import { createContext ,useState} from 'react';
 export const DataContext = createContext();


export const DataProvider = ({ children }) => {
    const [Html, setHtml] = useState('')
    const [Css, setCss] = useState('')
     const [Js, setJs] = useState('')
    
    return (
        <DataContext.Provider value={
           {Html,setHtml,Css,setCss, Js,setJs} 

        }>
            { children}  
      </DataContext.Provider>
  )
}
