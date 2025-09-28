import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Ẩm Thực Việt Nam</span>
        </h3>
        <p className="info-description">
          Ẩm thực Việt Nam nổi tiếng với nguyên liệu tươi ngon, hương vị đậm đà và sự cân bằng dinh dưỡng. Các món phổ biến gồm phở, bánh mì và gỏi cuốn. Bữa ăn thường có nhiều rau thơm, cơm, rau củ và nước dùng đậm đà, giúp món ăn Việt vừa ngon miệng vừa bổ dưỡng.
        </p>
      </div>
    </div>
  );
}

export default Info;
