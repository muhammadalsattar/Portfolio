import React from 'react'
import SkillsCard from './SkillsCard';
import {BsCircleFill, BsCircle} from 'react-icons/bs';

class Skills extends React.Component {
  seeMore = (e)=>{
    const btn = e.target
    const div = document.querySelector('.skills .more')
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
    return (
      <div className="skills">
      <h2>Skills</h2>
      <div className="row">
        <SkillsCard
        title='AWS'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='TypeScript'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='Node'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='MongoDB/Mongoose'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='Jest/Enzyme/Jasmine'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='REST APIs'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <div className='more'>
        <SkillsCard
        title='CI/CD'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='Express'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='HTML5'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='CSS3'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='SASS'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='ES6'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircleFill/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='Python'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='React'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='Flask'
        level={<mark><BsCircleFill/> <BsCircle/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='MySQL/PostgreSQL'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        <SkillsCard
        title='Git'
        level={<mark><BsCircleFill/> <BsCircleFill/> <BsCircle/> <BsCircle/></mark>}
        />
        </div>
        <button className='mx-auto my-4' id='morebtn' onClick={this.seeMore} >See More</button>
      </div>
    </div>
    )
  }
}

export default Skills;