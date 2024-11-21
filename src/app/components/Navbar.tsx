import React from 'react'
import { IoMenu,IoClose } from "react-icons/io5";
import {useState} from "react"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className='container pt-8'>
    <div className='flex justify-between items-center'>
        <div className='text-xl font-medium'>ROOHI BATOOL</div>
      <ul className='gap-10 lg:gap-16 hidden md:flex'>
        <li className='menuLink'><a href="#hero">Home</a></li>
        <li className='menuLink'><a href="#about">About</a></li>
        <li className='menuLink'><a href="#contact">Contact</a></li>
        <li className='menuLink'><a href="#skills">Skills</a></li>
      </ul>
      <div className='md:hidden' onClick={toggleMenu}>
        {isMenuOpen ? <IoClose size={30}/> :
        <IoMenu size={30} />
        }
      </div>
       {/* <IoMenu className='md:hidden' size={30}/> */}
    </div>
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    )

    }
    {isMenuOpen && (
      <ul className='flex flex-col gap-4 mt-4 md:hidden'>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
      </ul>
    )

    }
    </div>
  )
}
    export default Navbar