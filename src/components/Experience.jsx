import experience from "../data/experience"

const Experience = () => {

    const experienceCards = experience.map((exp, i) => {
        return (
            <div className="" key={i}>
                <div className="flex">
                    <div className="">
                        {exp.role}
                    </div>
                    <div className="">
                        {exp.company}
                    </div>
                </div>
                <div className="">
                    {exp.period}
                </div>
                <div className="">
                    {exp.description}
                </div>
                <div className="">
                    {exp.accomplishments}
                </div>
                
            </div>
        )
    })

    return (
        <section id='experience' className='h-screen'>
            <div className="h-10 invisible">space</div>
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20'>
                Experience.
            </div>
            {experienceCards}
        </section>
    )
}

export default Experience