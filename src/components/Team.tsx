import Image from "next/image";
import MemberOne from "../assets/images/team_member_01.jpg";
import MemberTwo from "../assets/images/team_member_02.jpg";
import MemberThree from "../assets/images/team_member_03.jpg";
import MemberFour from "../assets/images/team_member_04.jpg";
import MemberFive from "../assets/images/team_member_05.jpg";

export default function Team() {
    return (
        <div id="team" className="w-full h-default flex flex-col items-center">
            <span className="w-3/4 h-24 pt-24 animate-fade-up">
                <hr className="h-0.5 bg-primary dark:bg-secondary rounded-full" />
            </span>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <p className="text-2xl px-20 text-center md:whitespace-pre-wrap 
                        lg:text-left lg:text-3xl py-10">
                    Time multidisciplinar
                </p>
                <div className="w-full h-full flex flex-col justify-center">
                    <div className="w-full flex p-4 justify-evenly">
                        <div className="w-1/5 h-80 flex flex-col items-center px-11">
                            <Image className="w-full h-full rounded-full" src={MemberOne} alt="Back-end" />
                            <p className="mt-4 font-medium">
                                Back-end Developer
                            </p>
                        </div>
                        <div className="w-1/5 h-80 flex flex-col items-center px-11">
                            <Image className="w-full h-full rounded-full" src={MemberTwo} alt="Front-end" />
                            <p className="mt-4 font-medium">
                                Front-end Developer
                            </p>
                        </div>
                        <div className="w-1/5 h-80 flex flex-col items-center px-11">
                            <Image className="w-full h-full rounded-full" src={MemberThree} alt="Mobile Dev" />
                            <p className="mt-4 font-medium">
                                Mobile Developer
                            </p>
                        </div>
                    </div>
                    <div className="w-full flex p-4 justify-evenly">
                        <div className="w-1/5 h-80 flex flex-col items-center px-11">
                            <Image className="w-full h-full rounded-full" src={MemberFour} alt="Mobile Dev" />
                            <p className="mt-4 font-medium">
                                UI/UX Designer
                            </p>
                        </div>
                        <div className="w-1/5 h-80 flex flex-col items-center px-11">
                            <Image className="w-full h-full rounded-full" src={MemberFive} alt="Mobile Dev" />
                            <p className="mt-4 font-medium">
                                DevOps
                            </p>
                        </div>
                        <div className="w-1/5 h-80 flex flex-col items-center px-11">
                            <div className="w-full h-full bg-red-50 rounded-full">

                            </div>
                            <p className="mt-4 font-medium">
                                Data Scientist
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}