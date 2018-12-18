import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
 


class Navbar extends Component {

    scrollToBottom() {
        scroll.scrollToBottom();
      }


    render() {
        return (
            <div className="headerContainer">
                <div className="headerLeft">
                    <a href="/" id="nameAnchor"> James./Merrigan</a>
                </div>
                <div className="headerRight">
                    <a onClick={this.scrollToBottom} >About</a>
                    <a href="/">Resume</a>
                </div>
           </div>
        )
    }



}


export default Navbar;