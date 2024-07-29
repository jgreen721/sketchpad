import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = ({link,linkName}) => {
  // console.log("Link",link)
  return (
    <nav className="nav">
        <div>
          <Link to="/">
            <h3 className="nav-header fancy-font gradient-text">SketchPad</h3>
          </Link>
        </div>
        <ul className="nav-links">
            <li className="nav-item">
                <Link className="nav-link-item" to={link}>{linkName}</Link>
                <h5 className="nav-shadow-text">{linkName}</h5>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar