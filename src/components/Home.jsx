import bannerImg from '../assets/banner.png'
const Home = () => {
    return (
        <div className="mt-16 bg-bgShade  " id='home'>
            <div className="lg:px-16 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5 ">
                <div className='md:w-1/2 w-full'>
                    <img src={bannerImg} alt="banner" className='w-full' loading='lazy'  />
                </div>
                <div className='md:w-1/2  max-w-[600px] mt-5'>
                    <h3 className="text-xl text-headingColor font-semibold mb-5 ">Hey, I am Dipanshu</h3>
                    <h1 className=" md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px] mb-5 ">I&apos;m a Full-Stack <span className="text-primary">Software Developer</span></h1>
                    <p className="text-body text-2xl lading-9 mb-8  ">A dedicated web developer constantly in pursuit of new technologies. I find immense joy in bringing ideas to life through coding and design.</p>
                    <a target='blank' href='https://www.linkedin.com/in/dipanshu713/' className="btn-primary">Get in Touch</a>
                </div>

            </div>

        </div>
    )
}

export default Home