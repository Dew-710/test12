import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ChefCards({ chefs }) {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-8">
      {chefs.map((chef, index) => (
        <article
          className="w-[332px] h-[400px] gap-8 text-left font-rubik"
          key={chef.id ?? index}
        >
          <div
            className="w-full h-[275px] p-4 pt-0 bg-[#DDE5F8] bg-center bg-cover rounded-[20px]"
            style={{ backgroundImage: `url(${chef.img})` }}
            role="img"
            aria-label={chef.name}
          />
          <p className="mt-3 text-[22px] font-bold tracking-[0.7px] text-black">
            {chef.name}
          </p>
          <p className="mt-1 mb-2 text-[#494949] font-poppins text-[18px] tracking-[0.7px]">
            {chef.title}
          </p>
          <p className="text-[18px] font-bold tracking-[0.7px]">
            <FontAwesomeIcon icon={faStar} className="text-black mr-1" />
            {chef.stars}
            <span className="text-[#5a5a5a] text-[18px] font-bold tracking-[0.7px]">
              {" "}
              ({chef.reviews}+ Reviews)
            </span>
          </p>
        </article>
      ))}
    </div>
  );
}

export default ChefCards;
export { ChefCards };