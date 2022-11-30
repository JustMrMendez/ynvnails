import Instagram from "./InstagramSVG";

function Footer() {
  return (
    <div className="text-whblackite w-full justify-center rounded-3xl bg-teal-400 text-center shadow-lg">
      <h1 className="text-2xl font-bold">
        Subscribe to Our Nestletter for Upcoming Deals
      </h1>
      <div className="m-2">
        <input
          placeholder="Email Address"
          type="text"
          className="rounded-3xl text-center text-black"
        />
      </div>
      <div className="ml-4 px-4 text-center">
        <h3 className="text-1xl text-black">YNV Nails</h3>
        <Instagram />
      </div>
    </div>
  );
}

export default Footer;
