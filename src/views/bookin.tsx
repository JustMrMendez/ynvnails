import { useEffect } from "react";
import Calendar from "../components/Calendar";

const Booking = () => {
    return (
        <main className="max-w-7xll relative z-30 h-full min-h-screen w-full rounded-b-2xl bg-pink-50 pb-24 shadow-lg md:rounded-none">
            {/* <div className="min-h-screen "> */}
            <div className="bg-gradient-to-tr from-purple-500 to-pink-600 pb-12 pt-32 text-center text-white">
                <h1 className="mb-4 text-4xl font-bold">
                    Book Your Appointment
                </h1>
                <p className="mb-8 text-lg font-light">
                    Experience the best in beauty and relaxation with our
                    services
                </p>
            </div>
            <div className="container mx-auto px-4 py-5">
                <div id="bookin" className="mx-auto max-w-4xl">
                    <Calendar />
                </div>
            </div>
            {/* </div> */}
        </main>
    );
};

export default Booking;
