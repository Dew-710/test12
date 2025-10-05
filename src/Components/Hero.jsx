import React, { useEffect, useState } from "react";
import Chef from "../Assets/gordon-ramsay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] relative py-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full md:max-w-4/5 mx-auto px-4 md:px-8">
        {/* Text Section */}
        <div className="sm:text-center sm:items-center flex flex-col w-full md:w-3/5 px-0 md:px-8 text-center md:text-left md:items-start"> "> 
        <div classname="w-full sm:p-8 p-4 bg-white rounded-lg shadow-lg mb-6 flex flex-col items-center">

          <p className="mb-3 text-[#4d4b4b] font-rubik text-[22px] font-bold tracking-wide">
            ❤️ Trải Nghiệm Ăn Uống Của Bạn Là Ưu Tiên Hàng Đầu
          </p>
          <h2 className="text-black text-4xl md:text-5xl font-poppins font-bold">
            Khám Phá Bữa Ăn Hoàn Hảo Và Đặt Bàn Ngay
          </h2>
          <p className="text-[#4d4b4b] font-rubik text-[18px] tracking-wide leading-7 mt-8 mb-8">
            Thưởng thức những món ăn tinh tế được chế biến bởi các đầu bếp chuyên nghiệp. Đặt bàn dễ dàng, trải nghiệm cá nhân hóa và tận hưởng những món ăn ngon nhất, tất cả chỉ với một cú nhấp chuột.
          </p>
          </div>
          <button
            className="sm:text-center py-[14px] px-5 text-white border border-transparent rounded-full outline-none bg-[#1A8EFD] text-[18px] font-rubik tracking-wide cursor-pointer transition-all duration-400 hover:text-[#1A8EFD] hover:bg-transparent hover:border-[#1A8EFD] flex items-center gap-2 "
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Đặt Bàn Ngay
          </button>
          <div className="mt-10 flex gap-12 items-center">
            <div className="text-center">
              <p className="mb-2 text-[#1A8EFD] font-rubik text-[32px] font-bold">145k+</p>
              <p className="text-[#4d4b4b] font-poppins text-[22px] tracking-wide">Thực Khách Hài Lòng</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-[#1A8EFD] font-rubik text-[32px] font-bold">50+</p>
              <p className="text-[#4d4b4b] font-poppins text-[22px] tracking-wide">Món Ăn Thượng Hạng</p>
            </div>
            <div className="text-center">
              <p className="mb-2 text-[#1A8EFD] font-rubik text-[32px] font-bold">10+</p>
              <p className="text-[#4d4b4b] font-poppins text-[22px] tracking-wide">Năm Kinh Nghiệm Ẩm Thực</p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-2/5 max-w-full text-center hidden md:block">
          <img
            className="w-full h-auto object-contain"
            src={Chef}
            alt="Đầu bếp"
          />
        </div>
      </div>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-[45px] h-[45px] flex items-center justify-center text-white border-4 border-white rounded-full bg-[#1A8EFD] fixed bottom-12 right-12 text-2xl z-20 cursor-pointer transition-opacity duration-300 ${
          goUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  );
}

export default Hero;
