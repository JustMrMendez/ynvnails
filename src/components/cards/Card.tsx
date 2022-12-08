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
        } rounded-3xl bg-pink-100 p-4`}
      >
        <img
          src={href}
          alt=""
          className={`rounded-xl ${flip ? "md:aspect-square md:h-60" : ""}`}
        />
        <div className="flex h-full flex-col justify-around gap-5 md:gap-0 md:px-10">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-800">{description}</p>
          <Button label="View Product" labelColor="black" color="pink-300" />
        </div>
      </div>
    </>
  );
}
export default Card;
