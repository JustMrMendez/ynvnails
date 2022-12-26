import Button from "../Button/Button";

function Hero() {
    return (
        <div className="flex h-[50vh] max-w-screen-2xl items-center rounded bg-gradient-to-br from-purple-500 to-pink-600 px-5 shadow-2xl md:h-[70vh] md:w-full md:rounded-2xl">
            <div className="flex flex-col gap-3 py-10 text-center md:w-1/2">
                <h1 className="text-5xl font-extrabold text-white">
                    Welcome to YVN Nails!
                </h1>
                <p className="py-2 text-lg text-white">
                    Check out our inventory of Nail products and Services we
                    provide by clicking below.
                </p>
                <div className="align-middle">
                    <Button
                        label={"Services & Products"}
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
