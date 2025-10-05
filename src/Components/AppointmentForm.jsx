import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!customerName.trim()) {
      errors.customerName = "Vui lòng nhập họ tên khách hàng";
    } else if (customerName.trim().length < 8) {
      errors.customerName = "Họ tên phải có ít nhất 8 ký tự";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Vui lòng nhập số điện thoại";
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      errors.phoneNumber = "Số điện thoại phải gồm đúng 10 chữ số";
    }

    if (gender === "default") {
      errors.gender = "Vui lòng chọn giới tính";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Vui lòng chọn thời gian đặt bàn";
    } else {
      const selected = new Date(appointmentTime).getTime();
      const now = new Date().getTime();
      if (selected <= now) {
        errors.appointmentTime = "Thời gian phải là trong tương lai";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Vui lòng chọn hình thức đặt bàn";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form & hiển thị thông báo
    setCustomerName("");
    setPhoneNumber("");
    setGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});
    setIsSubmitted(true);

    toast.success("Đặt bàn thành công!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-screen bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF] py-12">
      <div className="items-center flex flex-col gap-6 p-8 bg-white rounded-lg shadow-lg w-full max-w-lg min-h-screen mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-blue-700 tracking-wide">
            <Link to="/" className="hover:underline">
              DEW Food <span role="img" aria-label="plate">🍽️</span>
            </Link>
          </h1>
          <p className="text-gray-500 font-rubik text-lg">
            Đặt bàn nhà hàng trực tuyến
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-full"
          autoComplete="off"
        >
          {/* Họ tên */}
          <div></div>
          <div>
            <label htmlFor="customerName" className="font-rubik text-gray-700 mb-1 block">
              Họ và tên khách hàng:
            </label>
            <input
              className={`w-full bg-blue-50 text-gray-900 font-rubik text-base p-3 rounded-lg border ${formErrors.customerName ? "border-red-400" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              id="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Nhập họ và tên (ít nhất 8 ký tự)"
            />
            {formErrors.customerName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.customerName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block font-rubik text-gray-700 mb-2" htmlFor="phoneNumber">
              Số điện thoại khách hàng:
            </label>
            <input
              className="w-full bg-blue-50 text-gray-900 font-rubik text-base p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {formErrors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phoneNumber}</p>
            )}
          </div>

          {/* Giới tính */}
          <div>
            <label className="font-rubik text-gray-700" htmlFor="gender">
              Giới tính khách hàng:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="default">Chọn</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="private">Không muốn tiết lộ</option>
            </select>
            {formErrors.gender && (
              <p>{formErrors.gender}</p>
            )}
          </div>

          {/* Thời gian */}
          <div>
            <label className="font-rubik text-gray-700"  htmlFor="appointmentTime">
              Thời gian đặt bàn mong muốn:
            </label>
            <input
              id="appointmentTime"
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
            {formErrors.appointmentTime && (
              <p>{formErrors.appointmentTime}</p>
            )}
          </div>

          {/* Hình thức đặt bàn */}
          <div>
            <label className="font-rubik text-gray-700"  htmlFor="preferredMode">
              Hình thức đặt bàn:
            </label>
            <select
              id="preferredMode"
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
            >
              <option value="default">Chọn</option>
              <option value="voice">Gọi điện thoại</option>
              <option value="online">Đặt trực tuyến</option>
            </select>
            {formErrors.preferredMode && (
              <p>{formErrors.preferredMode}</p>
            )}
          </div>

          {/* Nút gửi */}
          <button
            type="submit"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Đang xử lý..." : "Xác nhận đặt bàn"}
          </button>

          {/* Thông báo */}
          {isSubmitted && (
            <p>
              Thông tin đặt bàn đã được gửi đến số điện thoại của khách hàng qua SMS.
            </p>
          )}
        </form>

        {/* Footer */}
        <div>
          <p>© 1999-2026 DEW Food. Đã đăng ký bản quyền.</p>
        </div>

        <ToastContainer autoClose={5000} limit={1} closeButton={false} />
      </div>
      </div>
  
  );
}

export default AppointmentForm;
