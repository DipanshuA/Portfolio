import { useEffect, useState } from "react"
import { FaGithub } from "react-icons/fa"


const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projects.json').then(res => res.json()).then(data => setProjects(data))
    }, [])
    return (
        <div id="projects" className="w-full bg-bgShade">
            <div className="lg:mx-12 mx-4 my-20 ">
                <div className="flex flex-col   items-center justify-center">
                    <div className=" mt-10 text-headingcolor ">
                        <h2 className="md:text-5xl text-4xl font-bold  ">PROJECTS</h2>
                    </div>

                    <a href="https://github.com/DipanshuA" target="blank" className="m-10  cursor-pointe">
                        <button className="flex btn-primary bg-gray-900 justify-center"><FaGithub className="w-6 h-6 inline-block mr-2" /> Visit GitHub</button>
                    </a>
                </div>


                {/* projects card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-8 ">
                    {
                        projects.map(project => <div key={project.id}
                            className="shadow-xl rounded-lg cursor-pointer hover:scale-95 transition-all duration-200 bg-white">
                            <img src={project.image} alt={""} className=" rounded-md " />
                            <div className="p-8">
                                <h3 className="text-2xl font-semibold mb-2 text-headingcolor ">{project.name}</h3>
                                <p className="text-body mb-4">{project.description}</p>
                                <a className="underline underline-offset-4 hover:text-primary" href={project.link}>Live Link <img src="/src/assets/arrow.png" alt=""
                                    className="w-3 inline-block ml-3 " /></a>
                            </div>
                        </div>
                        )
                    }
                </div>


                <p className="text-center py-5"> New coming soon...</p>
            </div>
        </div>
    )
}

export default Projects