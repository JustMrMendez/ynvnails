import { useEffect, useState } from "react";
import { Day, generateHours } from "./utils";

type HourSelectorProps = {
    day: Day;
    onClose: () => void;
};

function HourSelector({ day, onClose }: HourSelectorProps) {
    const [hours, setHours] = useState<String[]>([]);

    useEffect(() => {
        const generatedHours = generateHours();
        setHours(generatedHours);
    }, []);
    console.log(hours);

    return (
        <div className="fixed inset-0 z-50 mt-auto h-4/5 w-full items-center rounded-md bg-white p-10 shadow-lg md:m-auto md:h-3/4 md:w-3/4">
            {/* x button on the top right corner to close the modal */}
            <svg
                onClick={onClose}
                className="absolute top-4 right-4 h-8 w-8 cursor-pointer rounded-full bg-pink-50 p-1 text-purple-500 transition-all hover:scale-105 hover:bg-pink-200"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <h2 className="mb-8 text-center text-2xl font-bold md:text-4xl">
                {new Date(
                    Number(day.date.split("-")[0]),
                    Number(day.date.split("-")[1]),
                    Number(day.date.split("-")[2])
                ).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                })}
            </h2>
            <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {hours.map((hour, i) => (
                    <button
                        key={i}
                        className="mb-2 min-w-fit rounded-md bg-gray-200 p-3 hover:scale-105"
                    >
                        {hour}
                    </button>
                ))}
            </ul>
        </div>
    );
}

export default HourSelector;
