import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section id="three">
        <h2>Napisz do mnie</h2>
        <p />
        <div className="row">
          <div className="8u 12u$(small)">
            <form
              action="mailto:kamilluc@outlook.com"
              method="post"
              enctype="text/plain"
            >
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" placeholder="Name" />
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
                <input type="submit" value="Wyślij Wiadomość" />
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
    )
  }
}

export default Contact
