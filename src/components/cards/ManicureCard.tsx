import { Link } from "react-router-dom";
interface ManicureProps {
    href?: string;
}

function ManicureCard({
    href = "https://picsum.photos/id/1/316/240",
}: ManicureProps) {
    return (
        <>
            <div className="group mx-auto flex min-h-[400px] justify-between gap-5 rounded-3xl bg-teal-100 p-4 transition-all hover:scale-[1.02] hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-400 md:min-h-[250px] md:gap-0">
                <img
                    src={href}
                    alt=""
                    className="rounded-xl object-cover md:h-72 md:w-72"
                />
                {/* <div className="flex h-full flex-col justify-around gap-5 md:gap-0 md:px-4"></div> */}
            </div>
        </>
    );
}
export default ManicureCard;
