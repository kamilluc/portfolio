import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

const siteTitle = 'Kamil Łuc'
const siteDescription = 'Kamil Łuc - Student, Software Developer, Kraków'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>{siteTitle} - 404</title>
      <meta name="description" content={siteDescription} />
    </Helmet>
    <div id="main" className="move-to-top">
      <section id="one">
        <header className="major">
          <h1>404</h1>
        </header>
        <p>Taka podstrona nie istnieje</p>
        <Link to="/">Powrót do strony Głównej</Link>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
