import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Nhóm bác sĩ" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>Về Ẩm Thực Việt Nam</span>
        </h3>
        <p className="about-description">
          Ẩm thực Việt Nam nổi tiếng với nguyên liệu tươi ngon, hương vị đậm đà và cân bằng dinh dưỡng. Các món như Phở, Bánh Mì, và gỏi cuốn thể hiện sự hài hòa giữa rau thơm, rau củ và nước dùng đậm vị. Bữa ăn thường nhẹ nhàng nhưng vẫn đủ chất, chú trọng vào cơm, bún, cùng nhiều loại thịt và hải sản, kết hợp với gia vị thơm và nước chấm đặc trưng.
        </p>

        <h4 className="about-text-title">Các Món Ăn Việt Nam Phổ Biến</h4>

        <SolutionStep
          title="Phở"
          description="Món súp mì với thịt bò hoặc gà, rau thơm tươi và bánh phở, được yêu thích trên khắp Việt Nam."
        />

        <SolutionStep
          title="Bánh Mì"
          description="Bánh mì giòn với nhân thịt, rau củ ngâm và rau thơm, kết hợp hương vị Pháp và Việt."
        />

        <SolutionStep
          title="Gỏi Cuốn"
          description="Cuốn bánh tráng tươi với tôm, thịt heo, bún và rau thơm, ăn kèm nước chấm đậm đà."
        />
      </div>
    </div>
  );
}

export default About;
