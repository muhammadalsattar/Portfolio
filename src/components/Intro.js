import React from 'react'
import {MdDone} from 'react-icons/md'

class Intro extends React.Component{
    hide(){
        document.querySelector('.alert-light').style.display = 'none';
    }
    render(){
        return(
            <div className="intro">
                <h1>Muhammad Abd-Elsattar</h1>
                <h3>A JavaScript full-stack developer with solid experience in JavaScript and Python. I am looking forward to secure my first position as a junior full-stack developer, as I've spent the past two years working on my skills and building new projects.
                </h3>
                <div className="alert alert-light" role="alert" onClick={this.hide}>
                    <h5><MdDone/> Thank you for coming by and for your kind words! see you soon</h5> 
                </div>
            </div>
        )
    }
}

export default Intro;