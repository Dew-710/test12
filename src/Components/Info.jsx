import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical,faWebAwesome } from "@fortawesome/free-solid-svg-icons";
// ...removed custom CSS, will use Tailwind classes below

function Info() {
  return (
    <div id="services" className="px-4 text-center bg-white min-h-[300px]">
      <div className="my-16">
        <h3 className="font-bold text-[2vw] font-poppins mb-8 text-black relative inline-block">
          <span className="relative pb-2 text-black">
            Ẩm Thực Việt Nam
            <hr className="absolute left-0 -bottom-2 w-full h-1 bg-pink-500 rounded border-0" />
          </span>
        </h3>
        <p className="my-12 text-gray-500 font-rubik text-[1.2vw] tracking-wide leading-8">
          Ẩm thực Việt Nam nổi tiếng với nguyên liệu tươi ngon, hương vị đậm đà và sự cân bằng dinh dưỡng. Các món phổ biến gồm phở, bánh mì và gỏi cuốn. Bữa ăn thường có nhiều rau thơm, cơm, rau củ và nước dùng đậm đà, giúp món ăn Việt vừa ngon miệng vừa bổ dưỡng.
        </p>
        <div className="flex flex-col gap-12 items-center text-gray-500">
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
        </div>
      </div>
    </div>
  );
}

export default Info;
