import React from "react";
import ChefCards from "./Chefcards";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";

const chefs = [
  {
    id: 1,
    img: profile1,
    name: "Chef Nguyen Van An",
    title: "Pho Specialist",
    stars: "4.9",
    reviews: "1800",
  },
  {
    id: 2,
    img: profile2,
    name: "Chef Tran Thi Hoa",
    title: "Banh Mi Artisan",
    stars: "4.8",
    reviews: "700",
  },
  {
    id: 3,
    img: profile3,
    name: "Chef Le Quang Minh",
    title: "Spring Roll Expert",
    stars: "4.7",
    reviews: "450",
  },
  {
    id: 4,
    img: profile4,
    name: "Chef Pham Thi Lan",
    title: "Hue Cuisine Master",
    stars: "4.8",
    reviews: "500",
  },
];

function Doctors() {
  return (
    <div className="p-[32px] text-center bg-white mr-4 " id="chefs">
      <div className="mb-16">
        <h3 className="font-poppins text-[40px] font-bold text-black relative inline-block mb-8">
          <br />
          <span>Meet Our Vietnamese Chefs</span>
        </h3>

        <p className="m-[64px] text-center text-red-500 font-rubik text-[18px] leading-7 tracking-wide">
          Discover our talented Vietnamese chefs, masters of authentic cuisine. Experience the rich flavors and culinary traditions of Vietnam through their expertly crafted dishes.
        </p>
        <br />
      </div>

      <ChefCards chefs={chefs} />
      <br />
    </div>
  );
}

export default Doctors;
