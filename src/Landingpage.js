import React, {Component} from 'react';
import Typed from 'typed.js';


class Landingpage extends Component {
    componentDidMount(){
        var typed = new Typed(".animatedMessage", {
            strings: ["Are you looking for a developer? ", "Are you looking for a designer?", "Are you looking for creative IT solutions?"],
            smartBackspace: true, // Default value
            typeSpeed: 100,
            backSpeed: 100,
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
                <div className="skillIcons">
                    <i class="fab fa-github fa-fw"></i>
                    <i class="fab fa-twitter fa-fw"></i>
                    <i class="fab fa-linkedin-in fa-fw"></i>
                    <i class="fab fa-instagram fa-fw"></i>
                </div>
               
            </div>

        )
            
        
    }

}


export default Landingpage; 