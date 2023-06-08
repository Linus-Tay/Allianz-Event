import React, { useRef, useState, } from 'react'
import Modal from 'react-modal';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import tShirt from './images/tshirt.png'
import tankTop from './images/tank top.png'
import tShirtSizeChart from './images/tshirt size chart.jpeg'
import tankTopSizeChart from './images/tank top size chart.jpeg'
import emailjs from '@emailjs/browser';

export const Test = () => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-40%',
          transform: 'translate(-50%, -50%)',
          height: 'auto'
        },
      };
      

    const [modalIsOpen, setIsOpen] = useState(false);
    const [openWhich, setOpenWhich] = useState()

    function closeModal() {
        setIsOpen(false)
        setOpenWhich("")
    }
    
    const form = useRef();

    const navigate = useNavigate();

    const colRef = collection(db, 'sttelemedia')
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        nric: "",
        email: "",
        attending: "",
        accommodation: "",
        parking: "",
        standUpPaddleBoarding: "No",
        kayakSingle: "No",
        kayakDouble: "No",
        bananaBoatRide: "No",
        donutRide: "No",
        dietaryRestriction: "",
        tShirt: "No",
        tankTop: "No",
    })

    function makeNameNice(fullname, email, theNric) {
        try {
            const fullNameList = fullname.split(" ")
        
            for (let i = 0; i < fullNameList.length; i++) {
                fullNameList[i] = fullNameList[i].toLowerCase()
                fullNameList[i] = fullNameList[i][0].toUpperCase() + fullNameList[i].substr(1);
            }
    
            let doneFullName = fullNameList.join(" ")
            let doneEmail = email.toLowerCase()
            let doneNric = theNric.toUpperCase()
    
            formData.name = doneFullName
            formData.email = doneEmail
            formData.nric = doneNric
            setFormData({...formData, name: doneFullName}) 
        } catch {
        
            toast.error('Registration was unsuccessful. Please refresh the page and manually key in your details and try again. If the error persists, please contact support', {
                position: "top-right",
                autoClose: false,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
                theme: "light",
                })
            
        }
    }
    
    const sendEmail = (e) => {
        e.preventDefault()

        makeNameNice(formData.name, formData.email, formData.nric)
        addDoc(colRef, {formData})   

        /*try {
            try {   
                emailjs.sendForm('service_0vx2lmc', 'template_6f6y7io', form.current, 'jlvn9xBiUTISdQ3Fq')
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

            
        navigate('/');

        setTimeout(() => {
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
          }, 1);*/
  };

  const handleOpen = (e) => {
    setIsOpen(true)
    setOpenWhich(e.target.value)
  }

  function HandleModal () {
    if (openWhich === 'tShirt') {
        return <div className='text-center'><img className='pb-8 w-full' src={tShirtSizeChart} alt=""/><button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={closeModal}>Close</button></div>
    } else if (openWhich === 'tankTop') {
        return <div className='text-center'><img className='pb-8' src={tankTopSizeChart} alt=""/><button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={closeModal}>Close</button></div>
    } else {
        return <div><p className='text-center text-lg font-bold py-4'>Terms and Conditions</p>
        <p className='py-4 text-justify'>“By submitting on this platform, I consent for Synonym Private Limited, STT GDC Pte Ltd, and associated parties (including third party service providers and representatives) (STT Persons) to collect, use, disclose, store, retain and/or process (“Use”) my personal data and information in the manner and for the purposes described in their respective personal data policies, <a className='text-blue-600 hover:underline dark:text-blue-500' href="https://www.sttelemediagdc.com/pdpa" rel="noreferrer" target="_blank">https://www.sttelemediagdc.com/pdpa</a>, and in particular for the purposes of processing, servicing and managing my orders and general administration in connection with the foregoing and contacting me at the contacts that I have provided. I confirm the accuracy of the information that I have furnished and further confirm that where I have furnished personal data of other individuals, I have obtained consent from such individuals to disclose such information, except to the extent that such consent is not required under relevant laws. I will indemnify STT Persons for any loss or damage that they may sustain from or in connection with the use of the information that I have furnished and will not hold them liable for any loss or damage that may be incurred by me.”</p>
        <div className='py-4 text-center'>
        <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={closeModal}>Close</button>
        </div></div>
    }
  }

  return (
    <form ref={form} autocomplete="off" onSubmit={sendEmail} className='bg-white rounded-lg p-10'>
        <ToastContainer/>
        <p className='font-bold py-4'>Please enter the necessary information below: </p>
        <div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="name" type="text" onInput={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required />
                <label for="floating_full_name" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                <p className='sttelemedia italic text-sm text-gray-600'>*as per NRIC or Identification Card</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
                <input name="nric" type="text" onInput={(e) => setFormData({...formData, nric: e.target.value})} value={formData.nric} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NRIC Number/ Identification Number</label>
                <p className='sttelemedia italic text-sm text-gray-600'>*for purpose of the Hotel arrangement and Pre Check-In</p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="phoneNumber" type="text" onInput={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_phone" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number (e.g. +65 91234567)</label>
            </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input name="email" type="email" onInput={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">STT GDC Email Address</label>
        </div>     
        
        <fieldset>
        <legend className="sr-only">Attending</legend>
            <p className='font-bold py-4 pt-8'>Will you be attending the event?</p>
        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, attending: e.target.value})} id="attending-option-1" type="radio" name="attending" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="attending-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, attending: e.target.value})} id="attending-option-2" type="radio" name="attending" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="attending-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
            </label>
        </div>
        </fieldset>
                
        <fieldset>
        <legend className="sr-only">Accomodation</legend>
            <p className='font-bold py-4 pt-8'>Will you be staying in the 2D1N accommodation at Village Hotel Sentosa?</p>
        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, accommodation: e.target.value})} id="accommodation-option-1" type="radio" name="accommodation" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="accommodation-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, accommodation: e.target.value})} id="accommodation-option-2" type="radio" name="accommodation" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="accommodation-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
            </label>
        </div>
        </fieldset>

        <fieldset>
        <legend className="sr-only">Parking</legend>
            <p className='font-bold py-4 pt-8'>Do you require parking at the Hotel (Village Hotel Sentosa)?</p>
        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, parking: e.target.value})} id="parking-option-1" type="radio" name="parking" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="parking-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, parking: e.target.value})} id="parking-option-2" type="radio" name="parking" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="parking-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
            </label>
        </div>
        </fieldset>
        
        <fieldset>
        <p className='font-bold pt-8'>Please indicate if you are keen to participate in any of the following Water Sports:</p>
        <p className='sttelemedia italic text-sm text-gray-600 pb-4'>*Allocation of slots is based on availability.</p>
        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, standUpPaddleBoarding: e.target.value})} id="checkbox-1" type="checkbox" value="Yes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stand Up Paddle Boarding</label>
        </div>

        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, kayakSingle: e.target.value})} id="checkbox-2" type="checkbox" value="Yes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kayak (Single)</label>
        </div>
        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, kayakDouble: e.target.value})} id="checkbox-3" type="checkbox" value="Yes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kayak (Double)</label>
        </div>

        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, bananaBoatRide: e.target.value})} id="checkbox-4" type="checkbox" value="Yes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Banana Boat Ride</label>
        </div>
        <div className="flex items-center mb-4">
            <input onInput={(e) => setFormData({...formData, DonutRide: e.target.value})} id="checkbox-5" type="checkbox" value="Yes" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-5" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Donut Ride</label>
        </div>
        </fieldset>

        <p className='font-bold pt-8'>Do you have any Dietary Restrictions? If yes, please indicate below.</p>
        <div className="relative z-0 w-full mb-6 group">
                <input name="user_dietaryRestrictions" type="text" onInput={(e) => setFormData({...formData, dietaryRestriction: e.target.value})} value={formData.dietaryRestriction} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder="(e.g. vegan, allergic to milk, etc.)"/>
            </div>

            <fieldset>
        <legend className="sr-only">Accomodation</legend>
            <p className='font-bold py-4 pt-8'>As a participant of this event, you are entitled to one (1) Event Apparel, please select your preference and indicate your size:</p>
            <p className='font-bold italic text-sm py-4 pt-8'>Drifit T-Shirt</p>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-1" type="radio" name="apparel" value="2XS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-1" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            2XS 
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-2" type="radio" name="apparel" value="XS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-2" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            XS
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-3" type="radio" name="apparel" value="S" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-3" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            S
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-4" type="radio" name="apparel" value="MS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-4" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            M
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-5" type="radio" name="apparel" value="L" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-5" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            L
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-6" type="radio" name="apparel" value="XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-6" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-7" type="radio" name="apparel" value="2XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-7" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            2XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tShirt: e.target.value})} id="apparel-option-8" type="radio" name="apparel" value="3XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-8" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            3XL
            </label>
            
        </div>
        <button type="button" onClick={handleOpen} value="tShirt" className='w-full text-red-600 border-none cursor-pointer sttelemedia italic text-left text-sm text-gray-600 pb-4'>*Click here for T-Shirt size chart.</button>
        <img src={tShirt} alt=""/>
        
        <p className='font-bold italic text-sm py-4 pt-8'>Drifit Tank Top</p>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-9" type="radio" name="apparel" value="2XS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-9" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            2XS 
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-10" type="radio" name="apparel" value="XS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-10" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            XS
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-11" type="radio" name="apparel" value="S" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-11" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            S
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-12" type="radio" name="apparel" value="M" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-12" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            M
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-13" type="radio" name="apparel" value="L" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-13" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            L
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-14" type="radio" name="apparel" value="XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-14" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-15" type="radio" name="apparel" value="2XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-15" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            2XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-16" type="radio" name="apparel" value="3XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-16" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            3XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setFormData({...formData, tankTop: e.target.value})} id="apparel-option-17" type="radio" name="apparel" value="5XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="apparel-option-17" className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            5XL
            </label>
            
        </div>
        <button type="button" onClick={handleOpen} value="tankTop" className='text-red-600 w-full border-none cursor-pointer sttelemedia italic text-left text-sm text-gray-600 pb-4'>*Click here for Tank Top size chart.</button>
        <img src={tankTop} alt=""/>     
        </fieldset>

            <fieldset>
        <legend className="sr-only">Checkbox variants</legend>
        <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                    ><HandleModal/></Modal>
                        
        <div className="pt-8 flex items-center mb-4">
            <input id="agree-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="agree-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <span onClick={handleOpen} className="text-blue-600 hover:underline dark:text-blue-500">Terms and Conditions</span>.</label>
        </div>
        </fieldset>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
  );
};

export default Test
