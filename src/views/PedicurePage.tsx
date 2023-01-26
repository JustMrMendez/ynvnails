import { useEffect, useState } from "react";
import { doc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../db";
import ScrollTop from "../components/svgs/topScroll";
import PedicureCard from "../components/cards/ManicureCard";

function PedicurePage() {
    const [pedicurePage, setPedicurePage] = useState([] as DocumentData[]);

    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, "pedicure");
            const docSnap = await getDocs(colRef);
            const data = docSnap.docs.map(doc => doc.data());

            setPedicurePage(data);
            console.log(pedicurePage);
        };

        fetchData();
    }, []);

    ScrollTop();

    return (
        <div className="relative z-40 min-h-screen  rounded-b-2xl bg-pink-50 pb-20 shadow-lg md:shadow-2xl">
            <div className="grid h-[30vh] w-full place-items-center rounded-b-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <h1 className="text-center text-5xl font-black text-white">
                    Pedicures
                </h1>
            </div>
            <div className="mt-8 mb-4 flex flex-wrap gap-4">
                {pedicurePage.map((pedicure, index) => (
                    <PedicureCard href={pedicure.image} key={index} />
                ))}
            </div>
        </div>
    );
}

export default PedicurePage;
