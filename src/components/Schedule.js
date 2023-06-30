import React from 'react'
/*import { BsMusicNoteBeamed, BsFillKeyFill, BsStopwatch } from 'react-icons/bs'
import { MdDinnerDining } from 'react-icons/md'
import { RiTreasureMapFill } from 'react-icons/ri'
import { SlSpeech } from 'react-icons/sl'
import { AiFillStop, AiFillQuestionCircle, AiFillGift } from 'react-icons/ai'
import { FaUserCheck, FaLuggageCart } from 'react-icons/fa'
import { BiWater } from 'react-icons/bi'*/
import Fade from 'react-awesome-reveal'

const Schedule = () => {

    return (
        <div id="programme" className='mt-10 py-10'>
            <p style={{ letterSpacing: '3px '}} className='pt-10 text-red-500 text-sm font-black sttelemedia text-center'>THE PROGRAMME</p>
            <p style={{ color: '#5a5a5a' }} className='pt-4 sttelemedia text-4xl md:text-5xl font-bold text-center '>Events and activities</p>

            <Fade triggerOnce>
                <div className='container mx-auto py-10 md:px-0 lg:px-0 md:max-w-2xl'>       
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table  className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="sttelemedia px-3 py-3">
                                    TIMING
                                </th>
                                <th scope="col" className="sttelemedia px-6 py-3">
                                    PROGRAMME
                                </th>
                                <th scope="col" className="sttelemedia px-6 py-3">
                                    LOCATION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    11.30am
                                    <p>to 1.30pm</p>
                                </th>
                                <td className="px-6 py-4 text-neutral-600 sttelemedia">
                                Luggage Drop @ Village Hotel Sentosa
                                <hr class="text-neutral-600 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                Registration Opens @ Ola Beach Club
                                <hr class="text-neutral-600 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                Lunch Buffet
                                <br/>
                                <br/>
                                <span className='italic'>*An <span classname="font-bold underline">exclusive</span> shuttle service from the Hotel lobby to Beach Station will be available during this duration.</span>
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Village Hotel Sentosa & Ola Beach Club
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    1.30pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Opening Speech
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr className="bg-white border-b ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    1.45pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Briefing for Treasure Hunt
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    2.00pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                STT GDC Medallion Hunt Flag-Off
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club & Sentosa
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    4.00pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Teams report back at Ola Beach Club
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    4.15pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Water Sports Open
                                <hr class="text-neutral-600 h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                Free & Easy
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    5.00pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                     Ice Cream Cart Opens
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    6.00pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Water Sports Close
                                <hr class="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                Prize Giving
                                </td>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium whitespace-nowrap sttelemedia">
                                    6.15pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Dinner Commences
                                <hr class="h-px my-1 bg-gray-200 border-0"></hr>
                                Sunset DJ on the Decks
                                <hr class="h-px my-1 bg-gray-200 border-0"></hr>
                                Fire & LED Twirling Performance
                                <hr class="h-px my-1 bg-gray-200 border-0"></hr>
                                Disbursement of Hotel Keys
                                <br/>
                                <br/>
                                <span className='italic'>*Details will be further communicated during the event.</span>
                                </td>
                                <td className="px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 ">
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium text-gray-900 whitespace-nowrap sttelemedia">
                                    8.30pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Lucky Draw
                                </td>
                                <td className="px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-3 py-4 text-neutral-600 font-medium text-gray-900 whitespace-nowrap sttelemedia">
                                    9.00pm
                                </th>
                                <td className="text-neutral-600 px-6 py-4 sttelemedia ">
                                Event close
                                </td>
                                <td className="px-6 py-4 sttelemedia">
                                Ola Beach Club
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                    {/*<div className="px-5 py-2 mb-2 border-2 border-neutral-600 bg-white rounded-lg ">              
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">11.00pm to 1.00pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <FaLuggageCart className="w-12 h-12 mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Luggage Drop-off</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5  py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">1.30pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                            <FaUserCheck style={{ color: "#349e49"}} className="w-12 h-12 mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Registration Begin</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5 py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">1.50pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white">
                                <SlSpeech className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Opening Speech</div>
                                    <span className="sttelemedia inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5 py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">2.00pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <AiFillQuestionCircle className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Briefing for Treasure Hunt</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5 py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">2.15pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <RiTreasureMapFill className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Treasure Hunt Flag-Off</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5  py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">4.00pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <BsStopwatch className="text-red-700 w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Treasure Hunt Ends</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <BiWater className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Water Sports Stations Open</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5  py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">6.00pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <BsStopwatch className="text-red-700 w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Water Sports Stations Closes</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <AiFillGift className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Prize Giving & Lucky Draw</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5 py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                    
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">6.30pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <MdDinnerDining className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Dinner Commences</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <BsMusicNoteBeamed className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">DJ Spinning & Music/ Performance</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <BsFillKeyFill className="w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">Disbursement of Hotel Keys</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-5 py-2 mb-2 border-2 border-neutral-600 rounded-lg bg-white">
                   
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">9.00pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <AiFillStop className="text-red-700 w-12 h-12  mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base ">End of Event</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>*/}

            </div>
            </Fade>
        </div>
    )
}

export default Schedule
