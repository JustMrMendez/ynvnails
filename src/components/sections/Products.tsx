import Cards from "../cards/Cards";

function Products() {
    return (
        <>
            <h1 className="text-bold py-10 text-center text-5xl font-bold text-gray-800">
                Best Beauty Products
            </h1>
            <div className="flex justify-center">
                <Cards />
            </div>
        </>
    );
}

export default Products;
