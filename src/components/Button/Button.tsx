interface ButtonProps {
  label: string;
  color?: string;
  labelColor: string;
  type?: "submit" | "reset";
}

function Button({ label, color, labelColor, type }: ButtonProps) {
  {
    return (
      <button
        type={type || "button"}
        className={`rounded-3xl py-3 px-8 font-bold hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100 text-${labelColor} bg-${color}`}
      >
        {label}
      </button>
    );
  }
}

export default Button;

// transition-all hover:scale-110 hover:bg-pink-100 hover:text-pink-600 hover:shadow-lg hover:shadow-pink-100
