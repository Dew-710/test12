import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
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
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Trải Nghiệm Ăn Uống Của Bạn Là Ưu Tiên Hàng Đầu</p>
          <h2 className="text-title">
            Khám Phá Bữa Ăn Hoàn Hảo Và Đặt Bàn Ngay
          </h2>
          <p className="text-descritpion">
            Thưởng thức những món ăn tinh tế được chế biến bởi các đầu bếp chuyên nghiệp. Đặt bàn dễ dàng, trải nghiệm cá nhân hóa và tận hưởng những món ăn ngon nhất, tất cả chỉ với một cú nhấp chuột.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Đặt Bàn Ngay
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p> Thực Khách Hài Lòng</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Món Ăn Thượng Hạng</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Năm Kinh Nghiệm Ẩm Thực</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Bác sĩ" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
