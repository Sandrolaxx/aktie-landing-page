import Image from "next/image";
import MemberOne from "../assets/images/team_member_01.jpg";
import MemberTwo from "../assets/images/team_member_02.jpg";
import MemberThree from "../assets/images/team_member_03.jpg";
import MemberFour from "../assets/images/team_member_04.jpg";
import MemberFive from "../assets/images/team_member_05.jpg";
import MemberSix from "../assets/images/team_member_06.jpg";

export default function Team() {
    return (
        <div id="team" className="w-full h-default flex flex-col items-center mb-14 sm:mb-0">
            <span className="w-3/4 h-24 pt-24 animate-fade-up">
                <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
            </span>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-2xl py-4 text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-3xl sm:py-10">
                    Time multidisciplinar
                </p>
                <div className="w-full h-full grid grid-cols-2 gap-12 place-items-center md:gap-6 md:grid-cols-3">
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 lg:-mt-8">
                        <Image className="w-full h-full rounded-full" src={MemberOne} alt="Back-end" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Back-end Developer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 lg:-mt-8">
                        <Image className="w-full h-full rounded-full" src={MemberTwo} alt="Front-end" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Front-end Developer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 lg:-mt-8">
                        <Image className="w-full h-full rounded-full" src={MemberThree} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Mobile Developer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 lg:-mt-8">
                        <Image className="w-full h-full rounded-full" src={MemberFour} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            UI/UX Designer
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 lg:-mt-8">
                        <Image className="w-full h-full rounded-full" src={MemberFive} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            DevOps & Infra
                        </p>
                    </div>
                    <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 lg:-mt-8">
                        <Image className="w-full h-full rounded-full" src={MemberSix} alt="Mobile Dev" />
                        <p className="mt-4 text-sm font-medium text-center md:text-base">
                            Data Scientist
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}