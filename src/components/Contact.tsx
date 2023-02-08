import useContactForm from "../hook/useContactForm";
import ReCaptcha from "./ReCaptcha";

export default function Contact() {
    const { formFields, handleChange, handeleSubmit, handleCompleteChallenge, isValidForm, recaptchaRef } = useContactForm();

    return (
        <div id="contact" className="w-full h-default flex flex-col items-center mt-24 sm:mt-0">
            <span className="w-3/4 h-24 pt-24 animate-fade-up">
                <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
            </span>
            <div className="w-full h-full flex flex-col items-center">
                <p className="text-2xl py-6 text-center md:whitespace-pre-wrap lg:text-left lg:text-3xl sm:py-10">
                    Contate-nos
                </p>
                <form onSubmit={handeleSubmit} >
                    <div className="w-full px-6">
                        <div className="grid max-w-3xl grid-cols-2 gap-4 m-auto">
                            <div className="col-span-2 lg:col-span-1">
                                <div className=" relative ">
                                    <input id="name" type="text" onChange={handleChange}
                                        value={formFields.name} required placeholder="Nome"
                                        className="rounded-lg border-transparent flex-1 appearance-none border 
                                        border-gray-300 w-full py-2 px-4 text-gray-700 placeholder-gray-400 
                                        focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                                        dark:focus:ring-secondary dark:text-white" />
                                </div>
                            </div>
                            <div className="col-span-2 lg:col-span-1">
                                <div className="relative">
                                    <input type="email" required id="email" onChange={handleChange}
                                        value={formFields.email} placeholder="E-mail" className="rounded-lg border-transparent
                                        flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
                                        text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary 
                                        focus:border-transparent dark:focus:ring-secondary dark:text-white" />
                                </div>
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700" htmlFor="name">
                                    <textarea placeholder="Descreva brevemente o serviço requerido ou dúvida"
                                        id="message" name="comment" value={formFields.message} onChange={handleChange}
                                        rows={3} cols={70} required className="w-full py-2 px-4 rounded-lg 
                                        border-transparent flex-1 appearance-none border border-gray-300 
                                        text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2
                                        focus:ring-primary focus:border-transparent dark:focus:ring-secondary
                                        dark:text-white resize-none">
                                    </textarea>
                                </label>
                            </div>
                            <div className="col-span-2 text-right">
                                <button type="submit" className={`w-full py-2 px-4 shadow-md ease-in
                                    duration-200  text-white text-center text-base font-semibold rounded-lg 
                                    ${isValidForm() ? `bg-primary hover:bg-orange-600 dark:bg-secondary 
                                    dark:hover:bg-purple-600` : "bg-slate-500 hover:bg-slate-600"}`}>
                                    Enviar
                                </button>
                                <div className="mt-5">
                                </div>
                            </div>
                        </div>
                        <span className="w-full flex justify-center mt-6">
                            <ReCaptcha refCaptcha={recaptchaRef} onCompleteChallenge={handleCompleteChallenge} />
                        </span>
                    </div>
                </form>
            </div>
        </div >
    )
}