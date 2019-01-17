import React, {Component} from 'react';

 
 


class Navbar extends Component {

    
    scrollToAbout(e){
        e.preventDefault();
      document.querySelector(".aboutItems").scrollIntoView({ behavior: 'smooth'});
    }

    scrollToSkills(e){
        e.preventDefault();
      document.querySelector("#skillsContainer").scrollIntoView({ behavior: 'smooth'});
    }

    scrollToProjects(e){
        e.preventDefault();
      document.querySelector("#projectContainer").scrollIntoView({ behavior: 'smooth'});
    }

    scrollToContact(e){
        e.preventDefault();
      document.querySelector("#contactPage").scrollIntoView({ behavior: 'smooth'});
    }


    render() {
        return (
            <div className="headerContainer">
                <div className="headerLeft">
                    <a href="/" id="nameAnchor"> James./Merrigan</a>
                </div>
                <div className="headerRight">
                    <a href="/" onClick={this.scrollToAbout} >About</a>
                    <a href="/" onClick={this.scrollToSkills}>Skills</a>
                    <a href="/" onClick={this.scrollToProjects}>Projects</a>
                    <a href="/" onClick={this.scrollToContact}>Contact</a>
                </div>
           </div>
        )
    }



}


export default Navbar;