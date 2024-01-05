'use client'
import React, { useEffect, useState } from 'react'

function Experience() {
    const [selected, setSelected]=useState(0)
    
    useEffect(()=>{
        const transformedSelected=()=>{
            const underline = document.querySelector<HTMLElement>('.underline');
            underline!.style.top = `${selected * 2.5}rem`
        };
        transformedSelected();
    }, [selected])

    const experiences=[
        {name:"KoletSpace", 
        role:"Frontend Developer",
         start:'January 2021',
          end:'December 2021',
           shortDescription:[
            "As a Frontend Developer at KoletSpace, I played a pivotal role in crafting engaging user interfaces and ensuring seamless responsive design.",
            "My responsibilities extended beyond UI creation; I seamlessly integrated backend functionalities with the frontend, ensuring a cohesive and efficient application flow."
          ]

        },

      {name:"BestQuote", 
        role:"FullStack Developer",
         start:'January 2022',
          end:'March 2022',
           shortDescription:[
           "As a FullStack Developer at BestQuote, I played a key role in creating APIs and developing frontend pages using React and Django Rest Framework.",
    "I successfully navigated the project's codebase, ensuring effective communication between the frontend and backend components."
        ]},

        {name:"Amalitech Trainee", 
        role:"Frontend Developer",
         start:'Feburary 2022',
          end:'May 2023',
           shortDescription:[
             "As an AmaliTech trainee, I contributed to the development of the authentication system.",
             "Utilizing the Context API, I seamlessly integrated frontend and backend components, ensuring efficient data flow.",
             "My responsibilities included fetching data from the backend and creating intuitive UI pages for an enhanced user experience."
        ]},
        
        
        {name:"CodeWright", 
        role:"Frontend Developer",
         start:'Feburary 2022',
          end:'May 2023',
           shortDescription:[
          "As a Frontend Developer at CodeWright, I focused on creating challenges with an emphasis on UI and responsive design.",
          "My role centered around implementing and optimizing user interfaces for foreign clients, ensuring a seamless and engaging experience."
        ]}  
    ]


  return (
    <div className='experience' id='experience'>
        <div className="title">
          <h2>experience overview</h2>
        </div>
        <div className="container">
            <ul className="exp-slider">
                <div className="underline"></div>
                {experiences.map((experience,index)=>(
                  <li key={index} 
                  className={`exp-slider-item ${index === selected && 'exp-slider-item-selected'}`}
                  onClick={()=>setSelected(index)}
                  >
                    <span>{experience.name}</span>
                  </li>
                ))}
            </ul>

            <div className="exp-details">
                <div className="exp-details-position">
                    <h3>
                        <span>{experiences[selected].role}</span>
                        <span className="exp-details-position-company">
                            &nbsp;@&nbsp;
                            <p className='link'>{experiences[selected].name}{" "}</p>
                        </span>
                    </h3>
                    <p className="exp-details-range">
                        {experiences[selected].start} - {experiences[selected].end}
                    </p>
                    <ul className="exp-details-list">
                        {
                            experiences[selected].shortDescription.map((description, index)=>(<li key={index} className='exp-details-list-item'>{description}</li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
