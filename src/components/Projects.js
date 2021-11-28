import React from 'react'

const Projects = () => (
    <div className="section projects">
          <h2>Projects</h2>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action" aria-current="true">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">CS50 Finance</h5>
              </div>
              <p className="mb-1">CS50X week 9 project, Finance. Users can create accounts to start query stock quotes and get realtime information from IEX api. Users can also buy and sell quotes. Users also able to view all transactions and update their account information.</p>
              <small>HTML. CSS. Python. Flask. SQLite</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Maily</h5>
              </div>
              <p className="mb-1">CS50W2020 week 3 project. Maily is a front-end email client where user can create account, send emails, reply to emails, and archive or unarchive emails. All mails are stored inside the project database. Mails are sent, recieved and updated using the application API.</p>
              <small>HTML. CSS. JavaScript. Python. Django. SQLite</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Hangman</h5>
              </div>
              <p className="mb-1">As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp by Andrew Mead, I've built, Hangman, a word guessing game with ES6.</p>
              <small>HTML. CSS. ES6</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Sir Magdi Yakoup</h5>
              </div>
              <p className="mb-1">CS50W2018 week 1 project: Its the first website I've ever </p>
              <small className="text-muted">tools</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
              </div>
              <p className="mb-1">description</p>
              <small className="text-muted">tools</small>
            </a>
          </div>
        </div> 
)

export default Projects;