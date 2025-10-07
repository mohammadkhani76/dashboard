export const Button = ({ text, className = "", onClick, type = "button" }) => {
  return (
    <>
      <button
        className={className}
        onClick={onClick ? onClick : undefined}
        type={type}
      >
        {text}
      </button>
    </>
  );
};
