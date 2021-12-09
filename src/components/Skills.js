import React from 'react'
import SkillsCard from './SkillsCard';

class Skills extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', ()=> {
      console.log(document.querySelector('.skills .row').getBoundingClientRect().y + window.innerHeight)
      console.log(window.scrollY)
      if (document.querySelector('.skills .row').getBoundingClientRect().y + window.innerHeight < window.scrollY){
        document.querySelector('.skills .row').style.animationPlayState = 'running'
      }
    })
  }
  render(){
    return (
      <div className="skills">
      <h2>Skills</h2>
      <div className="row">
        <SkillsCard
        title='HTML5'
        level='Excellent'
        />
        <SkillsCard
        title='CSS3'
        level='Excellent'
        />
        <SkillsCard
        title='SASS'
        level='Excellent'
        />
        <SkillsCard
        title='ES6'
        level='Very Good'
        />
        <SkillsCard
        title='Python'
        level='Very Good'
        />
        <SkillsCard
        title='React'
        level='Good'
        />
        <SkillsCard
        title='Flask'
        level='Good'
        />
        <SkillsCard
        title='SQL'
        level='Very Good'
        />
        <SkillsCard
        title='Git'
        level='Good'
        />
      </div>
    </div>
    )
  }
}

export default Skills;