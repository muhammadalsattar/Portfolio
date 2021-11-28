import React from 'react'
import ProjectCard from './ProjectCard';
import {BsGithub} from 'react-icons/bs'

const Projects = () => (
    <div className="section projects">
          <h2>Projects</h2>
          <div className="row">
            <ProjectCard
            name={"CS50 Finance"}
            details={"CS50X week 9 project, Finance. Users can create accounts to start query stock quotes and get realtime information from IEX api. Users can also buy and sell quotes. Users also able to view all transactions and update their account information."}
            tools={"HTML. CSS. Python. Flask. SQLite"}
            />
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">CS50 Finance</h4>
                  <p className="card-text">CS50X week 9 project, Finance. Users can create accounts to start query stock quotes and get realtime information from IEX api. Users can also buy and sell quotes. Users also able to view all transactions and update their account information.</p>
                  <a href="#" className="btn btn-link"><h4><BsGithub/></h4></a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. Python. Flask. SQLite</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Maily</h4>
                  <p className="card-text">CS50W2020 week 5 project. Maily is a front-end email client where user can create account, send emails, reply to emails, and archive or unarchive emails. All mails are stored inside the project database. Mails are sent, recieved and updated using the application API.</p>
                  <a href="#" className="btn btn-link"><h4><BsGithub/></h4></a>

                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. JavaScript. Python. Django. SQLite</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Hangman</h4>
                  <p className="card-text">As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp by Andrew Mead, I've built, Hangman, a word guessing game.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. ES6. Babel. Webpack</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Sir Magdi Yakoup</h4>
                  <p className="card-text">CS50W2018 week 1 project: Its the first project I've ever worked on. A simple portfolio website for Dr.Magdi Yakoup.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. SASS</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Todo App</h4>
                  <p className="card-text">As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp course, I've built, Todo App, a web application helps you to keep your tasks organized.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. ES6. Babel. Webpack</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Weather journal</h4>
                  <p className="card-text">Weather jornal app is part of the 'Front End Web Development Professional Nanodegree Program' from Udacity. It asynchronously fetches the OpenWeatherMap API to get live weather data by city zipcode.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. ES6. Node. Express</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Explore Egypt</h4>
                  <p className="card-text">CS50x course: week 8 (homepage). Explore Egypt simply provides a brief look at Egypt's geography, government, economy, and main cities.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. ES6</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Notes App</h4>
                  <p className="card-text">As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp course, I've built, Notes App, a note-taking web application.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. ES6. Babel. Webpack</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Encyclopedia</h4>
                  <p className="card-text">CS50W2020: Week 3 project. Encyclopedia is a wikipedia-like web application.Users can view, search, edit, and create entries.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. Python. Django. SQLite</small>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Deal</h4>
                  <p className="card-text">CS50W2020: Week 4 project. Deal is an ebay-like website. Users can sell and buy goods and products. Users can create a listing with, close auction anytime, place a bid on any listing, add any listing to their watchlist, add comments on listings, and control thier auctions.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <div className="card-footer">
                  <small className="text-muted">HTML. CSS. Python. Django. SQLite</small>
                </div>
              </div>
            </div>
          </div>
        </div> 
)

export default Projects;