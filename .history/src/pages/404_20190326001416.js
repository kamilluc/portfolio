import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
const NotFoundPage = () => (
  <Layout>
    <div id="main" className="move-to-top">
      <section id="one">
        <header className="major">
          <h1>404</h1>
        </header>
        <p>Taka podstrona nie istnieje</p>
        <Link to="/">Powrót do strony Głównej</Link>
      </section>

      <Contact />
    </div>
  </Layout>
)

export default NotFoundPage
