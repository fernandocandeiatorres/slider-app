import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Buttons = ({ addIndex, minusIndex, index }) => {
  return (
    <div>
      {" "}
      <button className="prev" onClick={() => minusIndex(index)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => addIndex(index)}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Buttons;
