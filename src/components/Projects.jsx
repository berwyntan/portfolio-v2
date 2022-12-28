import { useState } from "react"
import ProjectSelector from "./ProjectSelector"
import ProjectFocus from "./ProjectFocus"
import projects from "../data/projects"

const Projects = () => {
    const [ selectedProject, setSelectedProject ] = useState(projects[0])

    const selectProject = (url) => {
        console.log(url)
        const result = projects.find(project => project.githubLink === url)
        console.log(result)
        setSelectedProject(result)
    }

    return (
        <section id='projects' className='h-screen'>            
            <div className="h-16 invisible">space</div>
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20'>
                Projects.
            </div>
            <div className="flex">
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