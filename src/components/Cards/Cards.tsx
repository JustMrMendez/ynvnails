import Card from "./Card";

function Cards() {
  return (
    <div className="flex flex-row">
      <Card
        img="https://picsum.photos/id/1/316/240"
        title="New Year, New Styles"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Card
        img="https://picsum.photos/id/888/316/240"
        title="Quatar 2022 Booked"
        description="catch a flight to the 4geeks headquarters and learn about new programming languages."
      />
      <Card
        img="https://picsum.photos/id/28/316/240"
        title="Discover the wonders of react"
        description="tailwinds & react working together. Lorem ipsum dolor sit amet, consectetur adip"
      />
    </div>
  );
}

export default Cards;
