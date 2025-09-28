import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Ẩm thực Việt Nam</span>
        </h3>
        <p className="ba-description">
          Ẩm thực Việt Nam nổi tiếng với sự đa dạng, tươi ngon và cân bằng giữa các hương vị. Những món ăn như phở, bún chả, bánh mì, gỏi cuốn và nem rán không chỉ hấp dẫn mà còn phản ánh văn hóa đặc sắc của người Việt. Mỗi vùng miền đều có những đặc sản riêng, mang lại trải nghiệm ẩm thực phong phú cho thực khách.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Nguyên liệu tươi ngon
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Hương vị đặc trưng
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Đa dạng món ăn
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> Phù hợp mọi khẩu vị
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Đặt lịch khám
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
