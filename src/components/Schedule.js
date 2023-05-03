import React from 'react'
import { Tab, initTE } from "tw-elements";
import user1 from './images/user1.png'
import user2 from './images/user2.png'
import user3 from './images/user3.png'
import user4 from './images/user4.png'
import user5 from './images/user5.png'
import user6 from './images/user6.png'
import { AiFillStop } from 'react-icons/ai'
import { FaUserCheck, FaExclamation } from 'react-icons/fa'
import { GiHand } from 'react-icons/gi'
import Fade from 'react-awesome-reveal'

const Schedule = () => {
    initTE({ Tab });

    function handleClick() {
        const triggerTabList = [].slice.call(document.querySelectorAll('li p'))
        triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new Tab(triggerEl);
    
        triggerEl.addEventListener('click', (e) => {
            e.preventDefault();
            tabTrigger.show();
    
        });
        });
    }

    return (
        <div id="programme" className='bg-orange-50'>
             <p className='special mt-20 text-5xl text-center'>Programme</p>
            <span className='line'></span>
            <Fade triggerOnce>
                <div className='container py-10 m-auto'>       
            <div
                className="hidden opacity-100 transition-opacity ease-linear data-[te-tab-active]:block"
                id="day1"
                role="tabpanel"
                data-te-tab-active>
                    <div className="p-5 mb-4 border border-gray-900 rounded-lg bg-white">
                    <time className="text-lg font-semibold text-gray-900">January 1st 2022 - 7:00pm </time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <div className="items-center block p-3 sm:flex hover:bg-white ">
                                <FaUserCheck className="w-12 h-12 mb-3 mr-3 sm:mb-0"/>
                                <div className="text-gray-600 ">
                                    <div className="text-base font-normal"><span className="font-medium text-gray-900">Registration Commences</span></div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                        Outside Melati Ballroom
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="p-5 mb-4 border border-gray-900 rounded-lg bg-white">
                    <time className="text-lg font-semibold text-gray-900">January 1st 2022 - 8:00pm to 8:55pm</time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <div className="items-center block p-3 sm:flex hover:bg-white ">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src={user1} alt=""/>
                                <div className="text-gray-600">
                                    <div className="text-base font-normal"><span className="font-medium text-gray-900 ">Cassandra</span> is ready to rock your world with <span className="font-medium text-gray-900"> Data Analytics</span></div>
                                    <div className="text-sm font-normal">"Sharing inspiring informatics is my goal."</div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500 ">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                        Peony Junior Ballroom
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="items-center block p-3 sm:flex hover:bg-white ">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src={user2} alt=""/>
                                <div>
                                    <div className="text-base font-normal text-gray-600"><span className="font-medium text-gray-900">Roger</span> is ready to make you his <span className="font-medium text-gray-900">Target Audience</span></div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                        Melati Ballroom
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="p-5 mb-4 border border-gray-900 rounded-lg bg-white">
                    <time className="text-lg font-semibold text-gray-900">January 1st 2022 - 9:00pm to 9:55pm</time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <div className="items-center block p-3 sm:flex hover:bg-white">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src={user3} alt=""/>
                                <div className="text-gray-600 ">
                                    <div className="text-base font-normal"><span className="font-medium text-gray-900 ">Anne</span> aims to showcase some <span className="font-medium text-gray-900">Incredible Graphics</span></div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                        Peony Junior Ballroom
                                    </span> 
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="items-center block p-3 sm:flex hover:bg-white">
                                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src={user4} alt=""/>
                                <div>
                                    <div className="text-base font-normal text-gray-600"><span className="font-medium text-gray-900">Macky's</span> speech will bring <span className="font-medium text-gray-900">Music to Your Ears</span></div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                        Melati Ballroom
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="p-5 mb-4 border border-gray-900 rounded-lg bg-white">
                    <time className="text-lg font-semibold text-gray-900 ">January 2nd 2022 - 10:00pm to 10:30pm</time>
                    <ol className="mt-3 divide-y divider-gray-200">
                        <li>
                            <div className="items-center block p-3 sm:flex hover:bg-white ">
                                <AiFillStop className="text-red-700 w-12 h-12 mb-3 mr-3 sm:mb-0"/>
                                <div className="text-gray-600">
                                    <div className="text-base font-normal"><span className="font-medium text-gray-900 ">Closing Address and End of Day.</span></div>
                                    <span className="inline-flex items-center text-xs font-normal text-gray-500">
                                        <svg aria-hidden="true" className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                        Melati Ballroom
                                    </span> 
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
            </div>
            </Fade>
        </div>
    )
}

export default Schedule