interface ButtonProps {
  label: string;
  color?: string;
  labelColor: string;
}

function Button({ label, color, labelColor }: ButtonProps) {
  {
    return (
      <button
        className={`rounded-3xl py-3 px-8 font-bold text-${labelColor} bg-${color}`}
      >
        {label}
      </button>
    );
  }
}

export default Button;
