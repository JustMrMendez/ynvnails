import { Link } from "react-router-dom";
import Button from "../Button/Button";
import FaqList from "../faqQA/FaqList";
import ScrollTop from "../svgs/topScroll";

function FaqFrontPage() {
    const faqList = [
        {
            question: "Do you have any nail art or design options available?",
            reply: "Some salons offer nail art or design options, such as hand-painted designs, decals, or 3D accents.",
        },
        {
            question:
                "Do you have any promotions or discounts currently available?",
            reply: "We do offer first-time customer discounts and special deals for holidays or other occasions.",
        },
        {
            question:
                "Do you have a wide range of polish colors to choose from?",
            reply: "Most nail salons have a wide range of polish colors to choose from, including classic shades, bold hues, and trendy shades.",
        },
    ];

    return (
        <>
            <h1 className="text-bold mb-4 mt-6 text-center text-4xl font-bold text-gray-800 md:text-5xl">
                Frequently asked questions
            </h1>
            <div className="justify-center text-center">
                <FaqList faqList={faqList} />
                <div className="mt-4">
                    <Link to="/Faq">
                        <Button
                            label="Read More"
                            labelColor="black"
                            color="pink-300 transition duration-200 group-hover:bg-pink-400 hover:!bg-white"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FaqFrontPage;
