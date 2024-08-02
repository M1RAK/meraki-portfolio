import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
         faHome,
         faNewspaper,
         faSuitcase,
         faUser,
         faPhone
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return(
        <nav>

        <NavLink
        className='home-link'
        exact='true'
        to='/'
        >
            <FontAwesomeIcon icon={faHome} color='#b2becd' />
        </NavLink>
        
        <NavLink 
        className='portfolio-link'
        exact='true'
        to='portfolio'
        >
            <FontAwesomeIcon icon={faSuitcase} color='#b2becd' />
        </NavLink>
        
        <NavLink 
        className='about-link'
        exact='true'
        to='about'
        >
            <FontAwesomeIcon icon={faUser} color='#b2becd' />
        </NavLink>

        {/* <NavLink 
        className='blog-link'
        exact='true'
        to='blog'
        >
            <FontAwesomeIcon icon={faNewspaper} color='#b2becd' />
        </NavLink> */}

        <NavLink 
        className='contact-link'
        exact='true'
        to='contact'
        >
            <FontAwesomeIcon icon={faPhone} color='#b2becd' />
        </NavLink>
    </nav>
    )
}

export default Navbar