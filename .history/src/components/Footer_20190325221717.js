import React from 'react'

class Footer extends React.Component {
  render() {
    const date = new Date()

    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
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
