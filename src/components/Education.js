import React from 'react'
import EducationCard from './EducationCard';
import {SiUdemy, SiEdx, SiLinkedin, SiUdacity} from 'react-icons/si';

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
        icon={<SiUdemy/>}
        name={"The Complete React Developer Course (w/ Hooks and Redux)"}
        college={"Udemy. January 2022"}
        />
        <EducationCard
        icon={<SiEdx/>}
        name={"CS50's Introduction to Computer Science"}
        college={"CS50. December 2021"}
        />
        <EducationCard
          icon={<SiUdemy/>}
          name={"The Modern JavaScript Bootcamp"}
          college={"Udemy. October 2021"}
        />
        <EducationCard
        icon={<SiLinkedin/>}
        name={"Programming Foundations: Object-Oriented Design"}
        college={"LinkedIn. Septemper 2021"}
        />
        <div className='more'>
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Fundamentals"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Beyond the Fundamentals"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Data Structures"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Algorithms"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Design Patterns"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Databases"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: APIs and Web Services"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Programming Foundations: Software Testing/QA"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"Git Essential Training: The Basics"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"HTML Essential Training"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiLinkedin/>}
          name={"CSS Essential Training"}
          college={"LinkedIn. Septemper 2021"}
          />
          <EducationCard
          icon={<SiUdacity/>}
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