import { Fragment, useEffect, useState } from "react";
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import { generateCalendar, type Day, type Event } from "./utils";
import HourSelector from "./HourSelector";

function classNames(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(" ");
}

export default function Calendar() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [bookerDate, setBookerDate] = useState<Day>();
    const [isBookerVisible, setIsBookerVisible] = useState(false);
    const [days, setDays] = useState<Day[]>([]);

    useEffect(() => {
        setDays(generateCalendar(currentMonth, currentYear));
    }, [currentMonth, currentYear]);

    function handlePreviousClick() {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    }

    function handleNextClick() {
        // Increment the current month and year
        // If the current month is December, set the month to January and increment the year
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    }

    // get todays weekday by name
    const weekday = new Date().toLocaleDateString("en-US", {
        weekday: "short",
    });
    let selectedDay = days.find(day => day.isSelected);

    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            {isBookerVisible && (
                <HourSelector
                    day={bookerDate as Day}
                    onClose={() => setIsBookerVisible(false)}
                />
            )}
            <header className="flex items-center justify-between py-4 px-6 lg:flex-none">
                <h1 className="text-lg font-semibold text-gray-900">
                    <time dateTime="2022-01">
                        {new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            year: "numeric",
                        }).format(new Date(currentYear, currentMonth))}
                    </time>
                </h1>
                <div className="flex items-center">
                    <div className="flex items-center rounded-md shadow-sm md:items-stretch">
                        <button
                            onClick={handlePreviousClick}
                            type="button"
                            className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                        <button
                            onClick={() => {
                                setCurrentMonth(new Date().getMonth());
                                setCurrentYear(new Date().getFullYear());
                            }}
                            type="button"
                            className="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                />
                            </svg>
                        </button>
                        <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
                        <button
                            onClick={handleNextClick}
                            type="button"
                            className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                    <div className="hidden md:ml-4 md:flex md:items-center">
                        <Menu as="div" className="relative">
                            <Menu.Button
                                type="button"
                                className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                            >
                                Month view
                                <ChevronDownIcon
                                    className="ml-2 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}
                                                >
                                                    Day view
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}
                                                >
                                                    Week view
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}
                                                >
                                                    Month view
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(
                                                        active
                                                            ? "bg-gray-100 text-gray-900"
                                                            : "text-gray-700",
                                                        "block px-4 py-2 text-sm"
                                                    )}
                                                >
                                                    Year view
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        <div className="ml-6 h-6 w-px bg-gray-300" />
                        <button
                            type="button"
                            className="ml-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Add event
                        </button>
                    </div>
                    <Menu as="div" className="relative ml-6 md:hidden">
                        <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Open menu</span>
                            <EllipsisHorizontalIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                            />
                        </Menu.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Create event
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Go to today
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Day view
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Week view
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Month view
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                Year view
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </header>
            <div className="space-y-3 lg:flex lg:flex-auto lg:flex-col">
                <div className="grid grid-cols-7 gap-px rounded-md  bg-pink-500 text-center text-xs font-black leading-6 text-white/80 shadow-md lg:flex-none">
                    <div
                        className={classNames(
                            weekday === "Mon"
                                ? "rounded-md text-base text-white ring-2  ring-inset ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        M
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Mon" ? "onday" : "on"}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            weekday === "Tue"
                                ? "rounded-md text-base text-white ring-2 ring-inset  ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        T
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Tue" ? "uesday" : "ue"}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            weekday === "Wed"
                                ? "rounded-md text-base text-white ring-2  ring-inset ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        W
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Wed" ? "ednesday" : "ed"}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            weekday === "Thu"
                                ? "rounded-md text-base text-white ring-2  ring-inset ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        T
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Thu" ? "hursday" : "hu"}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            weekday === "Fri"
                                ? "rounded-md text-base text-white ring-2  ring-inset ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        F
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Fri" ? "riday" : "ri"}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            weekday === "Sat"
                                ? "rounded-md text-base text-white ring-2 ring-inset  ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        S
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Sat" ? "aturday" : "at"}
                        </span>
                    </div>
                    <div
                        className={classNames(
                            weekday === "Sun"
                                ? "rounded-md text-base text-white ring-2  ring-inset ring-purple-600"
                                : "",
                            "py-2"
                        )}
                    >
                        S
                        <span className="sr-only sm:not-sr-only">
                            {weekday === "Sun" ? "unday" : "un"}
                        </span>
                    </div>
                </div>
                <div className="flex bg-transparent text-xs leading-6 text-gray-700 lg:flex-auto">
                    <div className="group hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                        {days.map(day => (
                            <button
                                onClick={() => {
                                    setIsBookerVisible(true);
                                    setBookerDate(day);
                                }}
                                key={day.date}
                                className={classNames(
                                    day.open
                                        ? "m-[2px]  bg-pink-500/80 font-black text-white/80 transition hover:!z-40 hover:!scale-110 hover:!bg-pink-500  hover:!opacity-100 group-hover:z-0 group-hover:scale-95 group-hover:opacity-80"
                                        : "pointer-events-none m-1  bg-pink-200 text-black/20",
                                    day.isToday
                                        ? "ring-2 ring-inset ring-purple-600"
                                        : "",
                                    "relative h-[5rem] rounded-md border-pink-100 py-2 px-3 text-left "
                                )}
                            >
                                {!day.open ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={0.5}
                                        stroke="currentColor"
                                        className="absolute top-0 h-full w-full text-pink-400/40"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 6l12 12M6 18L18 6"
                                        />
                                    </svg>
                                ) : undefined}
                                <time
                                    dateTime={day.date}
                                    className={
                                        day.isToday
                                            ? "flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 font-black text-white"
                                            : undefined
                                    }
                                >
                                    {day.date.slice(-2)}
                                </time>
                                {day.events.length > 0 && day.open && (
                                    <ol className="mt-2">
                                        {day.events.slice(0, 2).map(event => (
                                            <li key={event.id}>
                                                <div className="flex">
                                                    <p
                                                        className={classNames(
                                                            day.open
                                                                ? "text-white/80"
                                                                : "text-gray-500",
                                                            "flex-auto"
                                                        )}
                                                    >
                                                        {event.name}
                                                    </p>
                                                    <time
                                                        dateTime={
                                                            event.datetime
                                                        }
                                                        className={classNames(
                                                            day.open
                                                                ? "text-white/60"
                                                                : "text-gray-600/60",
                                                            "ml-3 hidden flex-none  xl:block"
                                                        )}
                                                    >
                                                        {event.time}
                                                    </time>
                                                </div>
                                            </li>
                                        ))}
                                        {day.events.length > 2 && (
                                            <li className="text-gray-500">
                                                + {day.events.length - 2} more
                                            </li>
                                        )}
                                    </ol>
                                )}
                            </button>
                        ))}
                    </div>
                    <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                        {days.map(day => (
                            <button
                                onClick={() => {
                                    setIsBookerVisible(true);
                                    setBookerDate(day);
                                }}
                                key={day.date}
                                type="button"
                                className={classNames(
                                    day.isCurrentMonth
                                        ? "bg-white"
                                        : "bg-gray-50",
                                    (day.isSelected || day.isToday) &&
                                        "font-semibold",
                                    day.isSelected && "text-white",
                                    !day.isSelected &&
                                        day.isToday &&
                                        "text-indigo-600",
                                    !day.isSelected &&
                                        day.isCurrentMonth &&
                                        !day.isToday &&
                                        "text-gray-900",
                                    !day.isSelected &&
                                        !day.isCurrentMonth &&
                                        !day.isToday &&
                                        "text-gray-500",
                                    "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"
                                )}
                            >
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        day.isSelected &&
                                            "flex h-6 w-6 items-center justify-center rounded-full",
                                        day.isSelected &&
                                            day.isToday &&
                                            "bg-indigo-600",
                                        day.isSelected &&
                                            !day.isToday &&
                                            "bg-gray-900",
                                        "ml-auto"
                                    )}
                                >
                                    {day.date.slice(-2)}
                                </time>
                                <span className="sr-only">
                                    {day.events.length} events
                                </span>
                                {day.events.length > 0 && (
                                    <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                                        {day.events.map(event => (
                                            <span
                                                key={event.id}
                                                className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                            />
                                        ))}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {(selectedDay?.events.length as number) > 0 && (
                <div className="py-10 px-4 sm:px-6 lg:hidden">
                    <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                        {selectedDay?.events.map(event => (
                            <li
                                key={event.id}
                                className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                            >
                                <div className="flex-auto">
                                    <p className="font-semibold text-gray-900">
                                        {event.name}
                                    </p>
                                    <time
                                        dateTime={event.datetime}
                                        className="mt-2 flex items-center text-gray-700"
                                    >
                                        <ClockIcon
                                            className="mr-2 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        {event.time}
                                    </time>
                                </div>
                                <a
                                    href={event.href}
                                    className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                                >
                                    Edit
                                    <span className="sr-only">
                                        , {event.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}
