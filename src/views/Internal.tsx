import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../db";

const addProduct = async (product: any) => {
    const colRef = collection(db, "products");
    await addDoc(colRef, product);
};

function AddProductForm() {
    const [product, setProduct] = useState({
        title: "",
        shortDescription: "",
        price: 0,
        image: "",
    });

    const handleInputChange = (e: any) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ title: "", shortDescription: "", price: 0, image: "" });
    };

    return (
        <main className="relative z-40 flex h-full min-h-screen w-full flex-col items-center justify-center rounded bg-pink-50 pb-20 pt-20 align-middle shadow-lg md:rounded-none md:pt-24">
            <div className="grid h-[50vh] w-11/12 place-items-center gap-8 rounded-lg bg-gradient-to-br from-pink-500 to-purple-400 shadow-lg">
                <h1 className=" text-center text-5xl font-medium text-white">
                    Internal Section
                </h1>
                <form
                    className="flex flex-col justify-center gap-4 leading-tight text-gray-700 md:flex-row"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="shadow-outline w-60 appearance-none rounded py-3 px-3  focus:outline-none"
                        type="text"
                        name="image"
                        value={product.image}
                        onChange={handleInputChange}
                        placeholder="Image"
                    />
                    <input
                        className="shadow-outline w-60 appearance-none rounded py-3 px-3  focus:outline-none"
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                    <input
                        className=" shadow-outline  w-60 appearance-none rounded py-3 px-3 focus:outline-none"
                        type="text"
                        name="shortDescription"
                        value={product.shortDescription}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <input
                        className="shadow-outline w-60 appearance-none rounded py-3 px-3 focus:outline-none"
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                    />
                    <div className="text-center">
                        <button
                            className=" rounded-lg bg-pink-400 px-2 align-middle shadow-sm hover:bg-pink-600"
                            type="submit"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default AddProductForm;
