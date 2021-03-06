import React, { Component } from 'react'
import { Document, Page } from 'react-pdf'
import pdf from '../assets/pdf/cv-kamil-luc.pdf'
import Layout from '../components/layout'
import Helmet from 'react-helmet'

class Cv extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
    this.myInput = React.createRef()

  }
  componentDidMount () {
    console.log(this.myInput.current.offsetWidth)
  }
  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  render() {
    const { pageNumber, numPages } = this.state
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'
    const width = document.getElementById('one').offsetWidth;


    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one" ref={this.myInput}>
            <a href={pdf} downlaod>
              Pobierz CV
            </a>
            <Document file={pdf} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={width} />
            </Document>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              Accumsan pellentesque commodo blandit enim arcu non at amet id
              arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi
              lorem vulputate lorem neque lorem ipsum dolor.
            </p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form
                  action="mailto:someone@example.com"
                  method="post"
                  action="#"
                >
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    1234 Somewhere Rd.
                    <br />
                    Nashville, TN 00000
                    <br />
                    United States
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    000-000-0000
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="#">hello@untitled.tld</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Cv
