import { Link } from 'react-scroll'
import aboutPic from '../assets/aboutPic.jpg'
function About() {
    return (
        <div className="lg:mx-12 mx-4" id='about'>
            <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10 '>
                <div className='sm:w-1/2 '>
                    <img src={aboutPic} alt="" className='h-full sm:w-11/12' />
                </div>
                <div className='sm:w-1/2'> 
                    
                    <h2 className="md:text-5xl text-4xl font-bold ">About Me</h2>
                    <p className='mt-8  md:pr-8 mb-8 '>
                        Hello there, I&apos;m Dipanshu, a dedicated web developer constantly in pursuit of new technologies. I find immense joy in bringing ideas to life through coding and design, ensuring that every website I build is a unique and compelling digital presence. <br /><br />
                        My journey into the world of web development has been marked by a relentless desire to learn and adapt. With a growing proficiency in various programming languages and frameworks, I&apos;m poised to create dynamic and visually appealing websites that resonate with both users and clients</p>
                        <Link to='contact'  smooth={true} offset={-100}
                         className='btn-primary'> Contact Me</Link>
                </div>
            </div>
        </div>
    )
}

export default About