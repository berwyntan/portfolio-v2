import React from 'react'

const ProjectSelector = ({ projects, selectProject }) => {
    console.log(projects)

    const projectCards = projects.map(project => {
        return (
            <tr>
                <td className='text-sm cursor-pointer' onClick={() => selectProject(project.githubLink)}>{project.header}</td>
                <td className='text-xs'>{project.subHeader}</td>                
            </tr>
        )
    })

    return (
        <>
            <div className="overflow-x-auto">
            <table className="table w-full">
                
                {/* <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead> */}
                <tbody>
                
                {projectCards}
                
                </tbody>
            </table>
            </div>
        </>
    )
}

export default ProjectSelector