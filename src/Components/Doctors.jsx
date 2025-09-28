import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="chef-section" id="chefs">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Vietnamese Chefs</span>
        </h3>

        <p className="dt-description">
          Discover our talented Vietnamese chefs, masters of authentic cuisine. Experience the rich flavors and culinary traditions of Vietnam through their expertly crafted dishes.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Chef Nguyen Van An"
          title="Pho Specialist"
          stars="4.9"
          reviews="1800"
        />
        <DoctorCard
          img={profile2}
          name="Chef Tran Thi Hoa"
          title="Banh Mi Artisan"
          stars="4.8"
          reviews="700"
        />
        <DoctorCard
          img={profile3}
          name="Chef Le Quang Minh"
          title="Spring Roll Expert"
          stars="4.7"
          reviews="450"
        />
        <DoctorCard
          img={profile4}
          name="Chef Pham Thi Lan"
          title="Hue Cuisine Master"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Doctors;
