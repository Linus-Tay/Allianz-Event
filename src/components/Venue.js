import React from 'react'
import GoogleMapReact from 'google-map-react';
import { ImLocation } from 'react-icons/im'
import Fade from 'react-awesome-reveal'

const Venue = () => {

    const defaultProps = { 
        center: {lat: 1.2530770, lng: 103.8151870}, 
        zoom: 16
     }

    return (
        <div id='venue' className='bg-white'>
        <p className='special pt-20 text-5xl text-center'>Event Venue</p>
        <span className='line'></span>
        <Fade triggerOnce>
        <div className='m-auto mt-10 border-solid border-4' style={{ height: '40vh', width: '85%', borderImage: 'linear-gradient(to right, #06B6D4, #3B82F6) 1'}}>
                <GoogleMapReact 
                    bootstrapURLKeys={{
                        key: 'AIzaSyD1LzKWYo55CA_wsGnBH9s0N5a6uLJbeCw', 
                        language: 'en'
                    }}
                    defaultCenter={defaultProps.center}
                    center={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
                        <ImLocation
                        size={40}
                        color='red'
                        lat={defaultProps.center.lat}
                        lng={defaultProps.center.lng}
                        >
                            </ImLocation>
                    </GoogleMapReact>
        </div>
        <p style={{ width: '75%' }} className='m-auto my-5 text-center text-xl italic'><span className='font-bold text-2xl'>Location:</span> Ola Beach Club, Sentosa</p>
        <p style={{ width: '75%' }} className='m-auto pb-10 text-center text-xl italic'><span className='font-bold text-2xl'>Address:</span> 46 Siloso Bch Walk, Singapore 099005 </p>
        </Fade>
    </div>
    )
}

export default Venue
