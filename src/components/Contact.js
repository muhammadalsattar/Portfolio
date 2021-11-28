import React from 'react'

const Contact = () => (
    <div className="section contact">
          <h2>Contact</h2>
          <form className="contact-form">
            <div className="form-floating mb-3">
              <textarea className="form-control rounded-0" placeholder="Leave a message here" id="floatingTextarea"></textarea>
              <label htmlFor="floatingTextarea">Message</label>
            </div>
            <div className="contact-inline">
              <div className="form-floating">
                <input type="text" className="form-control rounded-0" id="floatingInput" placeholder="name@example.com"></input>
                <label htmlFor="floatingInput">Full Name</label>
              </div>
              <div className="form-floating">
                <input type="email" className="form-control rounded-0" id="floatingPassword" placeholder="Password"></input>
                <label htmlFor="floatingPassword">Email Address</label>
              </div>
              <button type="submit" className="btn btn-light rounded-0">Submit</button>
            </div>
          </form>
        </div>
)

export default Contact;