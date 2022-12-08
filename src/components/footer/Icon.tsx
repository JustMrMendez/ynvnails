interface IconProps {
  d?: string;
  viewbox?: string;
  href?: string;
}

function Icon({ d, viewbox, href }: IconProps) {
  return (
    <a href={href}>
      <svg
        viewBox={viewbox}
        className="inline-flex h-10 w-10 overflow-visible rounded-full bg-pink-300 p-[8px] shadow-md shadow-pink-300 transition-all hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100 "
      >
        <path fill="currentColor" d={d} />
      </svg>
    </a>
  );
}

export default Icon;
