import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Hero() {
    return (
        <div className="mb-20 flex max-w-screen-2xl flex-col items-center rounded-b-md bg-gradient-to-br from-purple-500 to-pink-600 px-5 pt-20 text-center shadow-md md:h-[70vh] md:w-full md:flex-row md:rounded-2xl md:py-20 md:shadow-2xl lg:h-full lg:px-20">
            <div className="flex flex-col gap-3 md:w-1/2 md:py-10">
                <h1 className="text-5xl font-extrabold text-white ">
                    <span className="bg-clip mb-4 block bg-gradient-to-tl from-purple-100 to-pink-100 bg-clip-text text-6xl uppercase text-transparent drop-shadow-md lg:text-8xl">
                        Luxurious
                    </span>
                    Personal Nail Experience
                </h1>
                <p className="py-2 text-base text-white md:mb-10">
                    Where quality and beauty come together, shop now or book
                    your appointment.
                </p>
                <Link to="/Booking">
                    <div className="flex justify-center md:gap-10 md:px-10">
                        <Button
                            label="Book Appointment"
                            color="pink-300 transition-all duration-300 hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100"
                            labelColor="white"
                        />
                    </div>
                </Link>
            </div>
            <p className="mt-6 -mb-14 text-4xl text-white/10 md:hidden">OR</p>
            <div className="md:w-1/2 md:p-10 ">
                <Link
                    to="/Products"
                    className="group relative float-right translate-y-1/4 overflow-hidden rounded-2xl border-2 border-white/20 bg-pink-500/50 object-cover shadow-xl shadow-pink-800/30 transition-all duration-500 hover:rounded-lg hover:border-white/0 hover:bg-transparent hover:shadow-2xl hover:shadow-pink-300/25 md:w-3/4 md:translate-y-5 md:shadow-lg md:shadow-pink-300/25 md:hover:-translate-y-0"
                >
                    <p className="group-hover:bg-black-800 absolute inset-0 top-0 left-1/2 z-50 h-fit w-full -translate-x-1/2 transform bg-pink-800/30 px-6 py-2 text-center text-xl text-white backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 md:top-full md:opacity-0 md:group-hover:-translate-y-full">
                        Shop Now!
                    </p>
                    <img
                        src="https://source.unsplash.com/random/?nails"
                        alt="Nail Art"
                        className="aspect-square object-cover mix-blend-screen transition-all duration-500 md:aspect-square"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Hero;
