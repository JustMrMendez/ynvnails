function Cards() {
  const cardComponents = [
    {
      img: "https://picsum.photos/id/1/316/240",
      title: "New Year, New Styles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: "https://picsum.photos/id/28/316/240",
      title: "Discover the wonders of react",
      description:
        "tailwinds & react working together. Lorem ipsum dolor sit amet, consectetur adip",
    },
    {
      img: "https://picsum.photos/id/888/316/240",
      title: "Quatar 2022 Booked",
      description:
        "catch a flight to the 4geeks headquarters and learn about new programming languages.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {cardComponents.map((items, key) => (
          <div
            className="m-2 h-96 w-72 overflow-hidden rounded-3xl bg-pink-100"
            key={key}
          >
            <img src={items.img} alt="" className="rounded-3xl" />
            <div className="pl-2">
              <h3 className="text-xl font-semibold">
                <p className="mb-2 leading-normal">{items.title}</p>
              </h3>
              <p className="leading-normal text-gray-800">
                {items.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
