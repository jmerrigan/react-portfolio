import React, {Component} from 'react';


class Contact extends Component {

    render(){
        return(
            <div id="contactPage">
                <div id="contactTitle">
                    <h2>Get in touch!</h2>
                </div>
                <div id="contactFormContainer">
                    <form id="contactForm" method="post">
                        <input name="name" type="text" className="formField" placeholder="Your Name" required />
                        <input name="email" type="text" className="formField" placeholder="Your Email" required />
                        <input name="message" type="textarea" className="formField" placeholder="Message..." row="4" required />
                        <input type="submit" className="formField submit" value="Send Email" required />
                    
                    
                    </form>
                </div>

            </div>
        )
    }

}

export default Contact;