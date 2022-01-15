import React from 'react'
import EducationCard from './EducationCard';

class Education extends React.Component {

  seeMore = (e)=>{
    const btn = e.target
    const div = document.querySelector('.education .more')
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
      <div className="section education">
      <h2 className="mb-5">Education & Certificates</h2>
      <div className="row">
        <EducationCard
        name={"CS50's Introduction to Computer Science"}
        college={"CS50. December 2021"}
        />
        <EducationCard
        name={"Programming Foundations: Fundamentals"}
        college={"LinkedIn. Septemper 2021"}
        />
        <EducationCard
        name={"Programming Foundations: Beyond the Fundamentals"}
        college={"LinkedIn. Septemper 2021"}
        />
        <EducationCard
        name={"Programming Foundations: Object-Oriented Design"}
        college={"LinkedIn. Septemper 2021"}
        />
        <div className='more'>
          <EducationCard
          name={"Programming Foundations: Data Structures"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"Programming Foundations: Algorithms"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"Programming Foundations: Design Patterns"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"Programming Foundations: Databases"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"Programming Foundations: APIs and Web Services"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"Programming Foundations: Software Testing/QA"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"Git Essential Training: The Basics"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"HTML Essential Training"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"CSS Essential Training"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          name={"The Modern JavaScript Bootcamp"}
          college={"Udemy. October 2021"}
          />
          <EducationCard
          name={"Front End Web Development Professional Nanodegree Program"}
          college={"Udacity. July 2021"}
          />
        </div>
        <button className='mx-auto my-4' id='morebtn' onClick={this.seeMore} >See More</button>
      </div>
    </div>
    )
  }
}



export default Education;