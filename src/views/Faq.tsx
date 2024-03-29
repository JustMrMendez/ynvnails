import FaqList from "../components/faqQA/FaqList";

function Faq() {
  const faqList = [
    {
      question: "What types of manicures and pedicures do you offer?",
      reply:
        "we offer a variety of manicures and pedicures, such as basic polish changes, cuticle care, exfoliating scrubs, moisturizing treatments, and more.",
    },
    {
      question: "Do you offer gel or acrylic nail services?",
      reply:
        "offer gel or acrylic nail services, which involve applying a synthetic material over the natural nail to create a more durable and long-lasting finish.",
    },
    {
      question: "Do you have a wide range of polish colors to choose from?",
      reply:
        "Most nail salons have a wide range of polish colors to choose from, including classic shades, bold hues, and trendy shades.",
    },
    {
      question: "Do you have any nail art or design options available?",
      reply:
        "Some salons offer nail art or design options, such as hand-painted designs, decals, or 3D accents.",
    },
    {
      question: "Do you have any promotions or discounts currently available?",
      reply:
        "Many salons offer promotions or discounts at different times, such as first-time customer discounts or special deals for holidays or other occasions.",
    },
    {
      question:
        "Do you offer any additional services, such as waxing or massages?",
      reply:
        "At the moment we do not, but we can recommend you to the right place",
    },
    {
      question:
        "Do you have any sanitation protocols in place to prevent the spread of illness?",
      reply:
        "proper sanitation protocols in place to prevent the spread of illness, such as using disposable tools, sanitizing surfaces and equipment, and washing hands frequently.",
    },
    {
      question:
        "Do you have any policies on using your own polish or bringing in your own tools?",
      reply:
        "policies on using your own polish or bringing in your own tools, so it's a good idea to ask before bringing any of your own products.",
    },
    {
      question: "do you offer free drinks?",
      reply: "we have water and a variety of free drinks on sight",
    },
    {
      question: "Do you have any customer loyalty programs?",
      reply: "We are in the process of creating a customer loyalty program.",
    },
  ];

  return (
    <div className="relative z-40 min-h-screen  rounded-b-2xl bg-pink-100 pb-20 shadow-lg md:shadow-2xl">
      <div className="grid h-[30vh] w-full place-items-center rounded-b-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
        <h1 className="text-center text-4xl font-black text-white">
          Frequency Asked Questions
        </h1>
      </div>
      <div className="mb-6 grid w-full place-items-center p-2">
        <FaqList faqList={faqList} />
      </div>
    </div>
  );
}

export default Faq;
