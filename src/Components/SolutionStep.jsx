import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

function SolutionStep(props) {
  return (
    <div className="mb-8">
      <p className="text-[#4d4b4b] font-poppins text-xl font-bold mb-2 flex items-center gap-2">
        <span>
          <FontAwesomeIcon className="color-[#9D2553]" icon={faCircleChevronDown} />{" "}
          {props.title}
        </span>
      </p>
      <p className="text-black font-rubik text-[18px] leading-7 tracking-wide pl-6 m-xl">{props.description}</p>
    </div>
  );
}

export default SolutionStep;
