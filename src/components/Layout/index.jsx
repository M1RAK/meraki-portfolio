import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
         faSun,
         faMoon
} from '@fortawesome/free-solid-svg-icons'
import { Outlet } from 'react-router-dom'

import './index.scss'
import Navbar from '../Navbar';
import { useEffect, useState } from 'react';

const Layout = () => {

    const [ theme, setTheme ] = useState(localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        }
        else{
            setTheme('dark')
        }
    }
    
    useEffect(() => {
     localStorage.setItem('theme',theme)
     setTheme(theme)

       document.body.className = theme;
    },[theme])

    return(
       <div className="container layout-page">

        <div className="nav-bar">

               <button 
               onClick={toggleTheme}
               className={`theme-button ${theme === 'light' ? 'active' : 'inactive'}`}>
                <FontAwesomeIcon 
                icon={theme === 'light' ? faSun : faMoon}
                color='#b2becd' 
                />
               </button>
                 
                 <Navbar />

        </div>

         <Outlet />
         
       </div>
    )
}

export default Layout