import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return(
        <nav className='App-navigation'>
            <Link to='/'>Home</Link>
            <Link to='/weights'>Weights</Link>
            <Link to='/routines'>Routines</Link>
            <Link to='/cardio'>Cardio</Link>
            <Link to='/diet'>Diet</Link>
            <Link to='/faq'>FAQs</Link>
        </nav>
    )
}

export default Navigation