import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../actions/auth'
const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand'>
          Velaio News
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active text-white' : ''}`}
                aria-current='page'
                to='/app'
              >
                List of News
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active text-white' : ''}`}
                aria-current='page'
                to='/wheater'
              >
                RealTime
              </NavLink>
            </li>

          </ul>
          <button
            className='btn btn-light rounded'
            type='button'
            aria-expanded='false'
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
