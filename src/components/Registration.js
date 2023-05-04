import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Registration = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xiectq8', 'template_6f6y7io', form.current, 'jlvn9xBiUTISdQ3Fq')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit" value="Send">Click here</button>
        </form>
        </div>
    )
}

export default Registration