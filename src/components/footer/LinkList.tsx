interface LinkProps {
  title?: string;
  href?: string;
  name?: string;
}

function LinkList({ title, href, name }: LinkProps) {
  return (
    <div className="justify-around text-center hover:scale-110">
      <h3 className="text-xl text-black ">{title}</h3>
      <a href={href}>
        <span className="text-md text-gray-600 hover:text-pink-600">
          {name}
        </span>
      </a>
    </div>
  );
}

export default LinkList;
