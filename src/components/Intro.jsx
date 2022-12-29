import scrolldown from '../assets/scrolldown.png'

const Intro = () => {
    return (
        <>        
        <section id='intro' className='md:h-screen'>
            <div className="h-28 invisible">space</div>
            <div className='text pt-8 ml-8 md:ml-28'>
                Hi, my name is
            </div>
            <div className='text-5xl font-bold md:text-6xl p-8 pb-2 md:ml-20'>
                Berwyn Tan.
            </div>
            <div className='text-3xl font-bold md:text-6xl p-8 pt-2 md:ml-20 text-slate-400'>
                I build stuff for the web.
            </div>
            <div className='text-lg md:text-xl pl-8 pr-2 md:ml-20 my-1'>
                I am a junior software engineer making a career switch. 
            </div>
            <div className='text-lg md:text-xl pl-8 pr-2 md:ml-20 my-1'>
                Skills I carry over from interior design include project management, 
                stakeholder management, and business processes.
            </div>
            <div className='text-lg md:text-xl pl-8 pr-2 md:ml-20 my-1'>
                Software can provide leverage that lets us save time and money.
            </div>
            <div className='text-lg md:text-xl pl-8 pr-2 md:ml-20 my-1'>
                I am passionate about building solutions to solve problems.
            </div>
            <img src={scrolldown} alt="scroll down" className='h-16'/>       
            <div className='flex flex-col items-start mt-16'>
                <div className='invisible ml-0 md:visible text md:text-lg pl-8 pr-2 md:ml-20 text-slate-700'>
                    Scroll down to see my projects and tech stack.
                </div>
                <div className='text md:invisible pl-8 pr-2 text-slate-700'>
                    Swipe down to see my projects and tech stack.
                </div>
            </div>    
             
        </section>
        </>
    )
}

export default Intro