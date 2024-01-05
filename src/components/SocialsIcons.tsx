import Link from 'next/link'
import React from 'react'
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
} from 'react-icons/fi';

function SocialIcons() {
        const socialLinks=[
        {name:'Github', icon:<FiGithub/>, link:"https://github.com/Baah-Danso-Kenneth"},
        {name:'LinkedIn', icon:<FiLinkedin/>, link:"https://www.linkedin.com/in/kwadwo-danso-sudo-reboot"},
        {name:'Twitter', icon:<FiTwitter/>, link:'https://twitter.com/drf_react_next'},
     
    ]

  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {socialLinks.map(({name, icon, link},index)=>(
                <li key={index} title={name} className='social-icons-list-item'>
                    <Link href={link} className='social-icons-list-item-link' target='_blank'>{icon}</Link>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default SocialIcons