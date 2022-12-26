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
}

export function generateCalendar(month: number, year: number): Day[] {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonthNumber = today.getMonth();
    const currentDate = today.getDate();

    console.log(
        `is current month: ${
            month === currentMonthNumber && year === currentYear
        }`
    );

    const days: Day[] = [];
    for (let i = currentDate - 7; i <= currentDate + 34; i++) {
        const date = new Date(year, month, i);
        const isoDate = date.toISOString();
        const day: Day = {
            date: isoDate.substring(0, 10),
            isCurrentMonth:
                month === currentMonthNumber &&
                year === currentYear &&
                i > 0 &&
                i < 32,
            isToday: currentDate === i && month == currentMonthNumber,

            events: [],
            isSelected: false,
        };
        days.push(day);
    }
    return days;
}
