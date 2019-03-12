import React, { Component } from 'react'
// import Layout from '../components/layout'
// import Helmet from 'react-helmet'
// import Contact from '../components/Contact'
import { StaticQuery, graphql } from 'gatsby'

const Projects = () => (
  <StaticQuery
    query={graphql`
      {
        project {
          projects {
            id
            title
            subtitle
            description
            technologies
            github
            demo
            image {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        Hello world!
        {console.log(data)}
      </div>
    )}
  />
)

{
  /*

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
} */
}

export default Projects
