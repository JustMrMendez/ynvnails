import { Link } from "react-router-dom";
interface CardProps {
  title?: string;
  description?: string;
  href?: string;
  productId?: number;
}

function Card({
  href = "https://picsum.photos/id/1/316/240",
  title = "New Year, New Styles",
  productId = 1,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}: CardProps) {
  return (
    <>
      <Link to={`/product/${productId}`}>
        <div className="flex min-h-[420px] w-80 flex-col justify-between rounded-3xl bg-pink-100 p-4">
          <img src={href} alt="" className="mb-2 rounded-xl" />
          <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
          <p className="text-gray-800">{description}</p>
        </div>
      </Link>
    </>
  );
}
export default Card;
