import React from 'react'

const NavBar = () => {
  return (
    <div className='container-fluid position-absolute top-0 start-0 p-0'>
        <nav className='navbar navbar-expand-lg px-5'>
            <a href='#' className='navbar-brand text-light fs-bold fs-1 w-100 d-flex justify-content-center' >
                <div className='nav-text'>Currency Exchange Rate</div>
            </a>
        </nav>
    </div>
  )
}

export default NavBar;