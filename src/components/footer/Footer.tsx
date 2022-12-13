import Icon from "./Icon";
import LinkList from "./LinkList";
import Button from "../Button/Button";

function Footer() {
  return (
    <div className="mx-auto flex h-[90vh] w-11/12 flex-col justify-around py-5 md:w-2/3">
      <div className="flex h-1/2 w-full flex-col justify-around rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 px-2 text-center text-black shadow-lg md:rounded-3xl">
        <h1 className="text-2xl font-extrabold text-white md:text-4xl">
          Subscribe to Our Newsletter for Upcoming Deals
        </h1>
        <div className=" flex flex-col justify-center gap-4 md:flex-row">
          <input
            placeholder="Email Address"
            type="text"
            className="rounded-3xl bg-white bg-opacity-30 py-3 text-center text-white/80 placeholder:text-white/50 focus:outline-0 md:px-20"
          />
          <Button
            label="Subscribe"
            color="pink-300 transition-all hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100"
            labelColor="black"
          />
        </div>
        <div>
          <div className="flex justify-center gap-4 py-3">
            <Icon
              href="https://Instagram.com"
              viewbox="0 0 448 512"
              d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
            />
            <Icon
              viewbox="0 0 512 512"
              d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
            />
            <Icon
              href="http://Facebook.com"
              viewbox="0 0 320 512"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </div>
          <h2 className="text-center text-xl font-bold text-white">YNV Nails</h2>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-3">
        <div className="m-3 flex-col justify-center">
          <h2 className="font-bold">Location</h2>
          <LinkList
            linkList={[
              {
                title: "Miami",
                href: "/cotact",
              },
              {
                title: "Brickell",
                href: "/services",
              },
            ]}
          />
        </div>
        <div className="m-3 flex-col justify-center">
          <h2 className="font-bold">Contact</h2>
          <LinkList
            linkList={[
              {
                title: "About Us",
                href: "/aboutus",
              },
              {
                title: "FAQ",
                href: "/faq",
              },
            ]}
          />
        </div>
        <div className="m-3 flex-col justify-center">
          <h2 className="font-bold">Services</h2>
          <LinkList
            linkList={[
              {
                title: "Manicures",
                href: "/manicures",
              },
              {
                title: "Pedicures",
                href: "/pedicures",
              },
            ]}
          />
        </div>
      </div>
      <div className="h-1/4 text-center text-gray-700">
        © 2022 YNV Nails™ All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
