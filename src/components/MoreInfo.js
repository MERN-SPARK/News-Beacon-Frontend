import React, { Component , useRef} from 'react'
import emailjs from 'emailjs-com';
import emailstyle from "./emailstyle.css"

export class MoreInfo extends Component {
    render() {

        function sendEmail (e) {
          e.preventDefault();
      
          emailjs.sendForm('service_3ywcai5', 'template_kz4wyy7', e.target, 'user_0EuDpkMo2DsYTJbm2k8fz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };
      
        return (
            <form onSubmit={sendEmail} className="tests">      
            <input name="name" type="text" class="feedback-input" placeholder="Name" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <input name="title" type="text" class="feedback-input" placeholder="title of news" />
            <textarea name="message" class="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT" className="formemail"/>
          </form>
        );
    }
}

export default MoreInfo
