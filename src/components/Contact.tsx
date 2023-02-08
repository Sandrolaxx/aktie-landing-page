import React, { FormEvent, useRef } from "react"
import useContactForm from "../hook/useContactForm"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendContactMail } from "../service/sendEmail";
import ReCAPTCHA from "react-google-recaptcha";


export default function Contact() {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string;
    const { formFields, handleChange } = useContactForm();
    const [isChallengeCompleted, setChallengeCompleted] = useState(false);

  const { values, handleChange } = useContactForm()
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);


  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    recaptchaRef?.current?.reset();
  }


  async function handeleSubmit(e: FormEvent) {
    e.preventDefault()
    recaptchaRef?.current?.execute();
  }
  {/*
  try {
      await sendContactMail(values.nome, values.email, values.message,);
      toast('Mensagem enviada com sucesso!');
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!');
    }



*/}
  return (
    <div id="contact" className="w-full h-default flex flex-col items-center mt-24 sm:mt-0">
      <span className="w-3/4 h-24 pt-24 animate-fade-up">
        <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
      </span>
      <div className="w-full h-full flex flex-col items-center">
        <p className="text-2xl py-6 text-center md:whitespace-pre-wrap lg:text-left lg:text-3xl sm:py-10">
          Contate-nos
        </p>
        <form onSubmit={handeleSubmit} className="flex w-full h-full px-6">
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
            onChange={onReCAPTCHAChange}
          />
          <div className="w-full">
            <div className="grid max-w-2xl grid-cols-2 gap-4 m-auto">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input id="nome"
                    type="text" onChange={handleChange}
                    value={values.nome}
                    required
                    placeholder="Nome"
                    className="rounded-lg 
                                border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
                                text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary 
                                focus:border-transparent dark:focus:ring-secondary dark:text-white" />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="relative">
                  <input type="email"
                    required id="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="E-mail"
                    className="rounded-lg 
                             border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 
                              text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary 
                              focus:border-transparent dark:focus:ring-secondary dark:text-white" />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    placeholder="Descreva brevemente o serviço requerido ou dúvida" id="message" name="comment"
                    value={values.message}
                    onChange={handleChange}
                    rows={3} cols={70}
                    required className="w-full py-2 px-4 rounded-lg border-transparent flex-1 appearance-none 
                                        border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2  
                                        focus:ring-primary focus:border-transparent dark:focus:ring-secondary dark:text-white resize-none">
                  </textarea>
                </label>
              </div>
              <div className="col-span-2 text-right">
                <button type="submit" className="py-2 px-4 bg-primary hover:bg-orange-600 
                                    focus:ring-indigo-300 focus:ring-offset-indigo-200 text-white w-full transition 
                                    ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none
                                    focus:ring-2 focus:ring-offset-2 rounded-lg dark:bg-secondary dark:hover:bg-purple-600">
                  Enviar
                </button>
                <div className="mt-5">
                </div>
              </div>
            </div>
          </div>
        </form>

      </div>
      <ToastContainer />
    </div >
  )
}