// simple product page

import { useParams } from "react-router-dom";

interface ProductParams {
  productId: string;
}

function Product() {
  const { productId } = useParams();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-lg font-bold md:text-4xl">Product</h1>
      <div className="flex h-4/5 w-full flex-col items-center justify-center bg-gray-200">
        <h1 className="text-lg font-bold md:text-4xl">{productId}</h1>
      </div>
    </div>
  );
}
