import { useEffect, useState } from "react";
import ProductCard from "../components/cards/ProductCard";
import { doc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../db";
import ScrollTop from "../components/svgs/topScroll";

function ProductPage() {
    const [products, setProducts] = useState([] as DocumentData[]);

    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, "products");
            const docSnap = await getDocs(colRef);
            const data = docSnap.docs.map(doc => doc.data());

            setProducts(data);
            console.log(products);
        };

        fetchData();
    }, []);

    ScrollTop();

    return (
        <div className="relative z-40 min-h-screen  rounded-b-2xl bg-pink-50 pb-20 shadow-lg md:shadow-2xl">
            <div className="grid h-[30vh] w-full place-items-center rounded-b-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <h1 className="text-center text-5xl font-black text-white">
                    Products
                </h1>
            </div>
            <div className="mt-8 mb-4 flex flex-wrap gap-6">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        href={product.image}
                        title={product.title}
                        description={product.shortDescription}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductPage;
