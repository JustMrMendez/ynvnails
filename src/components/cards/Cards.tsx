import Card from "./Card";

function Cards() {
    return (
        <div className="flex max-h-full max-w-5xl flex-col gap-5 md:flex-row">
            <div className="md:w-1/2">
                <Card
                    href="https://picsum.photos/id/1/316/240"
                    title="New Year, New Styles"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            </div>
            <div className="flex flex-col gap-5 md:h-1/2">
                <Card
                    flip
                    href="https://picsum.photos/id/888/316/240"
                    title="Qatar 2022 Booked"
                    description="catch a flight to the 4geeks headquarters and learn about new programming languages."
                />
                <Card
                    flip
                    href="https://picsum.photos/id/28/316/240"
                    title="Discover the wonders of react"
                    description="tailwinds & react working together. Lorem ipsum dolor sit amet, consectetur adip"
                />
            </div>
        </div>
    );
}

export default Cards;
