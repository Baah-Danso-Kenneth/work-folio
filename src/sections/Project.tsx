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
            projectName:'Postram',
            projectLink:'http://postagram-bucket-ui.s3-website.eu-north-1.amazonaws.com/',
            projectDescription:"This is a web application that uses Social media to  communicate",
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
            image:"/oaxaca.jpeg",
            projectName:'Onyx Tour',
            projectLink:'#',
            projectDescription:"This is a web application that uses Social media to  communicate",
            projectTech:[
                "React",
                "useContextAPI",
                "React boostrap",
                "Django API",
                "Typescript"
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"",
            },
        },


            {
            image:"/sleepy.png",
            projectName:'volvo',
            projectLink:'#',
            projectDescription:"This is a web application that uses Social media to  communicate",
            projectTech:[
                "React",
                "useContextAPI",
                "React boostrap",
                "Django API",
                "Typescript"
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"",
            },
        },



            {
            image:"/yoga.png",
            projectName:'gram',
            projectLink:'#',
            projectDescription:"This is a web application that uses Social media to  communicate",
            projectTech:[
                "React",
                "useContextAPI",
                "React boostrap",
                "Django API",
                "Typescript"
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"",
            },
        },


            {
            image:"/travel_like_fem.png",
            projectName:'Po',
            projectLink:'#',
            projectDescription:"This is a web application that uses Social media to  communicate",
            projectTech:[
                "React",
                "useContextAPI",
                "React boostrap",
                "Django API",
                "Typescript"
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"",
            },
        },


            {
            image:"/franace.jpeg",
            projectName:'stam',
            projectLink:'#',
            projectDescription:"This is a web application that uses Social media to  communicate",
            projectTech:[
                "React",
                "useContextAPI",
                "React boostrap",
                "Django API",
                "Typescript"
            ],
            projectExternalLinks:{
                github:"",
                externalLink:"",
            },
        },

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