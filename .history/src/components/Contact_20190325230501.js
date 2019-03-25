import React from 'react'

class Contact extends React.Component {
  render() {
    return (
      <section id="three">
        <h2>Napisz do mnie</h2>
        <p />
        <div className="row">
          <div className="8u 12u$(small)">
            <form action="mailto:kamilluc@outlook.com" method="post">
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Twoje Imię"
                  />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Twój Email"
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Wiadomość"
                    rows="4"
                  />
                </div>
              </div>
              <br />
              <ul className="actions">
                <li>
                  <input type="submit" value="Wyślij Wiadomość" />
                </li>
              </ul>
            </form>
          </div>
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Adres</span>
                </h3>
                Miasteczko AGH
                <br />
                Kraków
              </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                +48 731 584 128
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="#">kamilluc@outlook.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
