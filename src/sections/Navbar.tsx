'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/Button'
import {GiHamburgerMenu} from 'react-icons/gi';
import {CgClose} from 'react-icons/cg'
import {motion} from 'framer-motion'
import Image from 'next/image';

function Navbar() {
  const imageUrl = 'https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/brand-log.png'

  const [navbarVisible, setNavbarVisible]=useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible]=useState(false)


  useEffect(()=>{
    window.addEventListener("scroll",()=>(
      window.pageYOffset > 100 ? setNavbarVisible(true) : setNavbarVisible(false)
    ))
  },[])

  useEffect(()=>{
     const links = document.querySelectorAll(".nav-items-list-item-link")
     links.forEach((link)=>{
      link.addEventListener("click",()=>setResponsiveNavVisible(false))
     });

     const nav = document.querySelector('.nav-items')
     nav?.addEventListener("click", (e)=>{
      setResponsiveNavVisible(false)
     })

     const html = document.querySelector('html')
     html?.addEventListener("click", (e)=>{
      setResponsiveNavVisible(false)
     })
  },[])


  useEffect(()=>{
    const main = document.querySelector('main')
    if(responsiveNavVisible){
      main?.classList.add('blur');
    }else{
      main?.classList.remove('blur')
    }
  },[responsiveNavVisible])

  const sectionLinks=[
    {name:"About", link:"/#about"},
    {name:"Experience", link:"/#experience"},
    {name:"Work", link:"/#work"},
    {name:"Contact", link:"/#contact"}
  ]

  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
         <div className="brand"
         >
          <Link href="#">
            <Image src={imageUrl} alt="" width={150} height={80}/>
          </Link>
         </div>

         <div className="nav-responsive-toggle">
          {responsiveNavVisible ?(
            <CgClose
              onClick={(e: { stopPropagation: () => void; })=>{e.stopPropagation();setResponsiveNavVisible(false)}}/>
          ):
          (<GiHamburgerMenu
             onClick={(e: { stopPropagation: () => void; })=>{e.stopPropagation(); setResponsiveNavVisible(true)}}
          />)}
         </div>

         <div className={`${responsiveNavVisible && "nav-responsive"} nav-items`}>
          <ul className="nav-items-list">
            {
              sectionLinks.map(({name,link})=>(
                <li key={name} className='nav-items-list-item'>
                <Link href={link} className='nav-items-list-item-link'>{name}</Link>
                </li>
              ))
            }
          </ul>
          <div className="nav-items-button">
            <Button text='Resume' link="/assets/documents/ken_cv.pdf"/>
          </div>
         </div>
      </div>
    </nav>
  )
}

export default Navbar