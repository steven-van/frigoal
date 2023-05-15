export const ActionButton = (props) => {
  console.log(props.color);
  return (
    <div>
      <button
        className={`grid place-items-center bg-[${props.color}] w-20 rounded-md text-center`}
      >
        {props.title}
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
