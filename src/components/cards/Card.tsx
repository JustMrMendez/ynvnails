import { Link } from "react-router-dom";
import Button from "../Button/Button";
interface CardProps {
    title?: string;
    description?: string;
    href?: string;
    productId?: number;
    flip?: boolean;
}

function Card({
    href = "https://picsum.photos/id/1/316/240",
    title = "New Year, New Styles",
    productId = 1,
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    flip,
}: CardProps) {
    return (
        <>
            <div
                className={`mx-auto flex h-full justify-between gap-5 md:gap-0 ${
                    flip
                        ? " w-4/5 flex-col md:w-full md:flex-row"
                        : "  w-4/5 flex-col md:w-80"
                } group rounded-3xl bg-pink-100 p-4 transition-all hover:scale-[1.02] hover:bg-pink-200 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-300`}
            >
                <img
                    src={href}
                    alt=""
                    className={`rounded-xl object-cover ${
                        flip ? "md:aspect-1 md:h-60" : ""
                    }`}
                />
                <div className="flex h-full flex-col justify-around gap-5 md:gap-0 md:px-4">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <p className="text-gray-800">{description}</p>
                    <Link to="/Products">
                        <Button
                            label="View Product"
                            labelColor="black"
                            color="pink-300 transition duration-200 group-hover:bg-pink-400 hover:!bg-white"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Card;
