import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    console.log(this.props.location)
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Kamil Łuc</strong>, obecnie student AGH
            <br />
            responsive site template freebie
          </h1>
          <Link to="/">Strona Główna</Link>
          <Link to="/cv">CV</Link>
          <Link to="/projects">Projekty</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
        <Link to="/">Strona Główna</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projekty</Link>
        <Link to="/contact">Kontakt</Link>
        <Footer />
      </header>
    )
  }
}

export default Header
