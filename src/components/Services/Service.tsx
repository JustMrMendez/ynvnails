import { Link } from "react-router-dom";

interface ServiceProps {
    title?: string;
    description: { short: string; long: string };
    href?: string;
    flip?: boolean;
}

function Service({
    title = "Service #1",
    description = {
        short: " we provide Basic Manicure for cheap customers and the best Manicures with gold glitters.",
        long: " we provide Basic Manicure for cheap customers and the best Man",
    },
    href = "https://picsum.photos/id/55/240/240",
    flip,
}: ServiceProps) {
    return (
        <div
            className={`my-10 flex h-4/5 w-full flex-col items-center justify-around gap-6 md:h-2/5 ${
                flip ? "md:flex-row-reverse" : "md:flex-row"
            }`}
        >
            <div className="relative aspect-square md:max-h-[20rem]">
                <img
                    src={href}
                    alt=""
                    className="sticky z-10 h-60 w-60 rounded-xl shadow-md drop-shadow-xl md:h-72 md:w-72"
                />
                <div className="absolute inset-0 z-0 m-auto h-full w-full rotate-45 rounded-2xl border-none bg-pink-300"></div>
            </div>
            <div className="h-full w-full py-10 px-8 text-center md:h-2/3 md:w-1/2 md:px-16 md:text-left">
                <h1 className="text-3xl font-semibold md:text-5xl"> {title}</h1>
                <p className="mt-2 hidden text-xl text-gray-600 md:mt-4 md:block md:text-lg">
                    {description.long}
                </p>
                <p className="mt-2 text-xl text-gray-600 md:mt-4 md:hidden md:text-lg">
                    {description.short}
                </p>
                <div className="mt-3">
                    <Link
                        to="/"
                        className="rounded bg-pink-500 px-2 py-1 text-lg text-pink-50  transition-all duration-300 hover:bg-pink-200 hover:text-pink-900"
                    >
                        Book Now!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Service;
