import React from 'react'
import GoogleMapReact from 'google-map-react';
import { FaUmbrellaBeach } from 'react-icons/fa'
import { BiHotel } from 'react-icons/bi'
import Fade from 'react-awesome-reveal'

const Venue = () => {

    const defaultProps = { 
        event: {lat: 1.2530770, lng: 103.8151870}, 
        staycation: {lat: 1.252588868855636, lng: 103.82030546631348}, 
        zoom: 15
     }
    
     const showInMapClicked1 = () => {
        window.open("https://maps.google.com?q=Ola Beach Club" )
    }
    const showInMapClicked2 = () => {
        window.open("https://maps.google.com?q=Village Hotel Sentosa" )
    }


    return (
        <div id='venue' className='py-10 bg-white'>
         <p style={{ letterSpacing: '3px '}} className='pt-20 text-red-500 text-sm font-black sttelemedia text-center'>EVENT VENUE</p>
         <p style={{ color: '#5a5a5a' }} className='pt-4 sttelemedia text-4xl md:text-5xl font-bold text-center '>Getting there</p>
        <Fade triggerOnce>
        <div className='container mx-auto mt-10' style={{ height: '40vh', width: '85%'}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{
                        key: 'AIzaSyD1LzKWYo55CA_wsGnBH9s0N5a6uLJbeCw', 
                        language: 'en'
                    }}
                    defaultCenter={defaultProps.staycation}
                    center={defaultProps.staycation}
                    defaultZoom={defaultProps.zoom}
                    
                    
                    >
                        <FaUmbrellaBeach
                        onClick={showInMapClicked1}
                        className='cursor-pointer'
                        size={40}
                        color='#DC2626'
                        lat={defaultProps.event.lat}
                        lng={defaultProps.event.lng}
                        >
                         </FaUmbrellaBeach>
                         <BiHotel
                        onClick={showInMapClicked2}
                        className='cursor-pointer'
                        size={40}
                        color='#DC2626'
                        lat={defaultProps.staycation.lat}
                        lng={defaultProps.staycation.lng}
                        ></BiHotel>
                    </GoogleMapReact>
        </div>
            <div className='container w-max flex items-center pt-4 sttelemedia font-bold m-auto mt-5 md:text-xl'>
                <div className='text-red-600 flex-row'>
                <FaUmbrellaBeach/>
                </div>
                <p className='text-sm flex items-center ml-2'>
                    EVENT VENUE: 
                    <span className='ml-2 font-bold text-red-600'>
                        OLA BEACH CLUB</span>
                </p>
            </div>
            <p onClick={showInMapClicked1} className='cursor-pointer sttelemedia text-center font-medium mb-5'>Google Maps: <span className='underline italic'>46 Silosa Beach Walk Singapore 099005</span></p>
            <div className='container w-max flex items-center pt-4 sttelemedia font-bold m-auto mt-5 md:text-xl'>
                <div className=' flex-row'>
                <BiHotel style={{ color: "#DC2626"}}/>
                </div>
                <p className='text-sm flex items-center ml-2'>
                    STAYCATION:
                    <span className='ml-2 font-bold' style={{ color: "#DC2626"}}>
                    VILLAGE HOTEL SENTOSA</span>
                </p>
            </div>
            <p onClick={showInMapClicked2} className='cursor-pointer sttelemedia text-center font-medium '>Google Maps: <span className='underline italic'>10 Artillery Avenue Singapore 099951</span></p>
            <p className='sttelemedia text-center font-medium italic mb-9'>Check Out Timing: 15 July 2023 @ 12pm</p>
        </Fade>
        <Fade triggerOnce>
            <div className='container rounded-xl mx-auto px-4 pt-4 pb-6 mb-16' style={{ width: '85%'}}>
                <ul className="m-auto max-w-2xl space-y-1 text-neutral-600 list-disc list-inside">
                <p className="my-2 mt-4 text-lg font-semibold text-gray-900">STEP 1: Getting to Village Hotel Sentosa</p>
                    <li>By Taxi/Private Hire: Alight directly at Village Hotel Sentosa Lobby.</li>
                    <li>By Car: Parking lots are available and based on first-come-first-served basis. (Complimentary parking coupons are provided for staff who have opted-in to the Statcation at Village Hotel Sentosa)</li>
                    <li>By MRT & Sentosa Express: Alight at Harbourfront Station, and board the Sentosa Express in Vivocity, Level 3. Alight at Imbiah Station, and walk towards Village Hotel Sentosa. (approx 300m/ 5-min walk)</li>
                </ul>
                <ul className="m-auto max-w-2xl space-y-1 text-neutral-600 list-disc list-inside">
                <p className="my-2 mt-4 text-lg font-semibold text-gray-900">STEP 2: Luggage Drop @ Village Hotel Sentosa</p>
                    <li>Drop off your luggage at Village Hotel Sentosa, between 11:30am to 1:30pm.</li>
                    <li>Our friendly event crew will be on hand to tag your luggage in accordance to your room number.</li>
                </ul>
                
                <ul className="m-auto max-w-2xl space-y-1 text-neutral-600 list-disc list-inside">
                <p className="my-2 mt-4 text-lg font-semibold text-gray-900">STEP 3: Getting to Ola Beach Club</p>
                    <li>You may take our STT GDC shuttle service from the Hotel Lobby towards Beach Station.</li>
                    <li>Please arrive at our Event Venue (Ola Beach Club) at 1:30pm to register your attendance.</li>
                </ul>
            </div>

        </Fade>
    </div>
    )
}

export default Venue
