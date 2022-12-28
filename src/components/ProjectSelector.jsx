import React from 'react'

const ProjectSelector = ({ projects, selectProject }) => {
    
    const projectCards = projects.map(project => {
        return (
            <tr key={project.githubLink}>
                <td className='cursor-pointer' onClick={() => selectProject(project.githubLink)}>
                    <div className='flex flex-col'>
                        <div className='text-sm'>{project.header}</div>
                        <div className='text-xs italic'>{project.subHeader}</div>
                    </div>      
                </td>        
            </tr>
        )
    })

    return (
        <>
            <div className="md:ml-20">
            <table className="table w-full">
                
                <tbody className=''>
                
                {projectCards}
                
                </tbody>
            </table>
            </div>
        </>
    )
}

export default ProjectSelector