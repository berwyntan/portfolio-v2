import scrolldown from '../assets/scrolldown.png'
import swipedown from '../assets/swipedown.png'

const Intro = () => {
    return (
        <>        
        <section id='intro' className='md:h-screen'>
            <div className="h-28 invisible">space</div>
            <div className='text pt-8 mx-8 md:ml-28'>
                Hi, my name is
            </div>
            <div className='text-5xl font-bold md:text-6xl p-8 pb-2 md:ml-20'>
                Berwyn Tan.
            </div>
            <div className='text-3xl font-bold md:text-6xl p-8 pt-2 md:ml-20 text-slate-400'>
                I build stuff for the web.
            </div>
            <div className='text-lg md:text-xl px-8 pr-2 md:ml-20 my-1'>
                I am a junior software engineer making a career switch. 
            </div>
            <div className='text-lg md:text-xl px-8 pr-2 md:ml-20 my-1'>
                Skills I carry over from interior design include project management, 
                stakeholder management, and business processes.
            </div>
            <div className='text-lg md:text-xl px-8 pr-2 md:ml-20 my-1'>
                I am passionate about building things to solve problems.
            </div>
            <div className='text-lg md:text-xl px-8 pr-2 md:ml-20 my-1'>
                Solutions that provide leverage, saving time and money.
            </div>
            
            <div className='flex items-center mt-16'>      
                <div className='flex flex-col items-start'>
                    <div className='invisible ml-0 md:visible text md:text-lg pl-8 pr-2 md:ml-20 text-slate-700'>
                        Scroll down to see my projects and more about me.
                    </div>
                    <div className='text md:invisible pl-8 pr-2 text-slate-700'>
                        Swipe up to see my projects and more about me.
                    </div>
                </div>  
                <div className='flex flex-col'>
                    <img src={scrolldown} alt="scroll down" 
                        className='invisible md:visible h-10 mr-4'/>
                    <img src={swipedown} alt="scroll down" 
                        className='h-10 md:invisible mr-4'/>
                </div> 
            </div>  
             
        </section>
        </>
    )
}

export default Intro