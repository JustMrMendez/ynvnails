interface ButtonProps {
  label: string;
}

function Button({ label }: ButtonProps) {
  {
    return (
      <button className="rounded-3xl bg-pink-600 py-3 px-8 font-bold text-white">
        {label}
      </button>
    );
  }
}

export default Button;
