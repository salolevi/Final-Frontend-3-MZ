import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ContextGlobal } from './utils/GlobalContext'

const Navbar = () => {

    const { Theme, handleThemeChange } = useContext(ContextGlobal)

    return (
        <nav className='navbar' style={{background:Theme.backgroundNav, color:Theme.color}}>
            <Link to={'/'}><h2>DH Odonto</h2></Link>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contacto</Link>
                <Link to={'/favorites'}>Favoritos</Link>
                <button className={`themeButton ${Theme.color === 'white' && 'darkBtn'}`}/*className={(Theme.color === 'black') ? "fa-solid fa-moon" : "fa-solid fa-sun"}*/ onClick={handleThemeChange} /*style={{width: "30px", height: "30px"}}*/>{Theme.themeButtonIcon}</button>
            </div>
        </nav>
    )
}

export default Navbar