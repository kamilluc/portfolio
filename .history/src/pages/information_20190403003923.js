import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Contact from '../components/Contact'

class Information extends React.Component {
  render() {
    const siteTitle = 'Kamil Łuc - Kontakt'
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
              <h1>Kontakt</h1>
              <hr />
            </header>
          </section>
          <div>
            {' '}
            <Contact />
          </div>
        </div>
      </Layout>
    )
  }
}

export default Information
