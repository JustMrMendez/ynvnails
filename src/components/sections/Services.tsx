import Service from "../Services/Service";

function Services() {
    const ServiceList = [
        {
            title: "Acrilic Manicure",
            description:
                "Enhance your natural nails with a custom acrylic manicure! Choose from a wide range of colors and finishes to create the perfect look for you. Acrylics add strength and length to your nails and are perfect for creating bold and unique designs. Book your appointment today and get ready to turn heads with your stunning acrylic nails!",
        },
        {
            title: "Deep Pedicure",
            description:
                "Indulge in a relaxing deep pedicure that will leave your feet feeling refreshed and rejuvenated. This luxurious treatment includes a soak, exfoliation, and massage, followed by trimming, shaping, and polishing of the toenails. Book your appointment today and treat yourself to some well-deserved pampering!",
        },
    ];
    // const href = "https://picsum.photos/id/55/240/240";

    return (
        <div className="mt-10 flex h-full max-w-screen-2xl flex-col justify-around">
            {ServiceList.map((service, index) => (
                <Service
                    key={service.title}
                    title={service.title}
                    description={service.description}
                    flip={index % 2 !== 0}
                />
            ))}
        </div>
    );
}

export default Services;
