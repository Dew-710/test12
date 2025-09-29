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
    <div className="min-h-screen min-w-screen bg-gray-100 py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl min-h-screen w-full h-full mx-auto bg-white p-8 rounded-lg shadow-lg items-center justify-center flex flex-col">
        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold text-blue-700">
            <Link to="/" className="hover:underline">
              DEW Food <span className="ml-2 text-2xl text-blue-500">🍽️</span>
            </Link>
          </h1>
          <p className="mt-10px text-gray-600 text-lg font-medium ">
            Đặt bàn nhà hàng trực tuyến
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Họ tên */}
          <div>
            <label htmlFor="customerName" className="block text-base font-medium text-gray-700 mb-1">
              Họ và tên khách hàng:
            </label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            {formErrors.customerName && (
              <p className="text-red-500 text-xs mt-1">{formErrors.customerName}</p>
            )}
          </div>

          {/* Số điện thoại */}
          <div>
            <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700 mb-1">
              Số điện thoại khách hàng:
            </label>
            <input
              id="phoneNumber"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            {formErrors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{formErrors.phoneNumber}</p>
            )}
          </div>

          {/* Giới tính */}
          <div>
            <label htmlFor="gender" className="block text-base font-medium text-gray-700 mb-1">
              Giới tính khách hàng:
            </label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            >
              <option value="default">Chọn</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
              <option value="private">Không muốn tiết lộ</option>
            </select>
            {formErrors.gender && (
              <p className="text-red-500 text-xs mt-1">{formErrors.gender}</p>
            )}
          </div>

          {/* Thời gian */}
          <div>
            <label htmlFor="appointmentTime" className="block text-base font-medium text-gray-700 mb-1">
              Thời gian đặt bàn mong muốn:
            </label>
            <input
              id="appointmentTime"
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            {formErrors.appointmentTime && (
              <p className="text-red-500 text-xs mt-1">{formErrors.appointmentTime}</p>
            )}
          </div>

          {/* Hình thức đặt bàn */}
          <div>
            <label htmlFor="preferredMode" className="block text-base font-medium text-gray-700 mb-1">
              Hình thức đặt bàn:
            </label>
            <select
              id="preferredMode"
              value={preferredMode}
              onChange={(e) => setPreferredMode(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            >
              <option value="default">Chọn</option>
              <option value="voice">Gọi điện thoại</option>
              <option value="online">Đặt trực tuyến</option>
            </select>
            {formErrors.preferredMode && (
              <p className="text-red-500 text-xs mt-1">{formErrors.preferredMode}</p>
            )}
          </div>

          {/* Nút gửi */}
          <button
            type="submit"
            disabled={isSubmitted}
            className={`w-full py-3 px-4 font-semibold rounded transition text-lg ${
              isSubmitted
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isSubmitted ? "Đang xử lý..." : "Xác nhận đặt bàn"}
          </button>

          {/* Thông báo */}
          {isSubmitted && (
            <p className="text-green-600 text-base mt-4 text-center">
              Thông tin đặt bàn đã được gửi đến số điện thoại của khách hàng qua SMS.
            </p>
          )}
        </form>

        {/* Footer */}
        <div className="text-center text-gray-500 text-xs mt-12">
          <p>© 1999-2026 DEW Food. Đã đăng ký bản quyền.</p>
        </div>

        <ToastContainer autoClose={5000} limit={1} closeButton={false} />
      </div>
    </div>
  );
}

export default AppointmentForm;
