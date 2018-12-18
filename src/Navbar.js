import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
 


class Navbar extends Component {

    scrollToBottom() {
        scroll.scrollToBottom();
      }

    scrollToAbout(){
        scroll.scrollTo('skillsContainer')
    }


    render() {
        return (
            <div className="headerContainer">
                <div className="headerLeft">
                    <a href="/" id="nameAnchor"> James./Merrigan</a>
                </div>
                <div className="headerRight">
                    <a onClick={this.scrollToAbout} >About</a>
                    <a href="/">Skills</a>
                    <a href="/">Contact</a>
                </div>
           </div>
        )
    }



}


export default Navbar;