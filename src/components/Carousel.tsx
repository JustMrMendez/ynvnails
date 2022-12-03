import { useState } from "react";

type Props = {
  images: string[];
};

type State = {
  currentImage: number;
};

function Carousel({ images }: Props) {
  const [currentImage, setCurrentImage] = useState<State["currentImage"]>(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage + 1);
  };

  return (
    <div className="relative max-h-[450px] w-full overflow-hidden rounded-b-xl shadow-xl md:max-w-[400px] md:rounded-2xl">
      <button
        type="button"
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 m-2"
      >
        Prev
      </button>
      <img src={images[currentImage]} alt="" className="w-full" />
      <button
        type="button"
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 m-2"
      >
        Next
      </button>
    </div>
  );
}

export default Carousel;
