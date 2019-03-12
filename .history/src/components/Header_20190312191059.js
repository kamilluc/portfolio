import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>Jestem Kamil</strong>, a super simple
            <br />
            responsive site template freebie
            <br />
            crafted by <a href="http://html5up.net">HTML5 UP</a>.
          </h1>
        </div>
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projekty</Link>
        <Footer />
      </header>
    )
  }
}

export default Header
