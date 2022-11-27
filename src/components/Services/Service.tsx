interface ServiceProps {
  title?: string;
  href?: string;
}

function Service({
  title = "Service #1",
  href = "https://picsum.photos/id/55/240/240",
}: ServiceProps) {
  return (
    <>
      <div className="h-66 w-66 rotate-45 rounded-3xl border-none bg-pink-300 p-4 ">
        <div className="rotate-45 rounded-2xl">
          <img src={href} alt="" className="h-66 w-66 -rotate-90 rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default Service;
