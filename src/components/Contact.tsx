
export default function Contact() {
    return (
        <div id="contact" className="w-full h-default flex flex-col items-center">
            <span className="w-3/4 h-24 pt-24 animate-fade-up">
                <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
            </span>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-2xl text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-3xl py-10">
                    Contate-nos
                </p>
                <div className="w-full h-full flex justify-center">
                    <p className="mt-4 text-sm font-medium text-center md:text-base">
                        Desenvolver Form
                    </p>
                </div>
            </div>
        </div >
    )
}