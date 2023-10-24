
const Contact = () => {

    function submitHandle(){


        
        
       alert("Send Success!");
        
        
    }
   

    return (
        <div className="lg:px-12 px-4" id="contact">
            <div className=" mb-16 text-headingcolor">
                <h2 className="md:text-5xl text-4xl font-bold text-center">Contact Me</h2>
            </div>

            {/* form */}
            <div className="md:w-2/3 mx-auto mb-20" >
                <form onSubmit={submitHandle} action='https://formspree.io/f/xbjvwyed'
                method='POST'>
                    {/* first and last name */}

                    <div className="flex flex-col sm:flex-row gap-8 items-center mb-8" >
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="fName" className="text-base text-headingcolor w-full">First Name</label>
                            <input type="text" id="fName" name="fName" required className="block border border-primary rounded-xl py-2 mt-2 w-full" />
                        </div>

                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="lName" className="text-base text-headingcolor w-full">Last Name</label>
                            <input type="text" id="lName" name="lName" required className="block border border-primary rounded-xl py-2 mt-2 w-full" />
                        </div>
                    </div>

                    {/* contact no. & email id */}
                    <div className="flex flex-col sm:flex-row gap-8 items-center mb-8" >
                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="email" className="text-base text-headingcolor w-full">Email</label>
                            <input type="text" id="email" name="email" className="block border border-primary rounded-xl py-2 mt-2 w-full" />
                        </div>

                        <div className="sm:w-1/2 w-full">
                            <label htmlFor="phone" className="text-base text-headingcolor w-full">Phone number</label>
                            <input type="text" id="phone" name="phone" required className="block border border-primary rounded-xl py-2 mt-2 w-full" />
                        </div>
                    </div>

                    {/* input Selection */}
                    <div className="w-full mb-8">
                        <label htmlFor="options" className="text-base text-headingcolor w-full"
                        >Choose a topic</label>
                        <select name="options" id="options" className="block border border-primary rounded-lg py-2 mt-2 w-full px-2">
                            <option value="Web Development">Web Development</option>
                            <option value="MERN Stack">MERN Stack</option>
                            <option value="Photography">Photography</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="5">Personal</option>

                        </select>
                    </div>

                    <div className="w-full mb-8">
                        <label htmlFor="message" className="text-base text-headingcolor w-full">Message</label>
                        <textarea name="message" required id="message" cols="30" rows="5" placeholder="Type your Message..."
                            className=" block border border-primary rounded-lg py-2 mt-2 w-full px-2"></textarea>
                    </div>

                    <div className="w-36 mx-auto mt-8">
                        <input type='submit' className="btn-primary bg-primary py-3 px-8 cursor-pointer w-full"></input> 
                    </div>

                </form>

            </div>

        </div>
    )
}

export default Contact