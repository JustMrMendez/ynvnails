interface ServiceProps {
  title?: string;
  description?: string;
  href?: string;
  flip?: boolean;
}

function Service({
  title = "Service #1",
  description = " we provide Basic Manicure for cheap customers and the best Manicures with gold glitters.",
  href = "https://picsum.photos/id/55/240/240",
  flip,
}: ServiceProps) {
  return (
    <div
      className={`my-10 flex h-4/5 w-full flex-col items-center justify-around gap-6 md:h-2/5 ${
        flip ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="relative aspect-square h-4/5 max-h-[16rem] md:max-h-[20rem]">
        <img
          src={href}
          alt=""
          className="absolute top-0 z-10 h-full w-full rounded-xl"
        />
        <div className="absolute z-0 h-full w-full rotate-45 rounded-2xl border-none bg-pink-300"></div>
      </div>
      <div className="h-full w-full px-16 md:h-2/3 md:w-1/2">
        <h1 className="text-5xl font-semibold"> {title}</h1>
        <p className="mt-4 text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default Service;
