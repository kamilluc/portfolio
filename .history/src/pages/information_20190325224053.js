import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Contact from '../components/Contact'

class Information extends React.Component {
  constructor() {
    super()
  }

  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                Kontakt
                <br />
              </h2>
            </header>
            <p />
          </section>

          <Contact />
        </div>
      </Layout>
    )
  }
}

export default Information
