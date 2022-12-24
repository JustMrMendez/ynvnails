import { useState } from "react";
import { Link } from "react-router-dom";

interface faqlist {
  question: string;
  reply: string;
  open?: boolean;
}

interface faqListProps {
  faqList: faqlist[];
}

function FaqList({ faqList }: faqListProps) {
  const [open, setOpen] = useState<Number[]>([]);

  return (
    <>
      <dl className="mt-5 flex max-w-2xl flex-col gap-5">
        {faqList.map((faq, i) => (
          <div
            className=" justify-around rounded-xl bg-pink-50 p-5 font-mono shadow-md"
            key={i}
          >
            <dt className="mb-3 text-lg">
              <button
                onClick={() => setOpen(open.includes(i) ? [] : [i])}
                type="button"
                className="flex w-full items-start justify-between text-left text-gray-400"
                aria-controls="faq-0"
                aria-expanded="false"
              >
                <span className="text-xl text-pink-600">{faq.question}</span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className="h-6 w-6 overflow-visible rounded-full bg-pink-300 p-1 shadow-md shadow-pink-300 transition-all hover:scale-75 hover:bg-pink-400 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd className={open.includes(i) ? "block" : "hidden"}>
              <p className="text-pink-400">{faq.reply}</p>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export default FaqList;
