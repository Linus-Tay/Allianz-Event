import React, { ChangeEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import readXlsxFile from 'read-excel-file'

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

    function myFunction(item) {
        try { 
            const docRef = addDoc(collection(db, "sttelemedia"), { uniqueNumber: item[0],
                                                                   uniqueQR: item[1],
                                                                   used: "no"})
            console.log("Document written with ID: ", docRef.id);
        } catch (err) { 
            console.error("Error adding document: ", err)
        }
    }

    const handleFileChange = (e) => {
        readXlsxFile(e.target.files[0]).then((rows) => {
            console.log(rows)
            rows.forEach(myFunction);
          })
    }

    const [information, setInformation] = useState("")


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

        <input type="file" onChange={handleFileChange} />
        </div>
    )
}

export default Registration