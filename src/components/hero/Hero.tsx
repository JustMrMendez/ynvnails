import Button from "../Button/Button";

function Hero() {
  return (
    <div className="md: flex h-full w-full bg-gradient-to-br from-purple-500 to-pink-600 px-12 shadow-lg">
      <div className="flex flex-col gap-3 py-10 text-center md:w-1/2">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to YVN Nails!
        </h1>
        <p className="py-2 text-lg text-white">
          Check our our inventory of Nail products and colors we provide by
          clicking below.
        </p>
        <div className="align-middle">
          <Button
            label={"Check Products"}
            color={
              "pink-300 transition-all hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100 sm:w-[50%]"
            }
            labelColor={"black"}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
