import React, {useState} from 'react';
import './index.css'


const Navbar=()=>{
    const [isMenuOpen, setlsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setlsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';
      };

const scrollToSection = (sectionId) =>{
    const section = document.getElementById(sectionId);
    if (section){
        section.scrollIntoView({ behavior: 'smooth'});
    }
    setlsMenuOpen(false);
};
    return(
        <div>
            <nav id='navbar'>
                <div>
                    <img src='/pics/logo.png'alt='logo' className='logo'></img>
                </div>
            <div className={`hamburger ${isMenuOpen ? 'active' : '' }`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <div  className={`nav-links ${isMenuOpen ? 'active' :''}`}>
            <a href='#call-to-action' onClick={(e) =>{e.preventDefault();scrollToSection('call-to-action');}}>Home</a>
            <a href='#Missionandvission' onClick={(e)=>{e.preventDefault();scrollToSection('Missionandvission');}}>About Us</a>
            <a href='#Contacts' onClick={toggleMenu}>Contacts</a>
            <a href='#team' onClick={toggleMenu}>Team</a>
            <a href= "#page" onClick={(e) => {e.preventDefault(); scrollToSection ('page');}}>Trends</a>
            </div>

            </nav>
        </div>
    )
}

export default Navbar