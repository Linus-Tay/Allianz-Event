import React, { useRef, useState, } from 'react'
import Modal from 'react-modal';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';

export const Test = () => {

    const customStyles = {
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            width: "85%",
            transform: 'translate(-50%, -50%)',
          },
    }

    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
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
        waterSports: {
            standUpPaddleBoarding: "No",
            kayakSingle: "No",
            kayakDouble: "No",
            bananaBoatRide: "No",
            donutRide: "No" },
        dietaryRestriction: ""
    })

    function makeNameNice(fullname, email) {
        const fullNameList = fullname.split(" ")
        console.log(fullNameList)

        for (let i = 0; i < fullNameList.length; i++) {
            console.log(fullNameList[i])
            console.log('wtf'.toLowerCase())
            fullNameList[i] = fullNameList[i].toLowerCase()
            fullNameList[i] = fullNameList[i][0].toUpperCase() + fullNameList[i].substr(1);
        }

        let doneFullName = fullNameList.join(" ")
        let doneEmail = email.toLowerCase()

        formData.name = doneFullName
        formData.email = doneEmail
    }
    
    const sendEmail = (e) => {
        e.preventDefault()

        makeNameNice(formData.name, formData.email)
        addDoc(colRef, {formData})   

        /*try {
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
            
        navigate('/');*/
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='bg-white rounded-lg p-10'>
        <p className='font-bold py-4'>Please enter the necessary information below: </p>
        <div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="user_fullName" type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required />
                <label for="floating_full_name" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                <p className='sttelemedia italic text-sm text-gray-600'>*as per NRIC or Identification Card</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
                <input name="department" type="text" onChange={(e) => setFormData({...formData, nric: e.target.value})} value={formData.nric} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_company" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NRIC</label>
                <p className='sttelemedia italic text-sm text-gray-600'>*for purpose of the Hotel arrangement and Pre Check-In</p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="phoneNumber" type="text" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} pattern="[0-9]{8}"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label for="floating_phone" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number (e.g. +65 91234567)</label>
            </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input name="user_email" type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="floating_email" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ST Telemedia Email address</label>
        </div>     
        
        <fieldset>
        <legend class="sr-only">Attending</legend>
            <p className='font-bold py-4 pt-8'>Will you be attending the event?</p>
        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData, attending: e.target.value})} id="attending-option-1" type="radio" name="attending" value="Yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="attending-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData, attending: e.target.value})} id="attending-option-2" type="radio" name="attending" value="No" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="attending-option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
            </label>
        </div>
        </fieldset>
                
        <fieldset>
        <legend class="sr-only">Accomodation</legend>
            <p className='font-bold py-4 pt-8'>Will you be staying in the 2D1N accommodation at Village Hotel Sentosa?</p>
        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData, accommodation: e.target.value})} id="accommodation-option-1" type="radio" name="accommodation" value="Yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="accommodation-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData, accommodation: e.target.value})} id="accommodation-option-2" type="radio" name="accommodation" value="No" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="accommodation-option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
            </label>
        </div>
        </fieldset>

        <fieldset>
        <legend class="sr-only">Parking</legend>
            <p className='font-bold py-4 pt-8'>Do you require parking at the Hotel (Village Hotel Sentosa)?</p>
        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData, parking: e.target.value})} id="parking-option-1" type="radio" name="parking" value="Yes" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="parking-option-1" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Yes
            </label>
        </div>

        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData, parking: e.target.value})} id="parking-option-2" type="radio" name="parking" value="No" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="parking-option-2" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            No
            </label>
        </div>
        </fieldset>
        
        <fieldset>
        <legend class="sr-only">Checkbox variants</legend>
        <p className='font-bold pt-8'>Please indicate if you are keen to participate in any of the following Water Sports:</p>
        <p className='sttelemedia italic text-sm text-gray-600 pb-4'>*Allocation of slots is based on availability</p>
        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData.waterSports, standUpPaddleBoarding: e.target.value})} id="checkbox-1" type="checkbox" value="Yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Stand Up Paddle Boarding</label>
        </div>

        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData.waterSports, kayakSingle: e.target.value})} id="checkbox-2" type="checkbox" value="Yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kayak (Single)</label>
        </div>
        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData.waterSports, kayakDouble: e.target.value})} id="checkbox-3" type="checkbox" value="Yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-3" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kayak (Double)</label>
        </div>

        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData.waterSports, bananaBoatRide: e.target.value})} id="checkbox-4" type="checkbox" value="Yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-4" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Banana Boat Ride</label>
        </div>
        <div class="flex items-center mb-4">
            <input onChange={(e) => setFormData({...formData.waterSports, DonutRide: e.target.value})} id="checkbox-5" type="checkbox" value="Yes" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checkbox-5" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">donut Ride</label>
        </div>
        </fieldset>



        <p className='font-bold pt-8'>Do you have any Dietary Restrictions? If yes, please indicate below.</p>
        <div className="relative z-0 w-full mb-6 group">
                <input name="user_dietaryRestrictions" type="text" onChange={(e) => setFormData({...formData, dietaryRestriction: e.target.value})} value={formData.dietaryRestriction} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder="(e.g. vegan, allergic to milk, etc.)"/>
            </div>

            <fieldset>
        <legend class="sr-only">Checkbox variants</legend>
        <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      style={customStyles}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                    ><p className='text-center text-lg font-bold py-4'>Terms and Conditions</p>
                        <p className='py-4 text-justify'>“By submitting on this platform, I consent for Synonym Private Limited, STT GDC Private Limited, and associated parties (including third party service providers and representatives) (STT Persons) to collect, use, disclose, store, retain and/or process (“Use”) my personal data and information in the manner and for the purposes described in their respective personal data policies, https://www.sttelemediagdc.com/pdpa, and in particular for the purposes of processing, servicing and managing my orders and general administration in connection with the foregoing and contacting me at the contacts that I have provided. I confirm the accuracy of the information that I have furnished and further confirm that where I have furnished personal data of other individuals, I have obtained consent from such individuals to disclose such information, except to the extent that such consent is not required under relevant laws. I will indemnify STT Persons for any loss or damage that they may sustain from or in connection with the use of the information that I have furnished and will not hold them liable for any loss or damage that may be incurred by me.”</p>
                        <div className='py-4 text-center'>
                        <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5" onClick={closeModal}>Close</button>
                        </div></Modal>
                        
        <div class="pt-8 flex items-center mb-4">
            <input id="agree-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" required/>
            <label for="agree-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree to the <span onClick={() => {setIsOpen(true)}} class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</span>.</label>
        </div>
        </fieldset>
        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
  );
};

export default Test