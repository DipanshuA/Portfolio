
import { useEffect, useState } from 'react'
import logo from '../assets/dLogo.png'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-scroll'



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className='w-full z-10 fixed top-0 left-0 right-0 shadow-md'>
            <nav className={`py-2 md:px-12 pr-4 bg-white ${isSticky ? 'sticky top-0 right-0 left-0 bg-white' : ''}`}>
                <div className='flex items-center justify-between'>


                    <Link to='home' smooth={true} offset={-100} className='cursor-pointer flex '>
                        <img src={logo} alt="logo" className='w-40' />

                    </Link>
                    <div className='lg:flex items-center gap-7 hidden text-body text-lg'>
                        <Link to='home' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Home</Link>
                        <Link to='skills' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Skills</Link>
                        <Link to='about' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>About Me</Link>
                        <Link to='projects' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Projects</Link>
                        <Link to='contact' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Contact</Link>

                    </div>

                    {/* CONTACT BUTTON */}

                    <div className='lg:block hidden'>
                        <Link to='contact' smooth={true} offset={-100} className='outlineBtn'>
                            Contact Me
                        </Link>
                    </div>

                    {/* MENU BTN FOR MOBILE */}
                    <button onClick={toogleMenu} className='lg:hidden text-body text-3xl'>
                        <HiMenu />
                    </button>
                </div>

                {/* menu items for small devices */}

                {
                    isMenuOpen && <div className='mt-4 p-4 ml-4 bg-body rounded-lg text-white '>
                        <Link to='home' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer'>Home</Link>
                        <Link to='skills' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer '>Skills</Link>
                        <Link to='about' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer '>About Me</Link>
                        <Link to='projects' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer'>Projects</Link>
                        <Link to='contact' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer'>Contact</Link>
                    </div>
                }

            </nav>

        </header>
    )
}

export default Navbar