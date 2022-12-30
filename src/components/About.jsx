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
import tailwindIcon from "../assets/tailwind.png"

const About = () => {
    return (
        <section id='about' className='md:h-screen'>
            <div className="h-10 invisible">space</div>
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20'>
                About Me.
            </div>
            {/* mobile version */}
            <div className="text-lg md:invisible pl-8 mr-4 my-2">
                <img src={profile} alt="profile" className="rounded w-40"/>
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 mt-5 md:-mt-7">
                I caught fire while learning coding.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                With less work in 2020 due the pandemic, I tried coding. Coding was to me figuring out exactly what the problem is, finding a solution from elsewhere and applying it to your own situation.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                Coming from interior design, problems I faced were understanding the viewpoints of others and anticipating problems. Coding adds to my problem solving skillset.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                I work on improving my knowledge by picking up new libraries and frameworks on my own. Currently I am learning data structures, algorithms and Leetcode.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                
            </div>
            
            {/* desktop version */}
            <div className="invisible md:visible flex md:flex-row md:-mt-72 flex-wrap h-0 md:h-3/5">
                <div className="flex-1 flex-col">
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                I caught fire while learning coding.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                With less work in 2020 due the pandemic, I tried coding. Coding is like playing Lego (which I loved as a kid). Coding was to me figuring out exactly what the problem is, finding a solution from elsewhere and applying it to your own situation. Mix and match Lego pieces.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                Coming from interior design, problems I faced were understanding the viewpoints of others and anticipating problems. Coding adds to my problem solving skillset.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">                    
                This is not my first switch. I switched from engineering to interior design by applying the systematic processes and 3D design drawing skills I picked up to my new field.
                </div>                
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                Technology is irreplaceable in our daily life. It can provide leverage and improve our lives. Being passionate about building solutions to solve problems, I decided to make a career switch. I applied for a software engineering bootcamp at General Assembly. 
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                I work on improving my knowledge by picking up new libraries and frameworks on my own. Currently I am learning data structures, algorithms and Leetcode.
                </div>
                </div>
                <div className="p-3 md:w-32 lg:w-48">
                    <img src={profile} alt="profile" className="md:w-32 lg:w-48 rounded"/>
                </div>
                </div>

                <div className="invisible lg:visible md:text lg:text-lg pl-8 pr-2 md:ml-20 my-2 -mt-5 md:mb-6">
                My tech stack includes:
                </div>
                <div className="invisible md:visible flex pl-8 pr-2 md:ml-20 my-1">
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={jsIcon} alt="Javascript" title="Javascript" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={htmlIcon} alt="HTML" title="HTML" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={cssIcon} alt="CSS" title="CSS" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={mongoIcon} alt="MongoDB" title="MongoDB" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={postgresIcon} alt="PostgreSQL" title="PostgreSQL" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={expressIcon} alt="ExpressJS" title="ExpressJS" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={reactIcon} alt="React" title="React" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={nodejsIcon} alt="NodeJS" title="NodeJS" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={jqueryIcon} alt="jQuery" title="jQuery" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={vitestIcon} alt="Vitest" title="Vitest" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={jestIcon} alt="Jest" title="Jest" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={cypressIcon} alt="Cypress" title="Cypress" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={tailwindIcon} alt="TailwindCSS" title="TailwindCSS" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={gitIcon} alt="Git" title="Git" className="rounded"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img src={npmIcon} alt="npm" title="npm" className="rounded"/>
                    </div>
                
                
                
            </div>
                       
            
        </section>
    )
}

export default About