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
                <h3>
                A Self Taught Full Stack Engineer with a great passion for building web solutions. I've recently developed a REST API and a Real-Time Chat application with Express and SocketIO. I hope to utilize my eagerness for problem-solving in creating robust web applications.
                </h3>
                <div className="alert alert-light" role="alert" onClick={this.hide}>
                    <h5><MdDone/> Thank you for coming by! see you soon</h5> 
                </div>
            </div>
        )
    }
}

export default Intro;