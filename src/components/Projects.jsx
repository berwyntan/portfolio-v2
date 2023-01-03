import { useState } from "react"
import ProjectSelector from "./ProjectSelector"
import ProjectFocus from "./ProjectFocus"
import projects from "../data/projects"

const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState(projects[0])

    const selectProject = (url) => {
        
        const result = projects.find(project => project.githubLink === url)
        setSelectedProject(result)
    }

    return (
        <section id='projects' className=''>            
            <div className="h-6 md:-mt-12 invisible">space</div>
            <div className="flex items-baseline">
                <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20 md:mb-10'>
                    Projects.
                </div>
                {/* <div className="text-sm">
                    Click a project for more details.
                </div> */}
            </div>
            
            <div className="flex flex-col md:flex-row z-0">
                <ProjectSelector 
                    projects={projects}
                    selectProject={selectProject}
                />
                <ProjectFocus 
                    project={selectedProject}
                />
            </div>
            
        </section>
    )
}

export default Projects