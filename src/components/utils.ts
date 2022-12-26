export interface Event {
    id: number;
    name: string;
    time: string;
    datetime: string;
    href: string;
}

export interface Day {
    date: string;
    isSelected: boolean;
    isCurrentMonth?: boolean;
    isToday?: boolean;
    events: Event[];
    open: any;
}

export function generateCalendar(month: number, year: number): Day[] {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthNumber = today.getMonth();
    const currentDate = today.getDate();

    // Calculate the date of the last Monday of the previous month
    const lastMonday = new Date(year, month, 1);
    while (lastMonday.getDay() !== 1) {
        lastMonday.setDate(lastMonday.getDate() - 1);
    }

    const days: Day[] = [];
    let date = lastMonday;
    while (days.length < 42) {
        console.log(`Date: ${date.toISOString()}, Days: ${days.length}`);
        const isoDate = date.toISOString();
        const day: Day = {
            date: isoDate.substring(0, 10),
            isCurrentMonth:
                month === currentMonthNumber &&
                year === currentYear &&
                date.getDate() >= 1 &&
                date.getDate() <= 31,
            isToday:
                currentDate === date.getDate() && month == currentMonthNumber,
            open:
                (date.getFullYear() > currentYear ||
                    (date.getFullYear() === currentYear &&
                        date.getMonth() > currentMonthNumber) ||
                    (date.getFullYear() === currentYear &&
                        date.getMonth() === currentMonthNumber &&
                        date.getDate() >= currentDate)) &&
                date.getMonth() <= currentMonthNumber + 2 &&
                date.getTime() - today.getTime() <= 60 * 24 * 60 * 60 * 1000,
            events: [],
            isSelected: false,
        };
        days.push(day);
        date.setDate(date.getDate() + 1);
    }

    return days;
}
// Add events to the calendar
// const events: Event[] = [
//     {
//         id: 1,
//         name: "Event 1",
//         time: "10:00",
//         datetime: "2021-05-01T10:00:00",
//         href: "https://www.google.com",
//     },
//     {
//         id: 2,
//         name: "Event 2",
//         time: "10:00",
//         datetime: "2021-05-01T10:00:00",
//         href: "https://www.google.com",
//     },
//     {
//         id: 3,
//         name: "Event 1",
//         time: "10:00",
//         datetime: "2021-05-01T10:00:00",
//         href: "https://www.google.com",
//     },
//     {
//         id: 4,
//         name: "Event 2",
//         time: "10:00",
//         datetime: "2021-05-01T10:00:00",
//         href: "https://www.google.com",
//     },
//     {
//         id: 5,
//         name: "Event 1",
//         time: "10:00",
//         datetime: "2021-05-01T10:00:00",
//         href: "https://www.google.com",
//     },
//     {
//         id: 6,
//         name: "Event 2",
//         time: "10:00",
//         datetime: "2021-05-01T10:00:00",
//         href: "https://www.google.com",
//     },
// ];

// add events to a random day in the calendar
// for (let i = 0; i < events.length; i++) {
//     const event = events[i];
//     const day = days[Math.floor(Math.random() * days.length)];
//     day.events.push(event);
// }
