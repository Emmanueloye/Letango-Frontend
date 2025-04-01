const Button = ({
  btnText,
  btnType,
  bg = 'green-600',
  color = 'text-white',
}: {
  btnText: string;
  btnType: 'submit' | 'button' | 'reset';
  bg?: string;
  color?: string;
}) => {
  return (
    <button
      type={btnType}
      className={`bg-${bg} hover:bg-green-400 px-3 py-2 rounded-md w-full capitalize ${color} font-600 mt-1`}
    >
      {btnText}
    </button>
  );
};

export default Button;
