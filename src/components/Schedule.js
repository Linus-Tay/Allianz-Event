import React from 'react'
import { BsMusicNoteBeamed, BsFillKeyFill, BsStopwatch } from 'react-icons/bs'
import { MdDinnerDining } from 'react-icons/md'
import { RiTreasureMapFill } from 'react-icons/ri'
import { SlSpeech } from 'react-icons/sl'
import { AiFillStop, AiFillQuestionCircle, AiFillGift } from 'react-icons/ai'
import { FaUserCheck, FaLuggageCart } from 'react-icons/fa'
import { BiWater } from 'react-icons/bi'
import Fade from 'react-awesome-reveal'

const Schedule = () => {

    return (
        <div id="programme">
            <p style={{ letterSpacing: '3px '}} className='mt-20 text-red-500 text-sm font-black sttelemedia   text-center'>THE PROGRAMME</p>
            <p style={{ color: '#5a5a5a' }} className='pt-4 sttelemedia text-4xl md:text-5xl font-bold text-center '>What To Expect</p>
            <Fade triggerOnce>
                <div className='container py-10 md:px-20 lg:px-30 xl:px-40 m-auto'>       
                    <div className="px-5 py-2 mb-2 border-2 border-neutral-600 bg-white rounded-lg ">              
                    <ol className="mt-2 divide-y divider-gray-200">
                    <div className="text-center"><time className="text-lg font-black sttelemedia">11.00pm to 1.00pm</time></div>
                        <li className="mt-1">
                            <div className="items-center block p-3 flex hover:bg-white ">
                                <FaLuggageCart className="w-12 h-12 mr-3 sm:mb-0"/>
                                <div>
                                    <div className="sttelemedia text-base font-semibold">Luggage Drop-off</div>
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
                                    <div className="sttelemedia text-base font-semibold">Registration Begin</div>
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
                                    <div className="sttelemedia text-base font-semibold">Opening Speech</div>
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
                                    <div className="sttelemedia text-base font-semibold">Briefing for Treasure Hunt</div>
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
                                    <div className="sttelemedia text-base font-semibold">Treasure Hunt Flag-Off</div>
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
                                    <div className="sttelemedia text-base font-semibold">Treasure Hunt Ends</div>
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
                                    <div className="sttelemedia text-base font-semibold">Water Sports Stations Open</div>
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
                                    <div className="sttelemedia text-base font-semibold">Water Sports Stations Closes</div>
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
                                    <div className="sttelemedia text-base font-semibold">Prize Giving & Lucky Draw</div>
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
                                    <div className="sttelemedia text-base font-semibold">Dinner Commences</div>
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
                                    <div className="sttelemedia text-base font-semibold">DJ Spinning & Music/ Performance</div>
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
                                    <div className="sttelemedia text-base font-semibold">Disbursement of Hotel Keys</div>
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
                                    <div className="sttelemedia text-base font-semibold">End of Event</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" ></path></svg>
                                        Village Hotel Sentosa
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>

            </div>
            </Fade>
        </div>
    )
}

export default Schedule