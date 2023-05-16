export const ActionButton = ({ color, title }) => {
  return (
    <div>
      <button
        className={`grid place-items-center bg-[${color}] w-20 h-10 text-white rounded-md text-center`}
      >
        {title}
      </button>
    </div>
  );
};

export const CancelButton = () => (
  <div>
    <button
      className={`bg-white w-20 rounded-md text-center grid place-items-center border-[#E5E7E9]-500 border-2`}
    >
      Clear All
    </button>
  </div>
);
