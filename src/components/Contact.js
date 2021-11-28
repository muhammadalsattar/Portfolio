import React from 'react'

const Contact = () => (
    <div className="section contact">
          <h2>Contact</h2>
          <form id="contact-form">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
              <label for="floatingInput">Full Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingPassword" placeholder="Password"></input>
              <label for="floatingPassword">Email Address</label>
            </div>
            <div className="form-floating">
              <textarea className="form-control" placeholder="Leave a message here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Message</label>
            </div>
            <button type="submit" className="btn btn-primary mb-3">Submit</button>
          </form>
        </div>
)

export default Contact;