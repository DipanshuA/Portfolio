import { Link } from 'react-scroll'
import logo from '../assets/dLogo.png'

import { FaXTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="bg-bgShade py-8 md:px-12 px-4">
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 mb-20 px-10'>
                <a href=""><img src={logo} alt="" className='w-40' /></a>
                <div className='lg:flex items-center gap-7 hidden text-body text-lg'>
                        <Link to='home'  smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Home</Link>
                        <Link to='skills' smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Skills</Link>
                        <Link to='about'  smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>About Me</Link>
                        <Link to='projects'  smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Projects</Link>
                        <Link to='contact'  smooth={true} offset={-100}
                            className='block py-2 pc-4 cursor-pointer text-primary hover:text-black '>Contact</Link>

                    </div>

                <div className='flex items-center gap-4 ml-4 '>
                    <a target='blank' href="https://github.com/DipanshuA"><FaGithub className='cursor-pointer hover:-translate-y-1 transition-all duration-100 text-xl hover:text-primary' /></a>
                    <a target='blank' href="https://www.instagram.com/dipanshu_1.5/"><FaInstagram className='cursor-pointer hover:-translate-y-1 transition-all duration-100 text-xl hover:text-primary' /></a>
                    <a target='blank' href="https://twitter.com/addy_0_"><FaXTwitter className='cursor-pointer hover:-translate-y-1 transition-all duration-100 text-xl hover:text-primary' /></a>
                    <a target='blank' href="https://www.linkedin.com/in/dipanshu713/"><FaLinkedin className='cursor-pointer hover:-translate-y-1 transition-all duration-100 text-xl hover:text-primary'/></a> 
                </div>
                


            </div>
            
                <p className='text-center'>Made with 💖 by Dipanshu</p>
               

          

        </div>
    )
}

export default Footer