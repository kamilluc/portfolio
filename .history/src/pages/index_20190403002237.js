import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Contact from '../components/Contact'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Kamil Łuc'
    const siteDescription = 'Kamil Łuc - Student, Software Developer, Kraków'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main" className="move-to-top">
          <section id="one">
            <header className="major">
              <h2>
                <Link to="/">Kamil Łuc</Link>
              </h2>
            </header>
            <p>
              Student informatyki stosowanej (AGH) z Krakowa, od roku również
              inżynier. Zainteresowany technologią webową. Obecnie szukam pracy
              w solidnym zespole aby zdobyć komercyjne doświadczenie.
            </p>
            <hr />

            <h2>Umiejętności</h2>
            <p className="techs">
              JavaScript, React, Gatsby, REST, HTTP,
              <br />
              HTML, CSS, Bootstrap, GIT, Node, <br />
              Express, Java, JavaFX, SQL, JIRA
              <br />
            </p>
          </section>

          <ul className="actions">
            <li>
              <Link to="/projects" className="button">
                Pełna lista projektów
              </Link>
            </li>
            <li>
              <Link to="/cv" className="button">
                CV
              </Link>
            </li>
            <li>
              <a href="https://github.com/kamilluc" className="button">
                GitHub
              </a>
            </li>
          </ul>
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
