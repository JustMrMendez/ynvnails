import { useEffect, useState } from "react";
import { doc, getDocs, collection, DocumentData } from "firebase/firestore";
import { db } from "../db";
import ScrollTop from "../components/svgs/topScroll";
import ManicureCard from "../components/cards/ManicureCard";

function ManicurePage() {
    const [manicurePage, setManicurePage] = useState([] as DocumentData[]);

    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(db, "manicure");
            const docSnap = await getDocs(colRef);
            const data = docSnap.docs.map(doc => doc.data());

            setManicurePage(data);
            console.log(manicurePage);
        };

        fetchData();
    }, []);

    ScrollTop();

    return (
        <div className="relative z-40 min-h-screen  rounded-b-2xl bg-pink-50 pb-20 shadow-lg md:shadow-2xl">
            <div className="grid h-[30vh] w-full place-items-center rounded-b-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg">
                <h1 className="text-center text-5xl font-black text-white">
                    Manicures
                </h1>
            </div>
            <div className="mt-8 mb-4 flex flex-wrap gap-4">
                {manicurePage.map((manicure, index) => (
                    <ManicureCard href={manicure.image} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ManicurePage;
