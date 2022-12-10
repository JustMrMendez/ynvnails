import Service from "../Services/Service";

function Services() {
  const title = "Service #5";
  const description =
    "we provide Basic Manicure for customers and the best Manicures with gold glitters.";
  // const href = "https://picsum.photos/id/55/240/240";

  return (
    <div className="flex h-[80vh] flex-col justify-center">
      <Service />
      <Service title={title} description={description} flip />
    </div>
  );
}

export default Services;
