import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Hero() {
    return (
        <div className="flex flex-col md:flex-row max-w-screen-2xl items-center rounded-b-md bg-gradient-to-br from-purple-500 to-pink-600 px-5 py-20 text-center shadow-md md:h-[70vh] md:w-full md:rounded-2xl md:shadow-2xl lg:h-full lg:px-20">
            <div className="flex flex-col gap-3 md:py-10 md:w-1/2">
                <h1 className="text-5xl font-extrabold text-white ">
                    <span className="text-6xl lg:text-8xl bg-clip mb-4 block bg-gradient-to-tl to-pink-200 from-purple-200 drop-shadow-md uppercase text-transparent bg-clip-text">
                        Luxurious
                    </span>
                    Personal Nail Experience
                </h1>
                <p className="mb-10 py-2 text-base text-white">
                    Where quality and beauty come together, shop now or book
                    your appointment.
                </p>
                <div className="flex justify-center md:gap-10 md:px-10">
                    <Button
                        label="Book Appointment"
                        color="pink-300 transition-all duration-300 hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100 sm:w-[50%]"
                        labelColor="white"
                    />
                </div>
            </div>
            <div className="p-10 md:block md:w-1/2">
                <Link
                    to="/Products"
                    className="group relative float-right w-3/4 translate-y-5 overflow-hidden rounded-2xl bg-pink-500 object-cover shadow-lg shadow-pink-300/25 transition-all duration-500 hover:-translate-y-0 hover:bg-transparent  hover:shadow-2xl hover:shadow-pink-300/25 "
                >
                    <p className="group-hover:bg-black-800 absolute inset-0 top-full left-1/2 z-50 h-fit w-full -translate-x-1/2 transform bg-pink-800/50 px-6 py-2 text-center text-xl text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-full group-hover:scale-100 group-hover:opacity-100">
                        Shop Now!
                    </p>
                    <img
                        src="https://source.unsplash.com/random/?nails"
                        alt="Nail Art"
                        className="aspect-square mix-blend-screen transition-all duration-500"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Hero;
