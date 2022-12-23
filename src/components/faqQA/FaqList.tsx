import { Link } from "react-router-dom";

interface faqlist {
  question: string;
  reply: string;
}

interface faqListProps {
  faqList: faqlist[];
}

function FaqList({ faqList }: faqListProps) {
  return (
    <>
      {faqList.map((faq, i) => (
        <li className="relative justify-around text-center font-mono" key={i}>
          {/* <svg
            className="absolute h-7 w-7 overflow-visible rounded-full bg-pink-300 p-[8px] shadow-md shadow-pink-300 transition-all hover:scale-75 hover:bg-pink-400 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100"
            viewBox="0 0 320 512"
          >
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
          </svg> */}
          <h2 className="m-8 text-xl text-pink-600">{faq.question}</h2>
          <span className=" text-pink-400">{faq.reply}</span>
        </li>
      ))}
    </>
  );
}

export default FaqList;
