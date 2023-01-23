import Card from "./Card";

function Cards() {
    return (
        <div className="flex max-h-full max-w-5xl flex-col gap-5 md:flex-row">
            <div className="md:w-1/2">
                <Card
                    href="https://www.sallybeauty.com/dw/image/v2/BCSM_PRD/on/demandware.static/-/Sites-SBS-SallyBeautySupply/default/dwb9fd96d5/images/large/SBS-156990.jpg?sw=1500&sh=1500&sfrm=png"
                    // Courtesy Image from Sallybeauty.com
                    title="Professional Manicure & Pedicure Kit"
                    description="Everything you'll Need to Practice & kit to be part of Our team of Nail technician is right in this kit."
                />
            </div>
            <div className="flex flex-col gap-5 md:h-1/2">
                <Card
                    flip
                    href="https://x9x6y4p2.stackpathcdn.com/wp-content/uploads/2018/03/786-Nail-Polish-The-Upcoming-Featured-1.jpg"
                    // Courtesy Image from 786Cosmetics.com
                    title="786 Cosmetics Nail polish"
                    description="786 Cosmetics Nail polish mix Set now at a discounted price, In Stores only."
                />
                <Card
                    flip
                    href="https://www.sallybeauty.com/dw/image/v2/BCSM_PRD/on/demandware.static/-/Sites-SBS-SallyBeautySupply/default/dwea61a9f9/images/large/SBS-169608.jpg?sw=1500&sh=1500&sfrm=png"
                    // Courtesy Image from Sallybeauty.com
                    title="Starter Manicure & Pedicure Kit"
                    description="This Awesome Manicure & Pedicure Kit is a great gift, The perfect travel kit"
                />
            </div>
        </div>
    );
}

export default Cards;
