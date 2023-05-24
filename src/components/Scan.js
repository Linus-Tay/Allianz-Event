import React, { useState } from 'react'
import { collection, getDocs, query, where, doc as docSnapshot, updateDoc } from "firebase/firestore";
import {db} from '../firebase';
import exportFromJSON from 'export-from-json'
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  };
  

  const [value, setValue] = useState("");
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [searchText, setSearchText] = useState("")
  const [registeredCount, setRegisteredCount] = useState(0)
  const [unregisteredCount, setUnregisteredCount] = useState(0)
  const [awardeesCount, setAwardeesCount] = useState(0)
  const [vipsCount, setVipsCount] = useState(0)

  const docRef = query(collection(db, "sttelemedia"));
  const registeredRef = query(collection(db, "sttelemedia"), where("registered", "==", "Yes"));
  const unregisteredRef = query(collection(db, "sttelemedia"), where("registered", "==", "No"));
  const awardeesRef = query(collection(db, "sttelemedia"), where("awardee", "==", "Yes"));
  const vipsRef = query(collection(db, "sttelemedia"), where("awardee", "==", "Yes"));

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

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const scanRef = query(collection(db, "sttelemedia"),where("uniqueNumber", "==", parseInt(value)));
      getDocs(scanRef).then((querySnapshot) => {
        if (querySnapshot.size === 0) {
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
            localStorage.setItem("userData", JSON.stringify(doc.data().formData));
        })
        }

    })
      registeredCountF()
      unregisteredCountF()
      awardeesCountF()
      vipsCountF()
      setValue('')
    }
  }

  const clearScreen = () => {
    localStorage.setItem("userData", JSON.stringify({}));
    setName("")
    setPhoneNumber("")
  }

  const resetRegistration = () => {
    getDocs(docRef).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        updateDoc(docSnapshot(db, "sttelemedia", doc.id), {
          registered: "No"
        });
      })
    });
    window.location.reload();
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

const downloadRegistered = () => {
  getDocs(registeredRef)
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

const downloadUnregistered = () => {
  getDocs(unregisteredRef)
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

const donwloadAwardees = () => {
  getDocs(awardeesRef)
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

const downloadVIPs = () => {
  getDocs(vipsRef)
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

  const [modalIsOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState([])
  const [subtitle, setSubtitle] = useState()
  const [download, setDownload] = useState()


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
      setDownload(downloadRegistered)
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
      setDownload(downloadUnregistered)
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
      setDownload(donwloadAwardees)
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
      setDownload(downloadVIPs)
    })
  }


  function closeModal() {
    setIsOpen(false);
  }

  const [selected, setSelected] = useState([{uniqueNumber: "blank"}])

  const handleClick = (id) => {
    console.log(id)
    setSelected(id)
  }

  console.log(selected.uniqueNumber)

  return (
    <div>
      <ToastContainer
            position="top-right"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />
    <div className='container m-auto'>
        <div className="grid grid-cols-4 gap-4 text-center pt-40">
        <div className="pb-10">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Awardees</h5>
                  <p>{awardeesCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openAwardees}>
                    See List
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
                    <Modal
                      ariaHideApp={false}
                      isOpen={modalIsOpen}
                      style={customStyles}
                      onRequestClose={closeModal}
                      contentLabel="Example Modal"
                    >
                      <p className='text-xl font-bold text-center'>{subtitle}</p>
                      <div className='text-right'>
                      <button onClick={download} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                            Download {subtitle} Report
                      </button>
                      <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300" onClick={closeModal}>Close</button>
                      </div> 
                      <input type="text" onChange={event => setSearchText(event.target.value)} className="my-10 bg-gray-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Search Name Here..."></input>
                      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr className='border-solid border-2 border-grey-200'>
                          <th></th>
                          <th scope="col" class="px-6 py-3">uniqueNumber</th>
                          <th scope="col" class="px-6 py-3">Name</th>
                          <th scope="col" class="px-6 py-3">Email</th>
                          <th scope="col" class="px-6 py-3">Department</th>
                          <th scope="col" class="px-6 py-3">Registered?</th>
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
                          <tr class="bg-white border-b" key={data.uniqueNumber}>
                          <td class="px-6 py-4">
                          <input onClick={() => handleClick(data)} type="radio" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                          </td>
                          <td class="px-6 py-4">{data.uniqueNumber}</td>
                          <td class="px-6 py-4">{data.name}</td>
                          <td class="px-6 py-4">{data.email}</td>
                          <td class="px-6 py-4">{data.department}</td>
                          <td class="px-6 py-4">{data.registered}</td>
                          </tr>
                        ))
                      }
                      </tbody>
                    </table>
                    </Modal>
       
              </div>
            </div>
          <div className="pb-10">
            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">VIPs</h5>
                  <p>{vipsCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openVIPs}>
                    See List
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
            </div>
          <div className="pb-10">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Unregistered</h5>
                  <p>{unregisteredCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openUnegistered}>
                    See List
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
            </div>
          <div className="pb-10">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Registered</h5>
                  <p>{registeredCount}</p>
                  <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" onClick={openRegistered}>
                    See List
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
          </div>
        </div>
        <div>
          <input className='w-full p-5 rounded-full text-center' value={value} placeholder="Click Here to Scan..." type="text" onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>
        <div>Data Currently On Display: </div>
        <p>{name}</p>
        <p>{phoneNumber}</p>
        <div className='text-center'>
          <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={openSearch}>
            Search By Name
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={clearScreen}>Clear Screen</button>
          <button onClick={downloadLatest} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2">
                Download Latest Report
          </button>
          <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2" onClick={resetRegistration}>Reset Registration</button>
        </div>
    </div>
    </div>
  )
}

export default Scan