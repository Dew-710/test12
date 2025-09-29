import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical,faWebAwesome } from "@fortawesome/free-solid-svg-icons";


function Info() {
  return (
    <div id="services" className="px-4 text-center bg-white min-h-[300px] xl: pt-20 pb-20">
     <br />
     <br />
      <div className="my-24 pb-20 flex flex-col items-center"> 
        <h3 className="mt-20 font-bold font-poppins mb-12 text-black text-[40px] relative inline-block"> 
          <span className=" pb-2 text-black-800">
            Ẩm Thực Việt Nam
            <hr className="absolute left-0 -bottom-2 w-full h-1 bg-pink-500 rounded border-0" /> 
          </span>
        </h3><br /> <br />
        <p className="my-16 text-gray-500 font-rubik  tracking-wide leading-8 max-w-4xl absolute-center"> 
          Ẩm thực Việt Nam nổi tiếng với nguyên liệu tươi ngon, hương vị đậm đà và sự cân bằng dinh dưỡng. Các món phổ biến gồm phở, bánh mì và gỏi cuốn. Bữa ăn thường có nhiều rau thơm, cơm, rau củ và nước dùng đậm đà, giúp món ăn Việt vừa ngon miệng vừa bổ dưỡng.
        </p>
        <hr />
        <div className="flex flex-col gap-16 items-center text-gray-500">
          <InformationCard
            icon={faHeartPulse}
            title="Sức Khỏe"
            description="Chăm sóc sức khỏe với các món ăn bổ dưỡng."
          />
          <InformationCard
            icon={faTruckMedical}
            title="Giao Hàng"
            description="Dịch vụ giao hàng nhanh chóng và tiện lợi."
          />
          <InformationCard
            icon={faWebAwesome}
            title="Phục Vụ"
            description="Dịch vụ phục vụ tận tình và chu đáo."
          />
          <br /> 
        </div>
      </div>
    </div>
  );
}

export default Info;
