import React, {Component} from 'react';


class Projects extends Component {

    render(){
        return (
            <div id="projectContainer">
               
                <div className="projectCard">
                    <a href="https://github.com/jmerrigan/react-portfolio" rel="noopener noreferrer" target="_blank"><img src="screenshots/design-screenshot.png" alt="React profile "></img></a>
                    <h3>React Portfolio</h3>
                    <p>This very site. Created using React.</p>
                    
                </div>
                <div className="projectCard">
                    <a href="https://github.com/jmerrigan/allgoodbrew" rel="noopener noreferrer" target="_blank"><img src="screenshots/agb-front.png" alt="Two Sided Beer Marketplace"></img></a>
                    <h3>All Good Brew - Two Sided Marketplace</h3>
                    <p>Online marketplace where users can buy and sell craft beer. Created using Rails and a Postgresql database.</p>
                </div>
                <div className="projectCard">
                    <a href="https://github.com/jmerrigan/terminalapp" rel="noopener noreferrer" target="_blank"><img src="screenshots/mymdb.png" alt="Ruby Terminal Movie Database"></img></a>
                    <h3>MyMDB - Terminal Movie Database</h3>
                    <p>A Ruby project that runs in Terminal. This tool fetches movie data via the OMDb API - A user is able to grab data about a specific film, or have a movie suggested to them via the interface.</p>
                </div>

            </div>
        )
    }

}

export default Projects;
