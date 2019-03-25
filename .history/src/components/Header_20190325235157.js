import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avataaars.png'
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
            <strong>Kamil Łuc</strong>, student 5'tego roku
            <br /> Informatyki Stosowanej na AGH.
            <br />
            Zainteresowany technologią Web'ową.
          </h1>
        </div>
        <p>
          <Link to="/">Strona Główna</Link>
        </p>
        <p>
          <Link to="/cv">CV</Link>
        </p>
        <Link to="/projects">Projekty</Link>
        <Link to="/information">Kontakt</Link>
        <br /> <br />
        <Footer />
      </header>
    )
  }
}

export default Header
