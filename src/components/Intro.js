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
                    Self-Taught Full-Stack Engineer with a passion for building web solutions. I am eager to develop my skills consistently and I am looking forward to creating more robust web applications.</h3>
                <div className="alert alert-light" role="alert" onClick={this.hide}>
                    <h5><MdDone/> Thank you for coming by! see you soon</h5> 
                </div>
            </div>

        )
    }
}

export default Intro;