import React from 'react'
import { Link } from 'react-router-dom'
import SearchNavbar from '../SearchNavbar/SearchNavbar'

type Props = {}

const NavbarTop = (props: Props) => {
  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link className="navbar-brand ps-3" to='/'>Home</Link>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle"><i
                className="fas fa-bars"></i></button>
       <SearchNavbar/>
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/">Client</Link></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#!">Logout</a></li>
                </ul>
            </li>
        </ul>
    </nav>
  )
}

export default NavbarTop