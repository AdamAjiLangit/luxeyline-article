import Link from "next/link";

interface AnimatedLinkNewProps {
    id: string;
    title: string;
    href: string;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    containerClass?: string;
}

const AnimatedLinkNew: React.FC<AnimatedLinkNewProps> = ({ id, title, rightIcon, leftIcon, containerClass = "", href }) => {
    return (
        <Link
            id={id}
            className={`group relative w-fit cursor-pointer overflow-hidden ${containerClass}`}
            href={href}
        >
            <div className="flex items-center gap-2"> {/* 👈 flex row */}
                {leftIcon}

                <span className="relative inline-flex overflow-hidden">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                        {title}
                    </div>
                    <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                        {title}
                    </div>
                </span>

                {rightIcon}
            </div>
        </Link>
    );
};

export default AnimatedLinkNew;
