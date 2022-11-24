import Review from "./Review";
interface ReviewsProps {
  text: string;
  name: string;
}

const text =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
console.log(text);

const name = "Richard";
console.log(name);

function Reviews() {
  return (
    <div className="flex flex-col gap-14">
      <Review text={text} name={name} />
      <Review text={text} name={name} />
      <Review text={text} name={name} />
    </div>
  );
}

export default Reviews;
