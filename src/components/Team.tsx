
export default function Team() {
    return (
        <div id="team" className="w-full h-default flex flex-col items-center">
            <span className="w-3/4 h-24 pt-24 animate-fade-up">
                <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
            </span>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-2xl px-20 text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-3xl py-8">
                    Time multidisciplinar
                </p>
                <div className="w-full h-full flex flex-col bg-red-100 justify-center">
                    <div className="w-full flex p-4 justify-evenly">
                        <div className="w-1/5 h-72 bg-blue-300">
                            Profile Back-end dev
                        </div>
                        <div className="w-1/5 h-72 bg-blue-300">
                            Profile Front-end dev
                        </div>
                        <div className="w-1/5 h-72 bg-blue-300">
                            Profile Mobile Dev
                        </div>
                    </div>
                    <div className="w-full flex p-4 justify-evenly">
                        <div className="w-1/5 h-72 bg-blue-300">
                            Profile UI/UX
                        </div>
                        <div className="w-1/5 h-72 bg-blue-300">
                            Profile DevOps
                        </div>
                        <div className="w-1/5 h-72 bg-blue-300">
                            Profile Data Scients
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}