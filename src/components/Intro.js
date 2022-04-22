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
                <h3>Javascript full-stack developer skilled in building/testing REST APIs. Solid experience building full-stack websites/web applications with the MERN stack. Familiarity with Python/Django/Flask.
                </h3>
                <div className="alert alert-light" role="alert" onClick={this.hide}>
                    <h5><MdDone/> Thank you for coming by and for your kind words! see you soon</h5> 
                </div>
            </div>
        )
    }
}

export default Intro;