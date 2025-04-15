const Button = ({
  btnText,
  btnType,
  bg = 'green-600',
  color = 'text-white',
  onTrigger,
}: {
  btnText: string;
  btnType: 'submit' | 'button' | 'reset';
  bg?: string;
  color?: string;
  onTrigger?: () => void;
}) => {
  return (
    <button
      onClick={() => onTrigger?.()}
      type={btnType}
      className={`bg-${bg} hover:bg-green-400 px-3 py-2 rounded-md w-full capitalize ${color} font-600 cursor-pointer`}
    >
      {btnText}
    </button>
  );
};

export default Button;
