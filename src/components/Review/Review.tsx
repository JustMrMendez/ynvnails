import "./review.css";
interface ReviewProps {
  text: string;
  name: string;
}

function Review({ text, name }: ReviewProps) {
  return (
    <>
      <div className="card rounded-md bg-white shadow-sm">
        <div className="quatation">
          <svg
            width="53"
            height="42"
            viewBox="0 0 53 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2357 21.2614V42H0V27.8838C0 22.5394 0.951739 17.6598 2.85522 13.2448C4.7587 8.71369 7.91134 4.29876 12.3131 0L20.165 5.92531C15.1684 11.2697 12.3131 16.3817 11.5993 21.2614H21.2357ZM53 21.2614V42H31.7643V27.8838C31.7643 22.5394 32.7161 17.6598 34.6195 13.2448C36.523 8.71369 39.6757 4.29876 44.0774 0L51.9293 5.92531C46.9327 11.2697 44.0775 16.3817 43.3636 21.2614H53Z"
              fill="#CF28BF"
            />
          </svg>
        </div>
        <p className="review">{text}</p>
        <h3 className="name">{name}</h3>
      </div>
    </>
  );
}

export default Review;
