function Card({
  img: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4" />
      <div className="m-2 h-96 w-72 overflow-hidden rounded-3xl bg-pink-100">
        <img src={img} alt="" className="rounded-3xl" />
        <div className="pl-2">
          <h3 className="text-xl font-semibold">
            <p className="mb-2 leading-normal">{title}</p>
          </h3>
          <p className="leading-normal text-gray-800">{description}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
