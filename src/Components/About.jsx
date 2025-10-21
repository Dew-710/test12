import React from "react";
import Doctor from "../Assets/banh-mi-sandwich.jpg";
import SolutionStep from "./SolutionStep";


function About() {
  return ( 
    <div className=" p-[32px] flex justify-center items-center gap-[24px] bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] flex-col md:flex-row" id="about">
    
      <div className="hidden md:block md:w-1/2 text-center max-w-full">
        <img src={Doctor} alt="Nhóm bác sĩ" className="w-4/5 h-auto rounded-[10px]" />
      </div>

      <div className="w-full md:w-1/2">
      <br /><br />
        <h3 className="font-poppins text-[40px] font-bold text-black relative inline-block md:items-start text-center md:text-left">
          <span>Về Ẩm Thực Việt Nam
            <hr className="absolute left-0 -bottom-2 w-full h-1 bg-pink-500 rounded border-0" /> 
          </span>
        </h3>
        <br /><br />
        <p className="m-[32px] text-[#4d4b4b] font-rubik text-[18px] leading-7 tracking-wide">
          Ẩm thực Việt Nam nổi tiếng với nguyên liệu tươi ngon, hương vị đậm đà và cân bằng dinh dưỡng. Các món như Phở, Bánh Mì, và gỏi cuốn thể hiện sự hài hòa giữa rau thơm, rau củ và nước dùng đậm vị. Bữa ăn thường nhẹ nhàng nhưng vẫn đủ chất, chú trọng vào cơm, bún, cùng nhiều loại thịt và hải sản, kết hợp với gia vị thơm và nước chấm đặc trưng.
        </p>

        <h4 className="m-[32px] text-[#4d4b4b] font-poppins text-[24px] font-bold gap-8 p-4 " >Các Món Ăn Việt Nam Phổ Biến</h4>

        <SolutionStep 
          title="Phở"
          description="Món súp mì với thịt bò hoặc gà, rau thơm tươi và bánh phở, được yêu thích trên khắp Việt Nam."
        />
        <br />

        <SolutionStep
          title="Bánh Mì"
          description="Bánh mì giòn với nhân thịt, rau củ ngâm và rau thơm, kết hợp hương vị Pháp và Việt."
        /> <br />

        <SolutionStep
          title="Gỏi Cuốn"
          description="Cuốn bánh tráng tươi với tôm, thịt heo, bún và rau thơm, ăn kèm nước chấm đậm đà."
        />
<br /><br />      </div>
    </div>
  );
}

export default About;
