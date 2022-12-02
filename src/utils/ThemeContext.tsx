import axios from 'axios';
import React,{useContext,createContext, useState, useEffect} from 'react'
import { User } from '../interface/user';
type Props = {}

const ThemesContext = createContext('');
const Themes = ({children}:any) => {
  const [user, setUser] = useState<any>([])
  useEffect(() => {
    (
      async (user) =>{
        try {
          const res:any= await axios.get(`http://localhost:3001/user`,user)
         setUser(res.data)
        } catch (error) {
        }
      }
    )()
  },[])
  return (
    <ThemesContext.Provider value={user}>
      {children}
    </ThemesContext.Provider>
  )
}

export  {Themes,ThemesContext}