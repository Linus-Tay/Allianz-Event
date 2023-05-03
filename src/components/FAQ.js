import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Fade from 'react-awesome-reveal'

const FAQ = () => {
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

     return (
        <div className='pt-20 pb-10' id='faq'>
        <div style={{width: '85%'}} className='m-auto'>
            <p className='special text-5xl text-center'>Frequently Asked Questions</p>
                <span className='line'></span>
                <Fade triggerOnce>
                <div className="mt-10 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <Fragment >
                <Accordion className={open === 1 ? '':'px-4'} open={open === 1}  onClick={() => handleOpen(1)}>
                    <AccordionHeader className={open === 1 ? 'duration-300 px-4 py-4 bg-orange-500 text-white hover:text-white':''}>
                    What is Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className={open === 1 ? 'duration-300 px-4 py-2 bg-orange-500 text-white hover:text-white text-md':''}>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 2 ? '':'px-4'} open={open === 2} onClick={() => handleOpen(2)}>
                    <AccordionHeader className={open === 2 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white':''}>
                    How to use Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className={open === 2 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white text-md':''}>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 3 ? '':'px-4'} open={open === 3} onClick={() => handleOpen(3)}>
                    <AccordionHeader className={open === 3 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white':''}>
                    What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className={open === 3 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white text-md':''}>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 4 ? '':'px-4'} open={open === 4} onClick={() => handleOpen(4)}>
                    <AccordionHeader className={open === 4 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white':''}>
                    What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className={open === 4 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white text-md':''}>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 5 ? '':'px-4'} open={open === 5} onClick={() => handleOpen(5)}>
                    <AccordionHeader className={open === 5 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white':''}>
                    What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className={open === 5 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white text-md':''}>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
                    </AccordionBody>
                </Accordion>
                <Accordion className={open === 6 ? '':'px-4'} open={open === 6} onClick={() => handleOpen(6)}>
                    <AccordionHeader className={open === 6 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white':''}>
                    What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody className={open === 6 ? 'duration-500 px-4 py-4 bg-orange-500 text-white hover:text-white text-md':''}>
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making mistakes.
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams.
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