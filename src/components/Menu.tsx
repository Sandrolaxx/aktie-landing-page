import AktieIcon from "../assets/icons/aktLogo.svg";

export default function Menu() {
    return (
        <div className="w-full h-32 flex justify-center items-center">
            <nav className="w-full flex justify-center">
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-primary hover:text-2xl">
                        Home
                    </a>
                </span>
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-primary hover:text-2xl">
                        Soluções
                    </a>
                </span>
                <span className="w-1/6 flex justify-center">
                    <AktieIcon width={112} height={112} />
                </span>
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-secondary hover:text-2xl">
                        Time
                    </a>
                </span>
                <span className="flex items-center justify-center w-1/5">
                    <a href="" className="text-xl font-medium hover:text-secondary hover:text-2xl">
                        Contato
                    </a>
                </span>
            </nav>
        </div>
    );
}