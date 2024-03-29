import { Link } from "react-router-dom";

interface link {
    title: string;
    href: string;
}

interface linkListProps {
    linkList: link[];
}

function Links({ linkList }: linkListProps) {
    return (
        <>
            {linkList.map(link => (
                <div
                    key={link.title}
                    className="justify-around text-center hover:scale-110"
                >
                    <Link to={link.href} onClick={() => window.scrollTo(0, 0)}>
                        <span className="text-sm text-gray-600 hover:text-pink-600 md:text-base">
                            {link.title}
                        </span>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default Links;
