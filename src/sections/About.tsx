import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function About() {
    const imageUrl = 'https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/profile.jpg'
  return (
    <div className='about' id="about">
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text">
                Passionate about coding and committed to continual learning and growth, I am thrilled to contribute to the realm of technology through hands-on experience. With a keen eye for detail and a knack for problem-solving, I delve into the intricacies of code to transform ideas into reality.
                </p>
                <p className="about-grid-info-text">
                As a junior developer, I approach each coding challenge as an opportunity to enhance my skills and embrace fresh perspectives. Whether it&apos;s crafting intuitive user interfaces, building robust backend systems, or optimizing performance, I thrive on the ever-evolving landscape of coding
                </p>
                <p className="about-grid-info-text">
                Throughout my coding journey, I am dedicated to refining my expertise, prioritizing clean code practices, and staying abreast of the latest advancements in Python and JavaScript. As a collaborative team player, I value diversity and believe in the power of collective achievement, where every individual&apos;s unique background contributes to our shared success.
                </p>
                    <p className="about-grid-info-text">
                        My skills sets includes
                    </p>
                    <ul className="about-grid-info-list">
                        <li className='about-grid-info-list-item'>React</li>
                         <li className='about-grid-info-list-item'>Next.js</li>
                          <li className='about-grid-info-list-item'>React-Native</li>
                           <li className='about-grid-info-list-item'>Python</li>
                            <li className='about-grid-info-list-item'>Django</li>
                             <li className='about-grid-info-list-item'>AWS</li>
                              <li className='about-grid-info-list-item'>Docker</li>
                               <li className='about-grid-info-list-item'>Linux</li>
                                <li className='about-grid-info-list-item'>UI/UX</li>
                                 <li className='about-grid-info-list-item'>OOP</li>
                                  <li className='about-grid-info-list-item'>CI/CID</li>
                                   <li className='about-grid-info-list-item'>RESTFUL-API</li>

                    </ul>
            </div>
            <div className="about-grid-photo">
                <div className="overlay"></div>
                <div className="overlay-border"></div>
                <div className="about-grid-photo-container">
                    <Image src={imageUrl} alt="bunny" fill/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About