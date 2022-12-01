import Review from "./Review";
interface ReviewsProps {
  text: string;
  name: string;
}
const name = "Richard";
console.log(name);

function Reviews({
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  name = "Richard",
}: ReviewsProps) {
  return (
    <>
      <div className="flex flex-col gap-14 md:flex-row">
        <Review text={text} name={name} />
        <Review text={text} name={name} />
        <Review text={text} name={name} />
      </div>
    </>
  );
}

export default Reviews;
