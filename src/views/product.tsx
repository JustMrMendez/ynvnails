// simple product page

import { Link, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import Review from "../components/Review/Review";
import NotFound from "../components/svgs/NotFound";

function Product() {
  const { productId } = useParams();
  console.log(productId);

  // if productId if undefined, redirect to home page
  if (!productId) {
    window.location.href = "/products";

    // else parseInt and display product
  } else if (isNaN(parseInt(productId))) {
    console.error(`A product with id ${productId} does not exist`);
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex h-full flex-col items-center justify-between rounded-2xl bg-purple-100/50 p-10 text-center md:h-fit">
          <h1 className="text-2xl font-bold text-red-400">
            A product withdshddhhgshs id {productId} does not exist
          </h1>

          <NotFound />
          <div className="flex justify-center gap-5 font-bold text-blue-900">
            <Link to="/products">
              <button className="mt-4 rounded-lg bg-blue-400 px-4 py-2 capitalize">
                Go to all products
              </button>
            </Link>
            <Link to="/">
              <button className="mt-4 rounded-lg bg-blue-400 px-4 py-2 capitalize">
                Go to Home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="mx-auto flex flex-col items-center md:w-3/4 md:flex-row">
        <div className="w-full md:w-1/2">
          <Carousel
            images={[
              "https://picsum.photos/id/22/400/600",
              "https://picsum.photos/id/20/400/600",
              "https://picsum.photos/id/50/400/600",
              "https://picsum.photos/id/30/400/600",
            ]}
          />
        </div>
        <div className="w-1/2 px-4">
          <h2 className="text-center text-xl font-bold">Nail Product Name</h2>
          <p className="text-center">Product details go here</p>
        </div>
      </section>
      <section className="mx-auto flex items-center md:w-2/3">
        <Review text={""} name={""} />
        {/* <div className="w-1/3 px-4 py-4">
          <h3 className="text-xl font-bold">Customer Review 1</h3>
          <p>Review details go here</p>
        </div>
        <div className="w-1/3 px-4 py-4">
          <h3 className="text-xl font-bold">Customer Review 2</h3>
          <p>Review details go here</p>
        </div>
        <div className="w-1/3 px-4 py-4">
          <h3 className="text-xl font-bold">Additional Information</h3>
          <p>Information details go here</p>
        </div> */}
      </section>
    </>
  );
}

export default Product;
