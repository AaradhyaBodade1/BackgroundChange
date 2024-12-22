function Buttons({ Colour, onClick }) {
  return (
    <button
      className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: Colour }}
      onClick={() => onClick(Colour)}
    >
      {Colour}
    </button>
  );
}

export default Buttons;
