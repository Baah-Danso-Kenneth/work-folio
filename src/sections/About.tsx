import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function About() {
    const imageUrl = 'https://work-folio-ken.s3.eu-north-1.amazonaws.com/assets/images/profile.jpg'
  return (
    <div className='about' id="about">
        <div className="title">
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className="about-grid-info-text">
                   Enthusiastic about coding and eager to embark on a journey of learning and growth, I am excited to contribute to the world of technology through hands-on experience. With a strong attention to detail and a passion for problem-solving, I explore the intricacies of code to turn concepts into reality.

                </p>
                <p className="about-grid-info-text">
               As an intern, I view every coding challenge as an opportunity to expand my skills and embrace new ideas. Whether it &apos;s crafting user-friendly interfaces, working on scalable backend systems, or enhancing performance, I am energized by the dynamic nature of coding.

                </p>
                <p className="about-grid-info-text">
                    During my coding journey, I am dedicated to honing my skills, emphasizing clean code practices, and staying current with the latest technologies. As an intern eager to integrate into the coding community, I value collaboration, knowledge-sharing, and the continuous pursuit of improvement.
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