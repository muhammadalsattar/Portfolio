import React from 'react'
import ProjectCard from './ProjectCard';

class Projects extends React.Component {
  seeMore = (e)=>{
    const btn = e.target
    const div = document.querySelector('.projects .more')
    if (btn.textContent === 'See More')
    {
      btn.textContent = 'See Less'
      div.style.display = 'flex'
      div.style.opacity = 1
    }
    else
    {
      btn.textContent = 'See More'
      div.style.display = 'none'
      div.style.opacity = 0
    }
  }
  render(){
    return(
      <div className="section projects">
      <h2>Projects</h2>
      <div className="row">
        <ProjectCard
          name={"Space"}
          href={"https://github.com/muhammadalsattar/Space"}
          details={"Space is a real-time chat application built with socketIO, Node, and Express. Space was part of The Complete Node.js Developer Course (3rd Edition) by Andrew Mead on Udemy."}
          tools={"ES6. Node. Express. SocketIO. HTML. CSS. Bootstrap"}
        />
        <ProjectCard
          name={"Forecast"}
          href={"https://github.com/muhammadalsattar/Forecast24"}
          details={"Forecast is a NodeJS application for fetching and redering dynamic weather data. Forecast was a part of The Complete Node.js Developer Course (3rd Edition) by Andrew Mead on Udemy."}
          tools={"Node. NPM. Asynchronous programming. ES6/ES7. Express. Heroku"}
        />
        <ProjectCard
          name={"Task Manager API"}
          href={"https://github.com/muhammadalsattar/task-manager-api"}
          details={"A NodeJS task manager application REST API. This project is part of The Complete Node.js Developer Course (3rd Edition) by Andrew Mead on Udemy."}
          tools={"NodeJS. NPM. Express. ES6/ES7. Asynchronous programming. MongoDB. Mongoose. JWT Authentication. File and image uploads. Email sending. REST API Design. Testing"}
        />
        <ProjectCard
          name={"Notes App"}
          href={"https://github.com/muhammadalsattar/command-line-notes"}
          details={"A NodeJS Command-line note-taking application with fs library to read and write files to the file system. This application is part of The Complete Node.js Developer Course (3rd Edition) by Andrew Mead on Udemy."}
          tools={"Node. ES6/ES7. Express. FS"}
        />
        <div className='more'>
        <ProjectCard
            name={"Storefront API"}
            href={"https://github.com/muhammadalsattar/storefront-api"}
            details={"Storefront RESTful API with Postgres database."}
            tools={"ES6. NodeJS. TypeScript. Jasmine. Postgres"}
          />
          <ProjectCard
            name={"Indecision"}
            href={"https://github.com/muhammadalsattar/Indecision-App"}
            details={"My first project with React. A desicion-making application where user can add options and let the app pick one for him every time."}
            tools={"React. JSX. Babel. Webpack. SASS"}
          />
          <ProjectCard
            name={"Expensify"}
            href={"https://github.com/muhammadalsattar/Expensify-App"}
            details={"An application to help you track your expenses. I've built it as part of Kalbonyan Al-Marsos initiative and The Complete React Developer Course (w/ Hooks and Redux)."}
            tools={"React. Redux. Webpack. Babel. Jest. Enzyme. Firebase. Authentication. ES6/ES7. Heroku"}
          />

          <ProjectCard
            name={"Porfolio"}
            href={"https://github.com/muhammadalsattar/Portfolio"}
            details={"This is my submission for the CS50x2021 final project. A portfolio website for myself with ReactJS and NodeJS."}
            tools={"HTML. CSS. ES6. ReactJS. NodeJS. SASS"}
          />
          <ProjectCard
            name={"CS50 Finance"}
            href={'https://github.com/muhammadalsattar/cs50finance'}
            details={"CS50X week 9 project, Finance. Users can create accounts to start query stock quotes and get realtime information from IEX api. Users can also buy and sell quotes. Users also able to view all transactions and update their account information."}
            tools={"HTML. CSS. Python. Flask. SQLite"}
          />
          <ProjectCard
            name={"Hangman"}
            href={"https://github.com/muhammadalsattar/Hangman"}
            details={"As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp by Andrew Mead, I've built, Hangman, a word guessing game."}
            tools={"HTML. CSS. ES6. Babel. Webpack"}
          />
          <ProjectCard
            name={"Sir Magdi Yakoup"}
            href={"https://github.com/muhammadalsattar/Sir-Magdi-Yakoup"}
            details={"CS50W2018 week 1 project: Its the first project I've ever worked on. A simple portfolio website for Dr.Magdi Yakoup."}
            tools={"HTML. CSS. SASS"}
          />
          <ProjectCard
            name={"Todo App"}
            href={"https://github.com/muhammadalsattar/To-Do"}
            details={"As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp course, I've built, Todo App, a web application helps you to keep your tasks organized."}
            tools={"HTML. CSS. ES6. Babel. Webpack"}
          />
          <ProjectCard
          name={"Maily"}
          href={"https://github.com/muhammadalsattar/Maily"}
          details={"CS50W2020 week 5 project. Maily is a front-end email client where user can create account, send emails, reply to emails, and archive or unarchive emails. All mails are stored inside the project database. Mails are sent, recieved and updated using the application API."}
          tools={"HTML. CSS. JavaScript. Python. Django. SQLite"}
          />
          <ProjectCard
            name={"Weather journal"}
            href={"https://github.com/muhammadalsattar/Weather-journal"}
            details={"Weather jornal app is part of the 'Front End Web Development Professional Nanodegree Program' from Udacity. It asynchronously fetches the OpenWeatherMap API to get live weather data by city zipcode."}
            tools={"HTML. CSS. ES6. Node. Express"}
          />
          <ProjectCard
            name={"Explore Egypt"}
            href={"https://github.com/muhammadalsattar/Explore-Egypt"}
            details={"CS50x course: week 8 (homepage). Explore Egypt simply provides a brief look at Egypt's geography, government, economy, and main cities."}
            tools={"HTML. CSS. ES6"}
          />
          <ProjectCard
            name={"Notes App"}
            href={"https://github.com/muhammadalsattar/Notes"}
            details={"As part of Kalbonyan Almarsos program and The Modern JavaScript Bootcamp course, I've built, Notes App, a note-taking web application."}
            tools={"HTML. CSS. ES6. Babel. Webpack"}
          />
          <ProjectCard
            name={"Encyclopedia"}
            href={"https://github.com/muhammadalsattar/Encyclopedia"}
            details={"CS50W2020: Week 3 project. Encyclopedia is a wikipedia-like web application.Users can view, search, edit, and create entries."}
            tools={"HTML. CSS. Python. Django. SQLite"}
          />
          <ProjectCard
            name={"Deal"}
            href={"https://github.com/muhammadalsattar/Deal"}
            details={"CS50W2020: Week 4 project. Deal is an ebay-like website. Users can sell and buy goods and products. Users can create a listing with, close auction anytime, place a bid on any listing, add any listing to their watchlist, add comments on listings, and control thier auctions."}
            tools={"HTML. CSS. Python. Django. SQLite"}
          />
        </div>
        <button className='mx-auto my-4' id='morebtn' onClick={this.seeMore} >See More</button>
      </div>
    </div>
    )
  }
}

export default Projects;