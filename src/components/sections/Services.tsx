import Service from "../Services/Service";

function Services() {
    const ServiceList = [
        {
            title: "Acrylic Manicure",
            href: "https://i.ebayimg.com/images/g/yWIAAOSwTwVjc1dl/s-l500.jpg",
            // Courtesy image of Ebay.com fake nails
            description: {
                long: "Enhance your natural nails with a custom acrylic manicure! Choose from a wide range of colors and finishes to create the perfect look for you. Acrylics add strength and length to your nails and are perfect for creating bold and unique designs. Book your appointment today and get ready to turn heads with your stunning acrylic nails!",
                short: "Enhance your natural nails with a custom acrylic manicure! Choose from a wide range of colors and finishes to create the perfect look for you.",
            },
        },
        {
            title: "Deep Pedicure",
            href: "https://feetfirstclinic.com/wp-content/uploads/medical-pedicure-process-breakdown-featured-healthy-feet-geo.jpg",
            // Courtesy image from https://feetfirstclinic.com/blog/what-is-a-medical-pedicure/
            description: {
                long: "Indulge in a relaxing deep pedicure that will leave your feet feeling refreshed and rejuvenated. This luxurious treatment includes a soak, exfoliation, and massage, followed by trimming, shaping, and polishing of the toenails. Book your appointment today and treat yourself to some well-deserved pampering!",
                short: "Treat yourself to a relaxing deep pedicure that includes a soak, exfoliation, and massage. Your toenails will be trimmed, shaped, and polished to perfection. Book now and feel rejuvenated!",
            },
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
                    href={service.href}
                />
            ))}
        </div>
    );
}

export default Services;
