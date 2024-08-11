import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand " to="/">
                    <h3>SCHOOL DATA</h3>
                    </NavLink>
                  
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
