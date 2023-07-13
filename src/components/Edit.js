import React, {useState, useEffect} from 'react'
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai'
import {db} from '../firebase';
import { collection, getDocs, query, deleteDoc, doc as docSnapshot, where, orderBy, limit, addDoc, updateDoc  } from "firebase/firestore";
import { IoMdRemoveCircleOutline } from 'react-icons/io'
import { BiRefresh } from 'react-icons/bi'
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {

  
  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
  }

  const [search, setSearch] = useState([])

  useEffect(() => {

    console.log('useEffect ran')

    async function getData() {
      const docRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"));
      await getDocs(docRef)
      .then((snapshot) => {
          let information = []
          snapshot.docs.forEach((doc) => {
            information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
      })
      setSearch(information)
      })
    }
    
    getData()
  }, []);
  
  const handleRefresh = () => {
    window.location.reload(false);
  }

  const [searchText, setSearchText] = useState("")
  const [selected, setSelected] = useState()
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault()
    console.log(selected)
    setFormData({ name: selected.FULL_NAME, nric: selected.NRIC, phoneNumber: selected.PHONE_NUMBER, email: selected.EMAIL, uniqueNumber: selected.UNIQUE_NUMBER, attending: selected.ATTENDING, accommodation: selected.ACCOMMODATION,  parking: selected.PARKING,
        kayakSingle: selected.KAYAK_SINGLE, kayakDouble: selected.KAYAK_DOUBLE, donutRide: selected.DONUT_RIDE, standUpPaddleBoarding: selected.STAND_UP_PADDING_BOARDING, bananaBoatRide: selected.BANANA_BOAT_RIDE,
        tShirt: selected.T_SHIRT, tankTop: selected.TANK_TOP, dietaryRestriction: selected.DIETARY_RESTRICTIONS, registered: selected.REGISTERED})
    const scanRef = query(collection(db, "sttelemedia"),where("uniqueNumber", "==", parseInt(selected.UNIQUE_NUMBER)));
    console.log(formData)
      getDocs(scanRef).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc)
            updateDoc(docSnapshot(db, "sttelemedia", doc.id), {
              formData
            })
        })
      })
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (data) => {
    setSelected(data)
  }

  const [subtitle, setSubtitle] = useState()
  const [modal, setModal] = useState()
  const [show, setShow] = useState()

  function openModal (event) {
    setModal(event.target.value)
    if (event.target.value === "add") {
      setIsOpen(true);
      setSubtitle("Add Person")
      setShow(true)
    } else if (selected !== undefined) {
      setIsOpen(true);
      setShow(false)
      if (event.target.value === "remove") {
        setSubtitle("Remove Person")
      } else if (event.target.value === "edit") {
        setSubtitle("Edit Information")
      } 
    } else {
      toast.warn('You have not selected a person, please select one first before registering.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
  }

  const deleteData = () => {
    const deleteRef = query(collection(db, "sttelemedia"), where("uniqueNumber", "==", parseInt(selected.uniqueNumber)));
    getDocs(deleteRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        deleteDoc(docSnapshot(db, "sttelemedia", doc.id));
      })
    })
    toast.success('Data Successfully Deleted!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    setSelected()
    closeModal()
  }
  
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      name: "",
      phoneNumber: "nil",
      department: "nil",
      email: "nil",
  })


  const addData = (event) => {
    event.preventDefault();
    const colRef = collection(db, 'sttelemedia')
    const q = query(collection(db, "sttelemedia"), orderBy("uniqueNumber", 'desc'), limit(1));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let number = parseInt(doc.data().uniqueNumber) + 1
        console.log(number)
        addDoc(colRef, {
          formData,
          uniqueNumber: number,
          registered: "No",
          awardee: "No",
          vip: "No"})
      })
    })

  }

  function ShowRespectiveModal() {
    if (modal === "add") {
      return  <div>
              <p className='text-xl font-bold text-center'>{subtitle}</p>           
        </div>
    } else if (selected !== undefined) {
      if (modal === "remove") {
        return  <div>
          <p className='text-xl font-bold text-center'>{subtitle}</p>
          <p className='py-5 text-center'>Are you sure you want to delete this from the database?</p>
          <blockquote className="p-4 mb-4 border-l-4 border-gray-300 bg-gray-50">
                  <p className="text-sm italic font-medium leading-relaxed text-gray-900">
                   {JSON.stringify({selected})}
                  </p>
          </blockquote>
              <div className='text-center'>
                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={deleteData}>Yes</button>
                <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={closeModal}>No</button>
              </div></div>
      } else if (modal === "edit") {
        return  <div>
           <form autoComplete="off" className='bg-white rounded-lg p-10'>
        <p className='font-bold py-4'>Please enter the necessary information below: </p>
        <div>
            
            <div className="relative z-0 w-full mb-6 group">
                <input name="name" type="text" onInput={(e) => setSelected({...selected, FULL_NAME: e.target.value})} value={selected.FULL_NAME} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" "  />
                <label htmlFor="floating_full_name" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500 overflow-y-auto duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                <p className='sttelemedia italic text-sm text-gray-600'>*as per NRIC or Identification Card</p>
            </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
                <input name="nric" type="text" onInput={(e) => setSelected({...selected, NRIC: e.target.value})} value={selected.NRIC} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="floating_company" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500 overflow-x-visible duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NRIC Number/ Identification Number</label>
                <p className='sttelemedia italic text-sm text-gray-600'>*for purpose of the Hotel arrangement and Pre Check-In</p>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="phoneNumber" type="text" onInput={(e) => setSelected({...selected, PHONE_NUMBER: e.target.value})} value={selected.PHONE_NUMBER} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                <label htmlFor="floating_phone" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number (e.g. +65 91234567)</label>
            </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
            <input name="email" type="email" onInput={(e) => setSelected({...selected, EMAIL: e.target.value})} value={selected.EMAIL} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
            <label htmlFor="floating_email" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">STT GDC Email Address</label>
        </div>     
        
        <fieldset>
        <legend className="sr-only">Attending</legend>
            <p className='font-bold py-4 pt-8'>Will you be attending the event?</p>
        <div className="flex items-center mb-4">
            <input onClick={handleDisabled} onInput={(e) => setSelected({...selected, ATTENDING: e.target.value})} id="attending-option-1" type="radio" name="attending" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="attending-option-1" className="block ml-2 text-sm font-medium text-gray-900 ">
            Yes
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input onClick={handleDisabled2} onInput={(e) => setSelected({...selected, ATTENDING: e.target.value})} id="attending-option-2" type="radio" name="attending" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    "/>
            <label htmlFor="attending-option-2" className="block ml-2 text-sm font-medium text-gray-900 ">
            No
            </label>
        </div>
        </fieldset>
                
        <fieldset>
        <legend className="sr-only">Accomodation</legend>
            <p className='font-bold py-4 pt-8'>Will you be staying in the 2D1N accommodation at Village Hotel Sentosa?</p>
        <div className="flex items-center mb-4">
            <input disabled={isDisabled} className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300' onInput={(e) => setSelected({...selected, ACCOMMODATION: e.target.value})} id="accommodation-option-1" type="radio" name="accommodation" value="Yes"/>
            <label htmlFor="accommodation-option-1" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            Yes
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, ACCOMMODATION: e.target.value})} id="accommodation-option-2" type="radio" name="accommodation" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    "/>
            <label htmlFor="accommodation-option-2" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            No
            </label>
        </div>
        </fieldset>

        <fieldset>
        <legend className="sr-only">Parking</legend>
            <p className='font-bold py-4 pt-8'>Do you require parking at the Hotel (Village Hotel Sentosa)?</p>
        <div className="flex items-center mb-4">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, PARKING: e.target.value})} id="parking-option-1" type="radio" name="parking" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="parking-option-1" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            Yes
            </label>
        </div>

        <div className="flex items-center mb-4">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, PARKING: e.target.value})} id="parking-option-2" type="radio" name="parking" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    "/>
            <label htmlFor="parking-option-2" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            No
            </label>
        </div>
        </fieldset>
        
        <fieldset>
        <p className='font-bold pt-8'>Please indicate if you are keen to participate in any of the following Water Sports:</p>
        <p className='sttelemedia italic text-sm text-gray-600 pb-4'>*Allocation of slots is based on availability.</p>
        <div className="flex items-center mb-4" onClick={(e) => setCheckBox1(!checkBox1)}>
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, STAND_UP_PADDING_BOARDING: e.target.value})} id="checkbox-1" type="checkbox" value={checkBox1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
            <label htmlFor="checkbox-1" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Stand Up Paddle Boarding</label>
        </div>

        <div className="flex items-center mb-4" onClick={(e) => setCheckBox2(!checkBox2)}>
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, KAYAK_SINGLE: e.target.value})} id="checkbox-2" type="checkbox" value={checkBox2} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
            <label htmlFor="checkbox-2" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Kayak (Single)</label>
        </div>
        <div className="flex items-center mb-4" onClick={(e) => setCheckBox3(!checkBox3)}>
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, KAYAK_DOUBLE: e.target.value})} id="checkbox-3" type="checkbox" value={checkBox3} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
            <label htmlFor="checkbox-3" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Kayak (Double)</label>
        </div>

        <div className="flex items-center mb-4" onClick={(e) => setCheckBox4(!checkBox4)}>
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, BANANA_BOAT_RIDE: e.target.value})} id="checkbox-4" type="checkbox" value={checkBox4} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
            <label htmlFor="checkbox-4" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Banana Boat Ride</label>
        </div>
        <div className="flex items-center mb-4" onClick={(e) => setCheckBox5(!checkBox5)}>
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, DONUT_RIDE: e.target.value})} id="checkbox-5" type="checkbox" value={checkBox5} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
            <label htmlFor="checkbox-5" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Donut Ride</label>
        </div>
        </fieldset>

        <p className='font-bold pt-8'>Do you have any Dietary Restrictions? If yes, please indicate below.</p>
        <div className="relative z-0 w-full mb-6 group">
                <input disabled={isDisabled} name="user_dietaryRestrictions" type="text" onInput={(e) => setSelected({...selected, DIETARY_RESTRICTIONS: e.target.value})} value={selected.DIETARY_RESTRICTIONS} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder="(e.g. vegan, allergic to milk, etc.)"/>
            </div>

            <fieldset>
        <legend className="sr-only">Accomodation</legend>
            <p className='font-bold py-4 pt-8'>As a participant of this event, you are entitled to one (1) Event Apparel, please select your preference and indicate your size:</p>
            <p className='font-bold italic text-sm py-4 pt-8'>Cotton T-Shirt</p>

        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-1" type="radio" name="apparel" value="XS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-1" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            XS 
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-3" type="radio" name="apparel" value="S" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-3" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            S
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-4" type="radio" name="apparel" value="M" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-4" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            M
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-5" type="radio" name="apparel" value="L" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-5" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            L
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-6" type="radio" name="apparel" value="XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-6" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-7" type="radio" name="apparel" value="2XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-7" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            2XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input disabled={isDisabled} onInput={(e) => setSelected({...selected, T_SHIRT: e.target.value, TANK_TOP: "No"})} id="apparel-option-8" type="radio" name="apparel" value="3XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-8" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            3XL
            </label>
            
        </div>
        
    
        <p className='font-bold italic text-sm py-4 pt-8'>Cotton Tank Top</p>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-9" type="radio" name="apparel" value="S" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-9" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            S 
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-12" type="radio" name="apparel" value="M" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-12" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            M
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-13" type="radio" name="apparel" value="L" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-13" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            L
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-14" type="radio" name="apparel" value="XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-14" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-15" type="radio" name="apparel" value="2XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-15" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            2XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-16" type="radio" name="apparel" value="3XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-16" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            3XL
            </label>
            
        </div>
        <div className="flex items-center mb-1">
            <input onInput={(e) => setSelected({...selected, TANK_TOP: e.target.value, T_SHIRT: "No"})} id="apparel-option-17" type="radio" name="apparel" value="4XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " />
            <label htmlFor="apparel-option-17" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
            4XL
            </label>
            
        </div>
       
        </fieldset>
        <button onClick={handleSubmission} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
    </form>
        </div>
      } 
    } else {
      return
    }
  }

  const [isDisabled, setIsDisabled] = useState(false)

  const handleDisabled = () => {
      setIsDisabled(false)
  }

  const handleDisabled2 = () => {
      setIsDisabled(true)
  }


  const [checkBox1, setCheckBox1] = useState(false)
  const [checkBox2, setCheckBox2] = useState(false)
  const [checkBox3, setCheckBox3] = useState(false)
  const [checkBox4, setCheckBox4] = useState(false)
  const [checkBox5, setCheckBox5] = useState(false)

  return (
    <div className='m-auto container'>
      <ToastContainer/>
      <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      style={customStyles}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                    >
                      <ShowRespectiveModal/>
                      { show === true && <form onSubmit={addData} autoComplete="off" className='bg-white rounded-lg p-10'>
                      <p className='font-bold py-4'>Please enter the necessary information below: </p>
                      <div>
                          
                          <div className="relative z-0 w-full mb-6 group">
                              <input name="name" type="text" onInput={(e) => setFormData({...formData, name: e.target.value})} value={formData.name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required />
                              <label htmlFor="floating_full_name" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500 overflow-y-auto duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
                              <p className='sttelemedia italic text-sm text-gray-600'>*as per NRIC or Identification Card</p>
                          </div>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-6">
                      <div className="relative z-0 w-full mb-6 group">
                              <input name="nric" type="text" onInput={(e) => setFormData({...formData, nric: e.target.value})} value={formData.nric} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label htmlFor="floating_company" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500 overflow-x-visible duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NRIC Number/ Identification Number</label>
                              <p className='sttelemedia italic text-sm text-gray-600'>*for purpose of the Hotel arrangement and Pre Check-In</p>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                              <input name="phoneNumber" type="text" onInput={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label htmlFor="floating_phone" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contact Number (e.g. +65 91234567)</label>
                          </div>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                          <input name="email" type="email" onInput={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label htmlFor="floating_email" className="sttelemedia peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">STT GDC Email Address</label>
                      </div>     
                      
                      <fieldset>
                      <legend className="sr-only">Attending</legend>
                          <p className='font-bold py-4 pt-8'>Will you be attending the event?</p>
                      <div className="flex items-center mb-4">
                          <input onClick={handleDisabled} onInput={(e) => setFormData({...formData, attending: e.target.value})} id="attending-option-1" type="radio" name="attending" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="attending-option-1" className="block ml-2 text-sm font-medium text-gray-900 ">
                          Yes
                          </label>
                      </div>

                      <div className="flex items-center mb-4">
                          <input onClick={handleDisabled2} onInput={(e) => setFormData({...formData, attending: e.target.value})} id="attending-option-2" type="radio" name="attending" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    "/>
                          <label htmlFor="attending-option-2" className="block ml-2 text-sm font-medium text-gray-900 ">
                          No
                          </label>
                      </div>
                      </fieldset>
                              
                      <fieldset>
                      <legend className="sr-only">Accomodation</legend>
                          <p className='font-bold py-4 pt-8'>Will you be staying in the 2D1N accommodation at Village Hotel Sentosa?</p>
                      <div className="flex items-center mb-4">
                          <input disabled={isDisabled} className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300' onInput={(e) => setFormData({...formData, accommodation: e.target.value})} id="accommodation-option-1" type="radio" name="accommodation" value="Yes"/>
                          <label htmlFor="accommodation-option-1" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
                          Yes
                          </label>
                      </div>

                      <div className="flex items-center mb-4">
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, accommodation: e.target.value})} id="accommodation-option-2" type="radio" name="accommodation" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    "/>
                          <label htmlFor="accommodation-option-2" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
                          No
                          </label>
                      </div>
                      </fieldset>

                      <fieldset>
                      <legend className="sr-only">Parking</legend>
                          <p className='font-bold py-4 pt-8'>Do you require parking at the Hotel (Village Hotel Sentosa)?</p>
                      <div className="flex items-center mb-4">
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, parking: e.target.value})} id="parking-option-1" type="radio" name="parking" value="Yes" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="parking-option-1" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
                          Yes
                          </label>
                      </div>

                      <div className="flex items-center mb-4">
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, parking: e.target.value})} id="parking-option-2" type="radio" name="parking" value="No" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    "/>
                          <label htmlFor="parking-option-2" className={(isDisabled) ? 'block ml-2 text-sm font-medium text-gray-300' :"block ml-2 text-sm font-medium text-gray-900 "}>
                          No
                          </label>
                      </div>
                      </fieldset>
                      
                      <fieldset>
                      <p className='font-bold pt-8'>Please indicate if you are keen to participate in any of the following Water Sports:</p>
                      <p className='sttelemedia italic text-sm text-gray-600 pb-4'>*Allocation of slots is based on availability.</p>
                      <div className="flex items-center mb-4" onClick={(e) => setCheckBox1(!checkBox1)}>
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, standUpPaddleBoarding: e.target.value})} id="checkbox-1" type="checkbox" value={checkBox1} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
                          <label htmlFor="checkbox-1" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Stand Up Paddle Boarding</label>
                      </div>

                      <div className="flex items-center mb-4" onClick={(e) => setCheckBox2(!checkBox2)}>
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, kayakSingle: e.target.value})} id="checkbox-2" type="checkbox" value={checkBox2} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
                          <label htmlFor="checkbox-2" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Kayak (Single)</label>
                      </div>
                      <div className="flex items-center mb-4" onClick={(e) => setCheckBox3(!checkBox3)}>
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, kayakDouble: e.target.value})} id="checkbox-3" type="checkbox" value={checkBox3} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
                          <label htmlFor="checkbox-3" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Kayak (Double)</label>
                      </div>

                      <div className="flex items-center mb-4" onClick={(e) => setCheckBox4(!checkBox4)}>
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, bananaBoatRide: e.target.value})} id="checkbox-4" type="checkbox" value={checkBox4} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
                          <label htmlFor="checkbox-4" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Banana Boat Ride</label>
                      </div>
                      <div className="flex items-center mb-4" onClick={(e) => setCheckBox5(!checkBox5)}>
                          <input disabled={isDisabled} onInput={(e) => setFormData({...formData, donutRide: e.target.value})} id="checkbox-5" type="checkbox" value={checkBox5} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500    focus:ring-2  "/>
                          <label htmlFor="checkbox-5" className={(isDisabled) ? 'ml-2 text-sm font-medium text-gray-400' :"ml-2 text-sm font-medium text-gray-900"}>Donut Ride</label>
                      </div>
                      </fieldset>

                      <p className='font-bold pt-8'>Do you have any Dietary Restrictions? If yes, please indicate below.</p>
                      <div className="relative z-0 w-full mb-6 group">
                              <input disabled={isDisabled} name="user_dietaryRestrictions" type="text" onInput={(e) => setFormData({...formData, dietaryRestriction: e.target.value})} value={formData.dietaryRestriction} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder="(e.g. vegan, allergic to milk, etc.)"/>
                          </div>

                          <fieldset>
                      <legend className="sr-only">Accomodation</legend>
                          <p className='font-bold py-4 pt-8'>As a participant of this event, you are entitled to one (1) Event Apparel, please select your preference and indicate your size:</p>
                          <p className='font-bold italic text-sm py-4 pt-8'>Cotton T-Shirt</p>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-1" type="radio" name="apparel" value="XS" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-1" className="block ml-2 text-sm font-medium text-gray-900 ">
                          XS 
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-3" type="radio" name="apparel" value="S" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-3" className="block ml-2 text-sm font-medium text-gray-900 ">
                          S
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-4" type="radio" name="apparel" value="M" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-4" className="block ml-2 text-sm font-medium text-gray-900 ">
                          M
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-5" type="radio" name="apparel" value="L" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-5" className="block ml-2 text-sm font-medium text-gray-900 ">
                          L
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-6" type="radio" name="apparel" value="XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-6" className="block ml-2 text-sm font-medium text-gray-900 ">
                          XL
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-7" type="radio" name="apparel" value="2XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-7" className="block ml-2 text-sm font-medium text-gray-900 ">
                          2XL
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tShirt: e.target.value, tankTop: "No"})} id="apparel-option-8" type="radio" name="apparel" value="3XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-8" className="block ml-2 text-sm font-medium text-gray-900 ">
                          3XL
                          </label>
                          
                      </div>
                      
                  
                      <p className='font-bold italic text-sm py-4 pt-8'>Cotton Tank Top</p>
              
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-9" type="radio" name="apparel" value="S" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-9" className="block ml-2 text-sm font-medium text-gray-900 ">
                          S 
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-12" type="radio" name="apparel" value="M" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-12" className="block ml-2 text-sm font-medium text-gray-900 ">
                          M
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-13" type="radio" name="apparel" value="L" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-13" className="block ml-2 text-sm font-medium text-gray-900 ">
                          L
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-14" type="radio" name="apparel" value="XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-14" className="block ml-2 text-sm font-medium text-gray-900 ">
                          XL
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-15" type="radio" name="apparel" value="2XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-15" className="block ml-2 text-sm font-medium text-gray-900 ">
                          2XL
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-16" type="radio" name="apparel" value="3XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-16" className="block ml-2 text-sm font-medium text-gray-900 ">
                          3XL
                          </label>
                          
                      </div>
                      <div className="flex items-center mb-1">
                          <input onInput={(e) => setFormData({...formData, tankTop: e.target.value, tShirt: "No"})} id="apparel-option-17" type="radio" name="apparel" value="4XL" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300    " required/>
                          <label htmlFor="apparel-option-17" className="block ml-2 text-sm font-medium text-gray-900 ">
                          4XL
                          </label>
                          
                      </div>
                        </fieldset>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form> }
                    </Modal>
      <div className='absolute py-4'>
        <button onClick={handleRefresh} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
            Refresh
            <BiRefresh className='ml-2' size={18}/>
          </button>
      </div>
      <div className='py-4 text-right'>
        <button  value="edit" onClick={openModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
          Edit
          <AiOutlineEdit className='ml-2' size={18}/>
        </button>
        <button value="remove" onClick={openModal} className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
          Remove
          <IoMdRemoveCircleOutline className='ml-2' size={18}/>
        </button>
        <button value="add" onClick={openModal} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
          Add
          <AiOutlineUserAdd className='ml-2' size={18}/>
        </button>
      </div>
      <input type="text" onChange={event => setSearchText(event.target.value)} className="mb-4 bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Search Name Here..."></input>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs border text-gray-700 uppercase bg-gray-50">
                  <tr>
                  <th></th>
                  <th scope="col" className="px-6 py-3">UNIQUE_NUMBER</th>
                  <th scope="col" className="px-6 py-3">FULL_NAME</th>
                  <th scope="col" className="px-6 py-3">NRIC</th>
                  <th scope="col" className="px-6 py-3">PHONE_NUMBER</th>
                  <th scope="col" className="px-6 py-3">EMAIL</th>
                  <th scope="col" className="px-6 py-3">ATTENDING</th>
                  <th scope="col" className="px-6 py-3">ACCOMMODATION</th>
                  <th scope="col" className="px-6 py-3">PARKING</th>
                  <th scope="col" className="px-6 py-3">KAYAK_SINGLE</th>
                  <th scope="col" className="px-6 py-3">KAYAK_DOUBLE</th>
                  <th scope="col" className="px-6 py-3">DONUT_RIDE</th>
                  <th scope="col" className="px-6 py-3">STAND_UP_PADDING_BOARDING</th>
                  <th scope="col" className="px-6 py-3">BANANA_BOAT_RIDE</th>
                  <th scope="col" className="px-6 py-3">DIETARY_RESTRICTIONS</th>
                  <th scope="col" className="px-6 py-3">REGISTRATION</th>
                  </tr>
              </thead>
              <tbody>
                  {
                    search.filter(data => {
                      if (searchText === '') {
                        return data;
                      } else if (data.name.toLowerCase().includes(searchText.toLowerCase())) {
                        return data;
                      }
                      return ''
                    }).map((data) => (
                      <tr className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap" key={data.uniqueNumber}>
                      <td className="px-6 py-4">
                      <input onClick={() => handleClick(data)} type="radio" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                      </td>
                      <td className="px-6 py-4">{data.uniqueNumber}</td>
                      <td className="px-6 py-4">{data.name}</td>
                      <td className="px-6 py-4">{data.nric}</td>
                      <td className="px-6 py-4">{data.phoneNumber}</td>
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4">{data.attending}</td>
                      <td className="px-6 py-4">{data.accommodation}</td>
                      <td className="px-6 py-4">{data.parking}</td>
                      <td className="px-6 py-4">{data.kayakSingle}</td>
                      <td className="px-6 py-4">{data.kayakDouble}</td>
                      <td className="px-6 py-4">{data.donutRide}</td>
                      <td className="px-6 py-4">{data.standUpPaddleBoarding}</td>
                      <td className="px-6 py-4">{data.bananaBoatRide}</td>
                      <td className="px-6 py-4">{data.dietaryRestriction}</td>
                      <td className="px-6 py-4">{data.registered}</td>
                      </tr>
                    ))
                 }     
              </tbody>
          </table>
      </div>

    </div>
  )
}

export default Edit