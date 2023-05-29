import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where, doc as docSnapshot, updateDoc, orderBy } from "firebase/firestore";
import {db} from '../firebase';
import exportFromJSON from 'export-from-json'
import Modal from 'react-modal';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { SlMagnifier } from 'react-icons/sl'

const Scan = () => {

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

  const [value, setValue] = useState("");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [searchText, setSearchText] = useState("")
  const [registeredCount, setRegisteredCount] = useState(0)
  const [unregisteredCount, setUnregisteredCount] = useState(0)
  const [awardeesCount, setAwardeesCount] = useState(0)
  const [vipsCount, setVipsCount] = useState(0)
  const [disabled, setdisabled] = useState(true)

  const docRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"));
  const registeredRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("registered", "==", "Yes"));
  const unregisteredRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("registered", "==", "No"));
  const awardeesRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("awardee", "==", "Yes"), where("registered", "==", "Yes"));
  const vipsRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("vip", "==", "Yes"), where("registered", "==", "Yes"));

  async function registeredCountF() {
    await getDocs(registeredRef)
    .then((snapshot) => {
        const count = snapshot.size
        setRegisteredCount(count)
    })
  };

  async function unregisteredCountF() {
    await getDocs(unregisteredRef)
    .then((snapshot) => {
        const count = snapshot.size
        setUnregisteredCount(count)
    })
  };

  async function awardeesCountF() {
    await getDocs(awardeesRef)
    .then((snapshot) => {
        const count = snapshot.size
        setAwardeesCount(count)
    })
  };

  async function vipsCountF() {
    await getDocs(vipsRef)
    .then((snapshot) => {
        const count = snapshot.size
        setVipsCount(count)
    })
  };

  function updateCount() {
    vipsCountF()
    awardeesCountF()
    registeredCountF()
    unregisteredCountF()
  };

  useEffect(() => {
    const registeredRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("registered", "==", "Yes"));
    const unregisteredRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("registered", "==", "No"));
    const awardeesRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("awardee", "==", "Yes"), where("registered", "==", "Yes"));
    const vipsRef = query(collection(db, "sttelemedia"), orderBy("uniqueNumber"), where("vip", "==", "Yes"), where("registered", "==", "Yes"));

    async function registeredCountF() {
      await getDocs(registeredRef)
      .then((snapshot) => {
          const count = snapshot.size
          setRegisteredCount(count)
      })
    };
  
    async function unregisteredCountF() {
      await getDocs(unregisteredRef)
      .then((snapshot) => {
          const count = snapshot.size
          setUnregisteredCount(count)
      })
    };
  
    async function awardeesCountF() {
      await getDocs(awardeesRef)
      .then((snapshot) => {
          const count = snapshot.size
          setAwardeesCount(count)
      })
    };
  
    async function vipsCountF() {
      await getDocs(vipsRef)
      .then((snapshot) => {
          const count = snapshot.size
          setVipsCount(count)
      })
    };

    registeredCountF()
    unregisteredCountF()
    awardeesCountF()
    vipsCountF()
  }, []);


  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const scanRef = query(collection(db, "sttelemedia"),where("uniqueNumber", "==", parseInt(value)));
      getDocs(scanRef).then((querySnapshot) => {
        if (value === "unlock") {
          setdisabled(false)
          console.log('someone unlocked reset registration')
        } else if (querySnapshot.size === 0) {
          toast.error('Person not in registration list, refer them to trobleshooting counter.', {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "light",
            })
        } else {
          querySnapshot.forEach((doc) => {
            updateDoc(docSnapshot(db, "sttelemedia", doc.id), {
              registered: "Yes"
            });
            setName(doc.data().formData.name)
            setPhoneNumber(doc.data().formData.phoneNumber)
            setEmail(doc.data().formData.email)
            localStorage.setItem("userData", JSON.stringify(doc.data().formData));
        })
        updateCount()
        }

    })
      setValue('')
    }
  }

  const clearScreen = () => {
    localStorage.setItem("userData", JSON.stringify({}));
    setName("")
    setPhoneNumber("")
    setEmail("")
  }

  async function resetRegistration() {
    getDocs(docRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        updateDoc(docSnapshot(db, "sttelemedia", doc.id), {
          registered: "No"
        });
      })
    });
    setTimeout(() => updateCount(), 1000);
    setdisabled(true)
  }

  const downloadLatest = () => {
    getDocs(docRef)
        .then((snapshot) => {
            let information = []
            snapshot.docs.forEach((doc) => {
              information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
        })
    let data = JSON.parse(JSON.stringify(information))
    const fileName = 'sttelemedia'
    const exportType =  exportFromJSON.types.csv

    exportFromJSON({ data, fileName, exportType })
  })
  .catch(err => {
    console.log(err.message)
  })
}

