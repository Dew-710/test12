import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="bg-white p-8 flex flex-col lg:flex-row justify-center items-center gap-6">
      {/* Image */}
      <div className="w-full lg:w-1/2 text-center mb-8 lg:mb-0">
        <img
          src={Doctor}
          alt="Doctor Group"
          className="w-4/5 h-auto mx-auto"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 sm:text-left text-center flex flex-col justify-center items-center lg:items-start sm:text-center flex-col justify-center items-center">
        <h3 className="text-[40px] font-bold tracking-wide font-poppins relative inline-block mb-8">
          <span className="relative inline-block text-black">
            Ẩm thực Việt Nam
            <span className="absolute w-3/4 h-1 bg-[#9D2553] rounded-lg left-0 -bottom-3"></span>
          </span>
          <br /><br />
        </h3>

        <p className="text-[#4d4b4b] my-8 text-[18px] leading-7 tracking-wide font-rubik sm:py-2">
          Ẩm thực Việt Nam nổi tiếng với sự đa dạng, tươi ngon và cân bằng giữa
          các hương vị. Những món ăn như phở, bún chả, bánh mì, gỏi cuốn và nem
          rán không chỉ hấp dẫn mà còn phản ánh văn hóa đặc sắc của người Việt.
          Mỗi vùng miền đều có những đặc sản riêng, mang lại trải nghiệm ẩm thực
          phong phú cho thực khách.
        </p>
        <br />

        {/* Feature List */}
        <div className="space-y-7 mt-10 mb-10 text-[22px] font-bold font-rubik tracking-wide text-[#4d4b4b] gap-4">
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[#1E8FFD]" />
            Nguyên liệu tươi ngon
          </p>
          <br />
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[#1E8FFD]" />
            Hương vị đặc trưng
          </p>
          <br />
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[#1E8FFD]" />
            Đa dạng món ăn
          </p>
          <br />
          <p className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleCheck} className="text-[#1E8FFD]" />
            Phù hợp mọi khẩu vị
          </p>
        </div>

        {/* Button */}
       <button
      type="button"
      onClick={handleBookAppointmentClick}
      className="px-6 py-4 bg-blue-500 text-white rounded-full text-[20px] font-rubik tracking-wide border border-transparent hover:bg-white hover:text-blue-500 hover:border-blue-500 transition duration-400 flex items-center"
    >
      <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
      Đặt lịch khám
    </button>
      </div>
    </div>
  );
}

export default BookAppointment;
