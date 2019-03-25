import React from 'react'
import { Link } from 'gatsby'
class Footer extends React.Component {
  render() {
    const date = new Date()

    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="https://github.com/kamilluc" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <Link to="/" className="icon fa-dribbble">
                <span className="label">Portfolio</span>
              </Link>
            </li>
            <li>
              <a href="#" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
              <form
                action="mailto:someone@example.com"
                method="post"
                enctype="text/plain"
              />
            </li>
          </ul>
          <ul className="copyright">
            <li>Copyright &copy; {date.getYear() + 1900} Kamil Łuc</li>
            <li>
              Witryna stworzona w{' '}
              <a href="https://www.gatsbyjs.org/">GatsbyJS</a> 👌
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
