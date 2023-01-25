import { useEffect, useState } from "react";
import Card from "../components/cards/Card";
import { doc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../db";

function ProductPage() {
    const [products, setProducts] = useState([] as DocumentData[]);

    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, "product");
            const docSnap = await getDocs(colRef);
            const data = docSnap.docs.map(doc => doc.data());

            setProducts(data);
            console.log(products);
        };

        fetchData();
    }, []);

    // ScrollTop();

    return (
        <div className="relative z-40 min-h-screen  rounded-b-2xl bg-pink-50 pb-20 shadow-lg md:shadow-2xl">
            <div className="grid h-[30vh] w-full place-items-center rounded-b-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <h1 className="text-center text-5xl font-black text-white">
                    Products
                </h1>
            </div>
            <div className="mt-8 mb-4 flex flex-wrap gap-6">
                {products.map((product, index) => (
                    <Card
                        key={index}
                        href={product.image}
                        title={product.name}
                        description={product.subtitle}
                    />
                ))}
                <Card
                    href="https://www.sallybeauty.com/dw/image/v2/BCSM_PRD/on/demandware.static/-/Sites-SBS-SallyBeautySupply/default/dwb9fd96d5/images/large/SBS-156990.jpg?sw=1500&sh=1500&sfrm=png"
                    // Courtesy Image from Sallybeauty.com
                    title="Professional Manicure & Pedicure Kit"
                    description="Everything you'll Need to Practice & kit to be part of Our team of Nail technician is right in this kit."
                />
                <Card
                    href="https://cdn.shopify.com/s/files/1/0413/6229/2900/products/786CosmeticsNailPolishColorGuide2.jpg?v=1664831397"
                    // Courtesy Image from 786Cosmetics.com
                    title="786 Cosmetics Nail polish"
                    description="786 Cosmetics Nail polish mix Set now at a discounted price, In Stores only."
                />
                <Card
                    href="https://www.sallybeauty.com/dw/image/v2/BCSM_PRD/on/demandware.static/-/Sites-SBS-SallyBeautySupply/default/dwea61a9f9/images/large/SBS-169608.jpg?sw=1500&sh=1500&sfrm=png"
                    // Courtesy Image from Sallybeauty.com
                    title="Starter Manicure & Pedicure Kit"
                    description="The perfect travel kit"
                />
                <Card
                    href="https://cdn.shopify.com/s/files/1/0510/7734/9553/products/H22ba5ee94c304e6eae52bfe3d86be1e9J_1024x1024@2x.jpg?v=1639384028"
                    title="4pc pedicure disposable Kit"
                    description="single use 4pc kits for a discounted price."
                />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default ProductPage;
