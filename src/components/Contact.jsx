import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import twitterIcon from '../assets/twitter.png'
import leetcodeIcon from '../assets/leetcode.png'
import instagramIcon from '../assets/instagramIcon.png'

const Contact = () => {
    return (
        <>
        <div className="h-10 md:-mt-5 invisible">space</div>
        <section id='contact' className='h-screen'>
           
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20 mt-20 md:mt-5'>
                Contact Me.
            </div>
            <div className='text md:text-xl p-8 pb-2 md:ml-20'>
                I am open to work, opportunities and collaborations. If you have a question, I am happy to answer you!
            </div>
            <div className='flex justify-center mt-8'>
                <button className="btn btn-secondary my-2">
                    <a href="mailto:berwyntan@gmail.com">
                        Get In Touch
                    </a>
                </button>
            </div>
            
            <div className="flex items-center p-8 mt-12 mb-40 justify-center">
                
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <a href="https://www.linkedin.com/in/berwyn-tan" target="_blank">
                    <img data-src={linkedinIcon} alt="linkedin" className="rounded lozad"/>
                    </a>
                </div>
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <a href="https://github.com/berwyntan" target="_blank">
                    <img data-src={githubIcon} alt="github" className="rounded lozad"/>
                    </a>
                </div>
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <a href="https://twitter.com/berwyntan" target="_blank">
                    <img data-src={twitterIcon} alt="twitter" className="rounded lozad"/>
                    </a>
                </div>
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <a href="https://leetcode.com/berwyntan/" target="_blank">
                    <img data-src={leetcodeIcon} alt="leetcode" className="rounded lozad"/>
                    </a>
                </div>
                <div className="p-1 w-10 lg:w-12 mx-5">
                    <a href="https://leetcode.com/berwyntan/" target="_blank">
                    <img data-src={instagramIcon} alt="instagram" className="rounded lozad"/>
                    </a>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='text-slate-600'>
                    Created by Berwyn Tan
                </div>
                <div className='mx-2'>
                    |
                </div>
                <div className='text-slate-500'>
                    <a href="https://github.com/berwyntan/portfolio-v2" target="_blank">
                    Github
                    </a>
                </div>                
            </div>

        </section>
        </>
    )
}

export default Contact