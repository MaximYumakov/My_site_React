import React from "react";
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <div><Link to="/">Максим Юмаков</Link></div>
                <div><Link to="/portfolio">Портфолио</Link></div>
                <div><Link to="/about-me">Обо мне</Link></div>
                <div><Link to="/call-me">Связаться со мной</Link></div>
            </nav>
        </header>
    )
}

export default Header