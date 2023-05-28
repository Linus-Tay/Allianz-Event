import React, {useState, useEffect} from 'react'
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai'
import {db} from '../firebase';
import { collection, getDocs, query, deleteDoc, doc as docSnapshot, where, orderBy, limit, addDoc  } from "firebase/firestore";
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
    

  const addData = (event) => {
    event.preventDefault();
    makeNameNice(formData.firstName, formData.lastName, formData.email)
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
          vip: "No",
          isChecked: "false"})
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
          <blockquote class="p-4 mb-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                  <p class="text-sm italic font-medium leading-relaxed text-gray-900 dark:text-white">
                   {JSON.stringify({selected})}
                  </p>
          </blockquote>
              <div className='text-center'>
                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={deleteData}>Yes</button>
                <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" onClick={closeModal}>No</button>
              </div></div>
      } else if (modal === "edit") {
        return  <div>
          <p>why this no work</p>
        </div>
      } 
    } else {
      return
    }
  }

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
                      { show === true && <form onSubmit={addData} className='bg-white rounded-lg p-10'>
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
                              <input  name="phoneNumber" type="text" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} value={formData.phoneNumber} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (e.g. 91234567)</label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                              <input name="department" type="text" onChange={(e) => setFormData({...formData, department: e.target.value})} value={formData.department} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
                          </div>
                      </div>
                      <div className="relative z-0 w-full mb-6 group">
                          <input name="user_email" type="text" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                      </div> 
                      <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
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
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs border text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th class="px-6 py-3">   
                      </th>
                      <th class="px-6 py-3">
                        UNIQUE NUMBER
                      </th>
                      <th class="px-6 py-3">
                        NAME
                      </th>
                      <th class="px-6 py-3">
                        EMAIL
                      </th>
                      <th class="px-6 py-3">
                        DEPARTMENT
                      </th>
                      <th class="px-6 py-3">
                        REGISTERED?
                      </th>
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
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4">{data.department}</td>
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