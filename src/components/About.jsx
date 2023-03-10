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
import tsIcon from "../assets/typescript.png"

const About = () => {
    return (
        <section id='about' className=''>
            <div className="h-10 invisible">space</div>
            <div className='text-2xl font-bold md:text-3xl p-8 pb-2 md:ml-20'>
                About Me.
            </div>
            {/* mobile version */}
            <div className="text-lg md:invisible pl-8 mr-4 my-2">
                <img src={profile} alt="profile" className="rounded w-40"/>
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 mt-5 md:-mt-7">
                Something unexpected happened when I learned coding.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                With less work in 2020 due the pandemic, I tried coding with Python. Learning how to code got me hooked. Coding reminded me of playing Lego (which I loved as a kid), something I did not expect. I had to figure out exactly what the problem is, find a solution and apply it based on the context. Like mixing and matching Lego pieces.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                Coming from interior design, problems I faced were understanding the viewpoints of others and anticipating problems. Coding adds to my problem solving skillset.
            </div>
            <div className="text-lg md:invisible pl-8 mr-4 my-1 md:-mt-2">
                I work on improving my knowledge by picking up new libraries and frameworks on my own. Currently I am learning data structures, algorithms and practicing Leetcode.
            </div>
            
            
            {/* desktop version */}
            <div className="invisible md:visible flex md:flex-row md:-mt-72 flex-wrap h-0 md:h-3/5">
                <div className="flex-1 flex-col">
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                Something unexpected happened when I learned coding.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                With less work in 2020 due the pandemic, I tried coding with Python. Learning to code got me hooked. Coding reminded me of playing Lego as a kid, something I did not expect. I had to figure out exactly what the problem is, find a solution and apply it based on the context. Like mixing and matching Lego pieces.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                Coming from interior design, problems I faced were understanding the viewpoints of others and anticipating problems. Coding adds to my problem solving skillset.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">                    
                This is not my first switch. I switched from engineering to interior design by applying the systematic processes and 3D design drawing skills I picked up to my new field.
                </div>                
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1">
                Technology is irreplaceable in our daily life. It can provide leverage and improve our lives. Being passionate about building solutions to solve problems, I decided to make a career switch. I applied for a software engineering bootcamp at General Assembly. At General Assembly, I learned MERN & PERN stack.
                </div>
                <div className="md:text lg:text-lg pl-8 pr-2 md:ml-20 my-1 lg:mb-10">
                I work on improving my knowledge by picking up new libraries and frameworks on my own. Currently I am learning data structures, algorithms and practicing Leetcode.
                </div>
                </div>
                <div className="p-3 md:w-32 lg:w-48">
                    <img data-src={profile} alt="profile" className="md:w-32 lg:w-48 rounded lozad"/>
                </div>
                </div>

                <div className="invisible lg:visible md:text lg:text pl-8 pr-2 md:ml-20 my-2 -mt-5 md:mb-6">
                My tech stack includes:
                </div>
                <div className="invisible md:visible flex pl-8 pr-2 md:ml-20 my-1 mb-12">
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={jsIcon} alt="Javascript" title="Javascript" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={tsIcon} alt="Typescript" title="Typescript" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={htmlIcon} alt="HTML" title="HTML" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={cssIcon} alt="CSS" title="CSS" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={mongoIcon} alt="MongoDB" title="MongoDB" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={postgresIcon} alt="PostgreSQL" title="PostgreSQL" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={expressIcon} alt="ExpressJS" title="ExpressJS" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={reactIcon} alt="React" title="React" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={nodejsIcon} alt="NodeJS" title="NodeJS" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={jqueryIcon} alt="jQuery" title="jQuery" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={vitestIcon} alt="Vitest" title="Vitest" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={jestIcon} alt="Jest" title="Jest" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={cypressIcon} alt="Cypress" title="Cypress" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={tailwindIcon} alt="TailwindCSS" title="TailwindCSS" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={gitIcon} alt="Git" title="Git" className="rounded lozad"/>
                    </div>
                    <div className="p-1 w-8 lg:w-12 mx-1">
                        <img data-src={npmIcon} alt="npm" title="npm" className="rounded lozad"/>
                    </div>
                
                
                
            </div>
                       
            
        </section>
    )
}

export default About