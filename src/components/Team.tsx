import Image from "next/image";
import MemberOne from "../assets/images/team_member_01.png";
import MemberTwo from "../assets/images/team_member_02.png";
import MemberThree from "../assets/images/team_member_03.png";
import MemberFour from "../assets/images/team_member_04.png";
import MemberFive from "../assets/images/team_member_05.png";

export default function Team() {
    return (
        <div id="team" className="w-full h-default flex flex-col items-center mb-14 sm:mb-0">
            <span className="w-3/4 h-24 pt-24 animate-fade-up">
                <div className="h-0.5 w-full bg-primary/50 dark:bg-secondary rounded-full" />
            </span>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h2 className="text-2xl py-6 text-center md:whitespace-pre-wrap lg:text-left lg:text-2xl sm:py-10">
                    Time Multidisciplinar de Desenvolvimento
                </h2>
                <div className="w-full h-full grid grid-cols-2 gap-12 place-items-center 
                    md:gap-2 md:grid-cols-3 lg:w-3/4">
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        <Image className="w-full h-full rounded-full" src={MemberOne} alt="Back-end" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Back-end Developer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        <Image className="w-full h-full rounded-full" src={MemberTwo} alt="Front-end" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Front-end Developer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        <Image className="w-full h-full rounded-full" src={MemberOne} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Mobile Developer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        <Image className="w-full h-full rounded-full" src={MemberThree} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            UI/UX Designer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        <Image className="w-full h-full rounded-full" src={MemberFour} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            DevOps & Infra
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-56 lg:h-56">
                        <Image className="w-full h-full rounded-full" src={MemberFive} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Data Scientist
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}