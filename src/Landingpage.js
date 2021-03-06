import React, {Component} from 'react';
import Typed from 'typed.js';


class Landingpage extends Component {
    componentDidMount(){
        const typed = new Typed(".animatedMessage", {
            strings: ["Are you looking for a developer? ", "Are you looking for a designer?", "Are you looking for creative IT solutions?"],
            smartBackspace: true, // Default value
            typeSpeed: 75,
            backSpeed: 25,
            backDelay: 800,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: ' |',


          });
    }

    render() {

        return (
            <div id="welcomeMessage">
                <h1 id="welcome">A Full Stack Developer in Melbourne, Australia</h1>
                <span><h3 className="animatedMessage"></h3></span>
                <div className="socialIcons">
                    <a href="https://github.com/jmerrigan"><i className="fab fa-github fa-fw"></i></a>
                    <a href="https://twitter.com/MerriganJames?lang=en"><i className="fab fa-twitter fa-fw"></i></a>
                    <a href="https://www.linkedin.com/in/merriganjames/"><i className="fab fa-linkedin-in fa-fw"></i></a>
                    <a href="https://www.instagram.com/merrigan92/?hl=en"><i className="fab fa-instagram fa-fw"></i></a>
                </div>
               
            </div>

        )
            
        
    }

}


export default Landingpage; 