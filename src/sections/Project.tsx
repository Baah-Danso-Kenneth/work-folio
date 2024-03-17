import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectProps{
    image:string;
    projectName:string;
    projectLink:string;
    projectDescription:string;
    projectExternalLinks:string;

}
function Projects() {
    const projectsData=[
        {
            image:"https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/pgram-img.png",
            projectName:'Postagram',
            projectLink:'http://postagram-bucket-ui.s3-website.eu-north-1.amazonaws.com/',
            projectDescription:"A fullstack project which uses Django Restframework for it backend and React for Frontentd: The project is a Social media app that allows users to post, like and update their post as well as personal data",
            projectTech:[
                "React",
                "useContextAPI",
                "React boostrap",
                "Django API",
                "Typescript",
                "Docker",
                "AWS[EC2, S3 ]",
                
            ],
            projectExternalLinks:{
                github:"https://github.com/Baah-Danso-Kenneth/postagram",
                externalLink:"http://postagram-bucket-ui.s3-website.eu-north-1.amazonaws.com/",
            },
        },


            {
            image:"https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/realestate.png",
            projectName:'Real Estate Frontend',
            projectLink:'#',
            projectDescription:"A project which focuses on the responsiveness and creating frontend with React",
            projectTech:[
                "React",
                "Aos-Animation Sass",
                "Sass"
            ],
            projectExternalLinks:{
                github:"https://github.com/Baah-Danso-Kenneth/UI-Estate-project",
                externalLink:"http://ui-for-estate-bucket.s3-website.eu-north-1.amazonaws.com",
            },
        },


            {
            image:"https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/food-service.png",
            projectName:'UI/UX Food Service',
            projectLink:'#',
            projectDescription:"UI/UX design for a food delivery service ",
            projectTech:[
                "Figma"
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"https://www.figma.com/file/dUQRbNe5JRnCk0tHLpdq3K/Delivery-App?type=design&node-id=0%3A1&mode=design&t=4XSPouUz2YaoOtzx-1",
            },
        },



            {
            image:"https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/mobile-app.png",
            projectName:'UI/UX Fintech Project',
            projectLink:'',
            projectDescription:"A UX for a fintech for a mobile application project designed with figma",
            projectTech:[
                "Figma",
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"https://www.figma.com/file/3dfaSyGVZNyLrBjbrk7QbF/Fintech-App?type=design&node-id=0%3A1&mode=design&t=4XSPouUz2YaoOtzx-1",
            },
        },


            {
            image:'https://work-folio-kenny.s3.eu-north-1.amazonaws.com/assets/images/graphics.png',
            projectName:'Graphic Design',
            projectLink:'#',
            projectDescription:"Flyer for pastries client using canva",
            projectTech:[
                "Canva",
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"https://www.canva.com/design/DAFwSIGiGR0/qc3sfx0gAT5ugoL4bDVxZA/edit?utm_content=DAFwSIGiGR0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            },
        },


        //     {
        //     image:"/franace.jpeg",
        //     projectName:'stam',
        //     projectLink:'#',
        //     projectDescription:"This is a web application that uses Social media to  communicate",
        //     projectTech:[
        //         "React",
        //         "useContextAPI",
        //         "React boostrap",
        //         "Django API",
        //         "Typescript"
        //     ],
        //     projectExternalLinks:{
        //         github:"",
        //         externalLink:"",
        //     },
        // },

    ]
  return (
     <div className="projects" id="work">
        <div className="title">
            <h2>Some Things I&apos;ve Built</h2>
        </div>

        <div className="projects-container">
            {projectsData.map(({image, 
                                projectDescription,
                                projectTech,
                                projectExternalLinks,
                                projectName},index)=>(
                <div className="project" key={projectName}>
                    <div className="project-image">
                        <div className="project-image-overlay"></div>
                        <div className="project-image-container">
                            <Image src={image} fill alt={projectName} quality={100}/>
                        </div>
                    </div>
                   <div className="project-info">
                    <div className="project-info-overline">
                        <p className='zigi'>Feature Projects</p>
                     </div>
                    <h3 className="project-info-title">{projectName}</h3>
                    <div className="project-info-description">
                        <p>{projectDescription}</p>
                    </div>
                      <ul className="project-info-tech-list">
                        {projectTech.map((tech,index)=>(
                          <><li className='project-info-tech-list-item'>{tech}</li></>
                        ))}
                      </ul>
                      <ul className="project-info-links">
                                            <li className="project-info-links-item">
                        <Link  href={projectExternalLinks.github} className='project-info-links-item-link'>
                         <FiGithub/>
                        </Link>
                      </li>

                        <li className="project-info-links-item">
                        <Link  href={projectExternalLinks.externalLink} className='project-info-links-item-link'>
                           <FiExternalLink/>
                        </Link>
                    </li>
                      </ul>
                   </div>
                </div>
            ))}
        </div>
     </div>
  )
}

export default Projects