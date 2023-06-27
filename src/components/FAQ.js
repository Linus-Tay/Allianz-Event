import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Fade from 'react-awesome-reveal'

const FAQ = () => {

    function Icon({ id, open }) {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              id === open ? "rotate-180" : ""
            } h-5 w-5 transition-transform`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        );
      }

    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

     return (
        <div className='py-24' id='faq'>
        <div style={{width: '85%'}} className='m-auto'>
        <p style={{ letterSpacing: '3px '}} className='pt-10 text-red-500 text-sm font-black sttelemedia text-center'>FREQUENTLY ASKED QUESTIONS</p>
            <p style={{ color: '#5a5a5a' }} className='pt-4 sttelemedia text-4xl md:text-5xl font-bold text-center '>Let’s make your experience a memorable one</p>
                <Fade triggerOnce>
                <div className="mt-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <Fragment>
                <Accordion className={open === 1 ? '':'px-4'} open={open === 1} icon={<Icon id={1} open={open} />} >
                    <AccordionHeader onClick={() => handleOpen(1)} className={open === 1 ? 'sttelemedia duration-300 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    What is this event about?
                    </AccordionHeader>
                    <AccordionBody className={open === 1 ? 'sttelemedia duration-300 px-4 py-2 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    This event is built for the spirit of togetherness with exhilarating team building activities to foster lasting camaraderie on Day 1, indulging in self-care and relaxation as you recharge your energy by the seaside on Day 2.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 2 ? '':'px-4'} open={open === 2} icon={<Icon id={2} open={open} />} >
                    <AccordionHeader onClick={() => handleOpen(2)} className={open === 2 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    Will this be an event held annually?
                    </AccordionHeader>
                    <AccordionBody className={open === 2 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    Our staff engagement initiatives are long term, and this event will be the first of more events that are being planned for the near future so stay tuned!
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 3 ? '':'px-4'} open={open === 3} icon={<Icon id={3} open={open} />}  >
                    <AccordionHeader onClick={() => handleOpen(3)} className={open === 3 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    Why is there hotel accommodation provided for 1 night?
                    </AccordionHeader>
                    <AccordionBody className={open === 3 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    Upon registering for this event, each staff will be provided with a 1 night stay at Village Hotel Sentosa. The rooms provided are Single Supplementary Rooms and comes with breakfast for one the next morning. Any incremental charges incurred during your stay will be of personal expense and not claimable with the Company.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 4 ? '':'px-4'} open={open === 4} icon={<Icon id={4} open={open} />}  >
                    <AccordionHeader onClick={() => handleOpen(4)} className={open === 4 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    I will be driving to the venue, where can I park? Is parking provided?
                    </AccordionHeader>
                    <AccordionBody className={open === 4 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    Complimentary parking coupons are provided for staff who have opted-in to the Staycation at Village Hotel Sentosa. Parking lots at the hotel are based on availability.
                    <br/><br/>
                    If the hotel carpark is full, you may find alternative parking at “Beach Station Carpark”. It is a short 5-min walk away from the Hotel.
                    <br/><br/>
                    The following rates apply at Beach Station Carpark:

                    
                    <div className="relative overflow-x-auto py-5">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-neutral-600 uppercase bg-gray-50">
                                <tr className='text-center'>
                                    <th scope="col" className="text-neutral-600 px-6 py-3">
                                        TIME
                                    </th>
                                    <th scope="col" className="text-neutral-600 px-6 py-3">
                                        CHARGES
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-600 whitespace-nowrap">
                                        7am - 5pm
                                    </th>
                                    <td className="px-6 py-4 text-neutral-600">
                                        $1.20 per hour <br/> <span className='italic'>based on per-minute charging of $0.02/min</span>
                                    </td>
                                </tr>
                                <tr className="text-center bg-white border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-neutral-600 whitespace-nowrap">
                                        5.01pm - 6.59am
                                    </th>
                                    <td className="px-6 py-4 text-neutral-600">
                                        $2.40 per entry
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 5 ? '':'px-4'} open={open === 5} icon={<Icon id={5} open={open} />}  >
                    <AccordionHeader onClick={() => handleOpen(5)} className={open === 5 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    Can I attend the Staff Appreciation Day event at Ola Beach Club, but not take up the 1-night staycation?
                    </AccordionHeader>
                    <AccordionBody className={open === 5 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    Staff of STT GDC are entitled to the 1-night stay (with one breakfast the next morning) at Village Hotel Sentosa. Any incremental charges incurred during your stay will be borne by yourself, and will be settled directly with <span className="font-bold">Village Hotel Sentosa.</span>
                    <br/><br/>
                    Yes, most certainly. While registering, there is an option for you to select to indicate that you intend to opt out of the 1-night staycation.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 6 ? '':'px-4'} open={open === 6} icon={<Icon id={6} open={open} />}>
                    <AccordionHeader  onClick={() => handleOpen(6)} className={open === 6 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    How do I deposit my luggage or bulky bag before the event starts? When can I drop it off?
                    </AccordionHeader>
                    <AccordionBody className={open === 6 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    You may drop off your luggage at Village Hotel Sentosa lobby only on day of event (14 July 2023, Friday), between 11.00am to 1.30pm. Our friendly event crew and hotel concierge will be on hand to receive them.
                    <br/><br/>
                    There will also be a complimentary shuttle service from Village Hotel Sentosa lobby towards Beach Station. The event venue (Ola Beach Club) is a short walk away upon alighting.
                    </AccordionBody>
                </Accordion>
       <Accordion className={open === 7 ? '':'px-4'} open={open === 7} icon={<Icon id={7} open={open} />} >
                    <AccordionHeader onClick={() => handleOpen(7)} className={open === 7 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    What is the check-out procedure for the 1-night staycation?
                    </AccordionHeader>
                    <AccordionBody className={open === 7 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    On 15 Jul 2023 (Sat) before 12.00pm, please proceed to the counter to process your check-out. Any incremental charges incurred during your stay will be borne by yourself, and will be settled directly with Village Hotel Sentosa then.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 8 ? '':'px-4'} open={open === 8} icon={<Icon id={8} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(8)} className={open === 8 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    What is the STT GDC Medallion Hunt about? 
                    </AccordionHeader>
                    <AccordionBody className={open === 8 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    STT GDC Medallion Hunt is an exhilarating team-based treasure hunt activity for 6 medallions that is specially planned for participating staff at the event!
                    <br/><br/>
                    As you arrive and register at the event grounds (Ola Beach Club), you will receive a wrist band with a team number indicated and assigned randomly. You, alongside your team members, will set off on a treasure hunt across Sentosa to find hidden medallions baring the STT GDC logo within a given duration.
                    <br/><br/>
                    Teams that find these medallions will be rewarded with a cash prize reward equivalent to the medallions. There will be 1 gold medallion (worth SGD 1,500) and 5 silver medallions (worth SGD 700) to be found. The medallions will be hidden in various spots across Sentosa, and teams can redeem cash of corresponding value when you find them. To aid teams in locating these medallions, hints will be released at a given interval that helps point you towards their respective location. Circles denoting the vicinity of the medallion locations will also shrink at the given internal.
                    <br/><br/>
                    You can find out more about how to play and rules of the game here.
                    <br/><br/>
                    Not to worry, there will be a game briefing before we start the hunt too!
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 9 ? '':'px-4'} open={open === 9} icon={<Icon id={9} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(9)} className={open === 9 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-lg text-white hover:text-white text-left':'text-neutral-600 text-lg text-left sttelemedia'}>
                    Will entry into Sentosa be complimentary?
                    </AccordionHeader>
                    <AccordionBody className={open === 9 ? 'sttelemedia duration-500 px-4 py-4 bg-neutral-600 text-white hover:text-white text-md':'text-left sttelemedia'}>
                    For staff who have registered successfully for this event, entry into Sentosa will be complimentary. More details will be shared with you closer to date.
                    </AccordionBody>
                </Accordion>
            </Fragment>
            </div>
            </Fade>
        </div>
        </div>
  )
}

export default FAQ
