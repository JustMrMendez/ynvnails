import {
    collection,
    deleteDoc,
    DocumentData,
    getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../db";

function ProductList() {
    const [products, setProducts] = useState([] as DocumentData[]);

    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, "products");
            const docSnap = await getDocs(colRef);
            const data = docSnap.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setProducts(data);
            console.log(products[2]);
        };

        fetchData();
    }, []);
    return (
        <ul className="flex w-full flex-col overflow-y-scroll">
            {products.map((product, i) => (
                <li
                    className={`flex w-full justify-around ${
                        i % 2 == 0 ? "bg-gray-300" : "border-y-2"
                    }`}
                    key={product.id}
                >
                    <p>{product.title}</p>

                    <button
                        onClick={() =>
                            deleteDoc(product.id).then(() => {
                                // setProducts(
                                //     products.filter(p => p.id !== product.id)
                                // );
                                console.log;
                            })
                        }
                    >
                        Remove
                    </button>
                </li>
            ))}
        </ul>
    );
}
export default ProductList;
