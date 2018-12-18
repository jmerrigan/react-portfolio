import React, {Component} from 'react';


class Skills extends Component {

    render() {
        return (
            <div id="skillsContainer">
                <div id="skillsHeading">
                    <h2>Tools I like to use</h2>
                </div>
                <div id="skillsIcons">
                    <i className="fab fa-react fa-fw"></i>
                    <i className="fab fa-node fa-fw"></i>
                    <i className="fab fa-js-square fa-fw"></i>
                    <i className="fab fa-html5 fa-fw"></i>
                    <i className="fab fa-css3-alt fa-fw"></i>
                </div>
            </div>
        )
    }

}

export default Skills;