const downloadRespective = () => {
  let data = JSON.parse(JSON.stringify(search))
  const fileName = 'sttelemedia'
  const exportType =  exportFromJSON.types.csv

  exportFromJSON({ data, fileName, exportType })
}

  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState([])
  const [subtitle, setSubtitle] = useState()

  function openSearch() {
    setSubtitle('Search')
    let information = []
    setIsOpen(true);
    getDocs(docRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
        })
      setSearch(information)
    })
  }

  function openRegistered() {
    setSubtitle('Registered')
    let information = []
    setIsOpen(true);
    getDocs(registeredRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
        })
      setSearch(information)
    })
  }

  function openUnegistered() {
    setSubtitle('Unregistered')
    let information = []
    setIsOpen(true);
    getDocs(unregisteredRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
        })
      setSearch(information)
    })
  }

  function openAwardees() {
    setSubtitle('Awardees')
    let information = []
    setIsOpen(true);
    getDocs(awardeesRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
        })
      setSearch(information)
    })
  }

  function openVIPs() {
    setSubtitle('VIPs')
    let information = []
    setIsOpen(true);
    getDocs(vipsRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              information.push({uniqueNumber: doc.data().uniqueNumber, ...doc.data().formData, registered: doc.data().registered})
        })
      setSearch(information)
    })
  }


  function closeModal() {
    setIsOpen(false);
    setSelected()
    setSearchText('')
  }

  const [selected, setSelected] = useState()

  const handleClick = (data) => {
    setSelected(data)
  }

  function ShowDownloadButton(props) {
    const showDownload = props.subtitle;
    if (showDownload !== "Search") {
      return <button onClick={downloadRespective} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                  Download {subtitle} Report
            </button>;
    }
    return
  }

  const register = () => {
    if (selected === undefined) {
      toast.warn('You have not selected a person, please select one first before registering.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    } else {
      const scanRef = query(collection(db, "sttelemedia"),where("uniqueNumber", "==", parseInt(selected.uniqueNumber)));
      getDocs(scanRef).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            updateDoc(docSnapshot(db, "sttelemedia", doc.id), {
              registered: "Yes"
            })
            setName(doc.data().formData.name)
            setPhoneNumber(doc.data().formData.phoneNumber)
            setEmail(doc.data().formData.email)
            localStorage.setItem("userData", JSON.stringify(doc.data().formData));
            updateCount()
        })
      })
      toast.success('Person Successfully Registered!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

  const unregister = () => {
    if (selected === undefined) {
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
    } else {
      const scanRef = query(collection(db, "sttelemedia"),where("uniqueNumber", "==", parseInt(selected.uniqueNumber)));
      getDocs(scanRef).then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            updateDoc(docSnapshot(db, "sttelemedia", doc.id), {
              registered: "No"
            });
        })
      })
      toast.success('Person Successfully Unregistered!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      updateCount()
    }
  }

  const [toggle, setToggle] = useState(false)
  const [timerValue, setTimerValue] = useState()

  const handleTimerValue = (event) => {
    setTimerValue(event.target.value)
    localStorage.setItem("timerValue", event.target.value);
  }

  const handleToggle = () => {
    setToggle(!toggle)
    localStorage.setItem("toggle", !toggle);
  }

  function ShowResetButton() {
    const isDisabled =  disabled
    if (isDisabled === true) {
      return <button type="button" className="text-white bg-red-400 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled>Reset Registration</button>
    } else {

    }
    return <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={resetRegistration}>Reset Registration</button>
  }


  return (
    <div>
      <ToastContainer
            />
    <div className='container m-auto'>
        <div className="grid grid-cols-4 gap-4 text-center pt-10">
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Awardees</h5>
                  <p className='mb-2 text-3xl font-extrabold'>{awardeesCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openAwardees}>
                    See List
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      style={customStyles}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                    >
                      <p className='pb-4 text-xl font-bold text-center'>{subtitle}</p>
                      <div className='text-right'>
                      <button onClick={register} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                            Register
                      </button>
                      <button onClick={unregister} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                            Unregister
                      </button>
                      <ShowDownloadButton subtitle={subtitle}/>
                      <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={closeModal}>Close</button>
                      </div> 
                      <input type="text" onChange={event => setSearchText(event.target.value)} className="my-10 bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Search Name Here..."></input>
                      <table className="w-full text-sm text-left text-gray-500">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr className='border-solid border-2 border-grey-200'>
                          <th></th>
                          <th scope="col" className="px-6 py-3">uniqueNumber</th>
                          <th scope="col" className="px-6 py-3">Name</th>
                          <th scope="col" className="px-6 py-3">Email</th>
                          <th scope="col" className="px-6 py-3">Department</th>
                          <th scope="col" className="px-6 py-3">Registered?</th>
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
                          <tr className="bg-white border-b" key={data.uniqueNumber}>
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
                    </Modal>
       
              </div>
            </div>
          <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">VIPs</h5>
                  <p className='mb-2 text-3xl font-extrabold'>{vipsCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openVIPs}>
                    See List
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
              </div>
            </div>
          <div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Unregistered</h5>
                  <p className='text-red-600 mb-2 text-3xl font-extrabold'>{unregisteredCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openUnegistered}>
                    See List
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
              </div>
            </div>
          <div className="pb-10">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Registered</h5>
                  <p className='text-green-500 mb-2 text-3xl font-extrabold'>{registeredCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openRegistered}>
                    See List
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
              </div>
          </div>
        </div>
        <div>
          <input className='w-full p-5 rounded-full text-center' value={value} placeholder="Click Here to Scan..." type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>
        <div className='py-4 text-center'>
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={openSearch}>
            Search By Name
            <SlMagnifier className='ml-2'/>
          </button>
          <button onClick={clearScreen} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 ">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Clear Screen
            </span>
          </button>
          
          <Link to="/screen" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
            Screen Page
          </Link>
          <Link to="/edit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
            Edit Page
          </Link>
          <button onClick={downloadLatest} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
            Download Latest Report
          </button>
          <ShowResetButton/>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-2">
          <div>
            <p className='text-center font-bold text-xl'>Latest Data Displayed: </p>
            <dl className="pb-8 m-auto max-w-md text-gray-900 divide-y divide-gray-200">
                <p className="flex flex-col pb-3">
                    <dt className="mb-1 text-gray-500">Name</dt>
                    <dd className="font-semibold">{name}</dd>
                </p>
                <p className="flex flex-col py-3">
                    <dt className="mb-1 text-gray-500">Email</dt>
                    <dd className="font-semibold">{email}</dd>
                </p>
                <p className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500">Phone number</dt>
                    <dd className="font-semibold">{phoneNumber}</dd>
                </p>
            </dl>
          </div>
          <div className='font-bold text-xl text-center'>
              <p>Set Timeout for Display: </p>
              <label className="mr-28 relative inline-flex items-center cursor-pointer mt-5">
              <input type="checkbox" value="" className="sr-only peer" />
              <div onClick={handleToggle} className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <div style={{marginTop: "-34px", marginLeft:"75px"}} className="ml-3 text-sm font-medium text-gray-900 ">
              <input type='text' className='w-14 h-7 text-center rounded shadow mr-2' value={timerValue} onChange={handleTimerValue} placeholder='5'></input><span>seconds</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Scan