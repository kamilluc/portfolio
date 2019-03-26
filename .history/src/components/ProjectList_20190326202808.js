import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class ProjectList extends React.Component {
  render() {
    const siteTitle = 'Kamil Łuc - Portfolio'
    const siteDescription = 'Kamil Łuc - Student, Software Developer, Kraków'
    const { data } = this.props
    const projects = data.project.projects
    const projs = projects.map(proj => (
      <div key={proj.id}>
        <h2>
          <a
            href={proj.github}
            className="icon fa-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="label">Github</span>
          </a>{' '}
          {proj.demo ? (
            <a
              href={proj.demo}
              className="icon fa-dribbble"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">Demo</span>
            </a>
          ) : null}{' '}
          {proj.title}
        </h2>
        <h4>{proj.subtitle}</h4>
        <img src={proj.image.url} alt={proj.title} width="100%" />
        <strong>Opis</strong>
        <p>{proj.description}</p>

        <strong>Technologie</strong>
        <p className="techs"> {proj.technologies}</p>
        <hr />
      </div>
    ))

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
        <div id="main" className="move-to-top">
          <section id="one">
            <header className="major">
              <h1>Moje projekty</h1>
              <hr />
            </header>
            {projs}
          </section>
        </div>
      </Layout>
    )
  }
}

export default ProjectList
