

const Skills = () => {

    const skills = [
        {
            id: 1,
            name: "Web Development", description: 'A web developer designs and builds websites and web applications, ensuring functionality and user experience.',
            image: "/src/assets/skills1.png"
        },
        {
            id: 2,
            name: "MERN Stack", description: 'Learning MERN involves mastering the essential technologies (MongoDB, Express.js, React, Node.js) for building modern web applications.',
            image: "/src/assets/skills1.png"
        },
        {
            id: 3,
            name: "Photography", description: 'Mastering the art of photography to capture moments with creativity and precision.',
            image: "/src/assets/skills3.png"
        }

    ]
    console.log(skills)


    return (
        <div id="skills" className="lg:mx-16 mx-4 py-32">
            <div className=" mb-16 text-headingcolor">

                <h2 className="md:text-5xl text-4xl font-bold text-center">My Skills</h2>
            </div>

            {/* Skill Card */}
            <div className=" grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
                {
                    skills.map(skill => <div className="p-8 bg-bgShade rounded-lg cursor-pointer
                    hover:-translate-y-3 transition-all duration-300 skillcard"
                        key={skill.id}>
                        <img src={skill.image} alt="" className="w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3" />
                        <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Skills