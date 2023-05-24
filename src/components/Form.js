import React, { useRef, useState, } from 'react'
import emailjs from '@emailjs/browser';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

export const Test = () => {
    const form = useRef();
    const navigate = useNavigate();

    const colRef = collection(db, 'sttelemedia')
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        name: "",
        phoneNumber: "",
        department: "",
        email: "",
    })

    function makeNameNice(firstName, lastName, email) {
        const firstNameWords = firstName.split(" ")
        const lastNameWords = lastName.split(" ")

        for (let i = 0; i < firstNameWords.length; i++) {
            firstNameWords[i] = firstNameWords[i].toLowerCase()
            firstNameWords[i] = firstNameWords[i][0].toUpperCase() + firstNameWords[i].substr(1);
        }

        for (let i = 0; i < lastNameWords.length; i++) {
            lastNameWords[i] = lastNameWords[i].toLowerCase()
            lastNameWords[i] = lastNameWords[i][0].toUpperCase() + lastNameWords[i].substr(1);
        }
        
        let doneFirstName = firstNameWords.join(" ")
        let doneLastName = lastNameWords.join(" ")
        let doneEmail = email.toLowerCase()
        const name = doneFirstName + " " + doneLastName

        formData.name = name
        formData.firstName = doneFirstName
        formData.lastName = doneLastName
        formData.email = doneEmail
    }
    
    const sendEmail = (e) => {
        e.preventDefault()

        makeNameNice(formData.firstName, formData.lastName, formData.email)

        try {
            addDoc(colRef, {formData})        
            try {
                emailjs.sendForm('service_xiectq8', 'template_6f6y7io', form.current, 'jlvn9xBiUTISdQ3Fq')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            } catch(e) {
                toast.error('Registration was unsuccessful, please try again.', {
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: 0,
                    theme: "light",
                    })
                return
            }
        } catch(e) {
            toast.error('Registration was unsuccessful, please try again.', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                })
            return
        }

        toast.success('Thank you for registering! A confirmation email will be sent to you shortly!', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            })
            
        navigate('/');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='bg-white rounded-lg p-10'>
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input name="user_firstName" type="text" onChange={(e) => setFormData({...formData, firstName: e.target.value})} value={formData.firstName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required />
                <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="user_lastName" type="text" onChange={(e) => setFormData({...formData, lastName: e.target.value})} value={formData.lastName} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input name="phoneNumber" type="text" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} pattern="[0-9]{8}"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (e.g. 91234567)</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="department" type="text" onChange={(e) => setFormData({...formData, department: e.target.value})} value={formData.department} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
            </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input name="user_email" type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>     
        {/*<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>*/}
    </form>
  );
};

export default Test