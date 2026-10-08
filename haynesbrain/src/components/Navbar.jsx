import { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md"
import { Link } from "react-router-dom";
import { MdDownload, MdDownloadDone } from "react-icons/md";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    
    const [isDownloaded, setDownloaded] = useState(false);

    let handleDownload = () => {
      setDownloaded(true)
      setTimeout(() => {
        setDownloaded(false)
      }, 1500);
    }
    return (
      <>
      <nav className="text-lg fixed top-0 z-40 w-full border-b border-white/10 bg-[rgba(10,_10,_10,_0.8)] shadow-lg backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-3">
        <div className="flex h-25 items-center justify-between">
      {/* Logo */}
          <Link
            to="/"
            className="whitespace-nowrap flex flex-nowrap flex-col gap-0 font-mono text-xl font-bold text-white"
          >
            Jackson Haynes
            <Link
            to="/"
            className="whitespace-nowrap font-mono text-xl font-bold text-white"
          >
            <span className="text-purple-500 text-base">Computer Scientist & Researcher</span>
          </Link>
          </Link>
          

           

      {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
        <Link to="/" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link to="/about" className="text-gray-300 hover:text-white">
          About
        </Link>
        <Link to="/projects" className="text-gray-300 hover:text-white">
          Projects
        </Link>
        <Link to="/contact" className="text-gray-300 hover:text-white">
          Contact
        </Link>
        <div className="flex gap-2 text-gray-300 transition-colors hover:text-white">
              <a href="/greatest_resume_of_all_time.pdf" title="View Résumé" aria-label="View Résumé in another tab" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Résumé</a>
              <a className="translate-y-1"href="/greatest_resume_of_all_time.pdf" title="Download Résumé" aria-label="Download Résumé" download onClick={handleDownload}
                >{isDownloaded 
                ? 
                <MdDownloadDone/> 
                : 
                <MdDownload/>}</a>
            </div>
          </div>

      {/* Mobile navigation */}
          <div className="relative md:hidden">
        <MdOutlineMenu 
          onClick={() => setMenuOpen((prev) => !prev)}
          className="hamburger-icon scale-125 relative z-50 flex h-6 w-7 flex-col justify-between "
        />          
          </div>
      </div>
    </div>
</nav>

    <div
          className={`fixed bg-fixed inset-0 z-30 bg-black transition-all duration-300 ease-out ${
            menuOpen
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}>
            <div className="flex text-4xl overflow-hidden h-full justify-center items-center min-w-40 flex-col gap-4 p-4">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 p-3 transition-colors hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 p-3 transition-colors hover:text-white"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 p-3 transition-colors hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 p-3 transition-colors hover:text-white"
            >
              Contact
            </Link>
            <div className="flex gap-2 text-gray-300 p-3 transition-colors hover:text-white">
              <a href={`${import.meta.env.BASE_URL}greatest_resume_of_all_time.pdf`} title="View Résumé" aria-label="View Résumé in another tab" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Résumé</a>
              <a href={`${import.meta.env.BASE_URL}greatest_resume_of_all_time.pdf`} title="Download Résumé" aria-label="Download Résumé" download onClick={handleDownload}
                >{isDownloaded 
                ? 
                <MdDownloadDone/> 
                : 
                <MdDownload/>}</a>
            </div>
          </div>
    </div>
  </>
    );
};