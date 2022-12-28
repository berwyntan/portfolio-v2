import { HashLink } from "react-router-hash-link"
import { useState, useEffect, useCallback } from "react"

const Navbar = () => {
    const [ hidden, setHidden ] = useState("")
    const [ y, setY ] = useState(document.scrollingElement.scrollHeight);
    
    const handleNavigation = useCallback((e) => {

        if (y > window.scrollY) {
          setHidden("transition duration-500 ease-in fixed top-0")
        } else if (y < window.scrollY) {
          setHidden("-top-16")
        }
        setY(window.scrollY)
      }, [y]);

    useEffect(() => {

    window.addEventListener("scroll", handleNavigation);

    return () => {
        window.removeEventListener("scroll", handleNavigation);
    };
    }, [handleNavigation]);

    return (
        <>
        <div className={`navbar bg-slate-100 ${hidden}`}>
            {/* menu for small screens */}
            <div className="dropdown md:invisible">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><div className="text-xl">About</div></li>
                    <li><div className="text-xl">Projects</div></li>
                    <li><div className="text-xl">Experience</div></li>
                </ul>
            </div>

            <div className="flex-1">
                <HashLink smooth to="/#intro">
                    <div className="btn btn-ghost text-xl font-cursive w-40">Berwyn Tan</div>
                </HashLink>                
            </div>
            
            <div className="flex invisible md:visible">
                <HashLink smooth to="/#about">
                    <div className="btn btn-ghost">About</div>
                </HashLink>
                
                <HashLink smooth to="/#projects">
                    <div className="btn btn-ghost">Projects</div>
                </HashLink>

                <HashLink smooth to="/#experience">
                    <div className="btn btn-ghost">Experience</div>
                </HashLink>

                <HashLink smooth to="/#contact">
                    <div className="btn btn-ghost">Contact</div>
                </HashLink>
                <div className="btn btn-ghost">Resume</div>
            </div>                
                        
        </div>
        
        </>
    )
}

export default Navbar