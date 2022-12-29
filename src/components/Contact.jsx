import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import twitterIcon from '../assets/twitter.png'

const Contact = () => {
    return (
        <section id='contact' className='h-screen'>
            <div className="h-10 invisible">space</div>
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20'>
                Contact Me.
            </div>
            <div className='text md:text-xl p-8 pb-2 md:ml-20'>
                I am open to opportunities and collaborations. If you have a question, I am happy to answer you!
            </div>
            <div className='flex justify-center mt-8'>
                <button className="btn btn-secondary my-2">
                    <a href="mailto:berwyntan@gmail.com">
                        Get In Touch
                    </a>
                </button>
            </div>
            
            <div className="flex items-center p-8 mt-12 justify-center">
                
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <img src={linkedinIcon} alt="linkedin" className="rounded"/>
                </div>
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <img src={githubIcon} alt="github" className="rounded"/>
                </div>
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <img src={twitterIcon} alt="twitter" className="rounded"/>
                </div>
            </div>
        </section>
    )
}

export default Contact