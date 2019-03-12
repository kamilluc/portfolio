import React, { Component } from 'react'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import Contact from '../components/Contact'

class Projects extends Component {
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
          <section id="one" ref={this.myInput}>
            <p>Moje projekty</p>
          </section>
          <Contact />
        </div>
      </Layout>
    )
  }
}

export default Projects
