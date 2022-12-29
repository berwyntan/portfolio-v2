import { useState } from "react"
import github from "../assets/github.png"
import newTab from "../assets/newTab.png"

const ProjectFocus = ({ project }) => {
    // console.log(project)
    // state and handlers to load gif on individual card hover
    const [isActive, setIsActive] = useState(false);

    const handleMouseover = () => {
      setIsActive(true);
      // console.log("mouse over")
    }
    const handleMouseOut = () => {
      setIsActive(false);
    }

    return (
        <>
            <div 
                className="card bg-base-100 shadow-xl lg:max-w-5xl lg:ml-10"
                onMouseOver={handleMouseover}
                onMouseOut={handleMouseOut}
            >
                <figure>
                    <img 
                        src={isActive ? project.gif : project.preview} 
                        alt="project"
                        className="my-2 lg:max-w-6xl object-contain p-1"
                    />
                </figure>
                <div className="card-body">
                    <div className="flex items-end">
                        <h2 className="card-title">{project.header}</h2>
                        <h2 className="mx-3 text-sm">{project.subHeader}</h2>
                    </div>
                    
                    <div className="">{project.description}</div>
                    <div className="">Tech: {project.techStack}</div>
                    <div className="card-actions justify-end items-center">
                    <a href={project.githubLink} target="_blank">
                        <img className="w-8 mx-2" src={github} alt="github"/>
                    </a>  
                    <a href={project.appLink} target="_blank">
                        <img className="w-8 mx-2" src={newTab} alt="app"/>
                    </a>  
                    </div>
                </div>
            </div>
        </>
        
    )
}

export default ProjectFocus