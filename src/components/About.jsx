import profile from "../assets/profile.jpg"
import jsIcon from "../assets/javascript.png"
import htmlIcon from "../assets/html.png"
import cssIcon from "../assets/css.png"
import mongoIcon from "../assets/mongoDB.png"
import nodejsIcon from "../assets/nodejs.png"
import postgresIcon from "../assets/postgres.png"
import reactIcon from "../assets/react.svg"
import cypressIcon from "../assets/cypress.jpg"
import gitIcon from "../assets/git.png"
import jestIcon from "../assets/jest.svg"
import jqueryIcon from "../assets/jquery.png"
import npmIcon from "../assets/npm.png"
import vitestIcon from "../assets/vitest.svg"
import expressIcon from "../assets/express.png"

const About = () => {
    return (
        <section id='about' className='h-screen'>
            <div className="h-16 invisible">space</div>
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20'>
                About Me.
            </div>
            {/* mobile version */}
            <div className="text-lg md:invisible pl-8 mr-4 my-2">
                <img src={profile} alt="profile" className="rounded w-40"/>
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 mt-5">
                I caught fire learning coding. Coding lets me solve problems. I enjoy problem solving.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1">
                Interior design includes project management and stakeholder management. Which requires constant problem solving.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1">
                I made the switch to software engineering as it's now or never. 
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1">
                I am passionate about building things that can provide leverage and improve lives.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1">
                I am a keen and fast learner, picking up new libraries and frameworks on my own.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1">
                
            </div>
            
            {/* desktop version */}
            <div className="invisible md:visible flex md:flex-row md:-mt-80 flex-wrap">
                <div className="flex-1 flex-col">
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                I caught fire while learning coding. Coding lets me solve problems. I get to learn and try new stuff. This knowledge compounds over time.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                With less work in 2020 due the pandemic, I tried coding. Coding is like playing Lego (which I loved as a kid). I get to problem solve in a different context, which improved my skillset. Interior design was about understanding the viewpoints of others and anticipating problems. Coding was to me figuring out exactly what the problem is, finding a solution from elsewhere and applying it to your own situation.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">                    
                This is not my first switch. First switched from engineering to interior design. Problems I faced include : Making best use of available space to build conducive workplaces. Co-ordinating with groups to make workflow concurrent and move faster. Troubleshooting unexpected problems. (Always expect Murphy's Law) 
                </div>                
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                Technology is irreplaceable in our daily life. It can provide leverage and improve our lives. I am interested in building solutions to solve problems. After hearing about the regret minimization framework, I made a mid career switch. It's now or never to try this out. I applied for a software engineering bootcamp at General Assembly. 
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                I am a keen and fast learner, picking up new libraries and frameworks on my own.
                </div>
                </div>
                <div className="p-3 md:w-32 lg:w-48">
                    <img src={profile} alt="profile" className="md:w-32 lg:w-48 rounded"/>
                </div>
                </div>

                <div className="md:text pl-8 pr-2 md:ml-20 my-2 mt-5 md:mb-6">
                My tech stack includes:
                </div>
                <div className="invisible md:visible flex pl-8 pr-2 md:ml-20 my-1">
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={jsIcon} alt="javascript" title="javascript" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={htmlIcon} alt="html" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={cssIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={mongoIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={postgresIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={expressIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={reactIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={nodejsIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={jqueryIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={vitestIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={jestIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={cypressIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={gitIcon} alt="profile" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={npmIcon} alt="profile" className="rounded"/>
                    </div>
                
                
                
            </div>
                       
            
        </section>
    )
}

export default About