import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import ProjectList from '../components/ProjectList'

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
    render={data => <ProjectList data={data} />}
  />
)

export default Projects
