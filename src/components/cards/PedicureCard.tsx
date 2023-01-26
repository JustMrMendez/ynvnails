import { Link } from "react-router-dom";
interface PedicureProps {
    href?: string;
}

function PedicureCard({
    href = "https://picsum.photos/id/1/316/240",
}: PedicureProps) {
    return (
        <>
            <div className="group mx-auto flex min-h-[400px] justify-between gap-5 rounded-3xl bg-lime-100 p-4 transition-all hover:scale-[1.02] hover:bg-lime-200 hover:shadow-lg hover:shadow-lime-400 md:min-h-[250px] md:gap-0">
                <img
                    src={href}
                    alt=""
                    className="rounded-xl object-cover md:h-72 md:w-72"
                />
            </div>
        </>
    );
}
export default PedicureCard;
