import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Chef <span className="legal-siteSign">Food</span> Vietnam
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Thông Tin Chung</p>
        <p className="legal-description">
          Chào mừng bạn đến với Chef Food Vietnam, nền tảng đáng tin cậy cho trải nghiệm ẩm thực Việt Nam. Sứ mệnh của chúng tôi là kết nối những người yêu ẩm thực với các đầu bếp và công thức Việt Nam chính thống. Khi sử dụng nền tảng, bạn đồng ý với các điều khoản trong Chính Sách Bảo Mật và Điều Khoản Dịch Vụ.
        </p>

        <p className="legal-title">Chính Sách Bảo Mật</p>
        <p className="legal-description">
          Chúng tôi coi trọng quyền riêng tư của bạn. Chính Sách Bảo Mật giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Chúng tôi đảm bảo xử lý dữ liệu an toàn và bảo mật thông tin của bạn.
        </p>

        <p className="legal-title">Điều Khoản Dịch Vụ</p>
        <p className="legal-description">
          Khi sử dụng Chef Food Vietnam, bạn đồng ý với Điều Khoản Dịch Vụ của chúng tôi. Bao gồm các hướng dẫn khi tương tác với đầu bếp, đặt trải nghiệm ẩm thực và trách nhiệm của các bên. Vui lòng đọc kỹ để có trải nghiệm tốt nhất.
        </p>

        <p className="legal-title">Trải Nghiệm Ẩm Thực</p>
        <p className="legal-description">
          Nền tảng kết nối bạn với các đầu bếp Việt Nam chuyên nghiệp cho lớp học nấu ăn, tiệc riêng và tour ẩm thực. Những trải nghiệm này nhằm giới thiệu hương vị và truyền thống phong phú của ẩm thực Việt Nam. Vui lòng cung cấp thông tin chính xác khi đặt dịch vụ.
        </p>

        <p className="legal-title">Cách Hoạt Động</p>
        <p className="legal-description">
          Chef Food Vietnam giúp bạn dễ dàng khám phá và đặt trải nghiệm ẩm thực. Duyệt đầu bếp, chọn trải nghiệm yêu thích và thưởng thức món ăn Việt Nam chính thống. Nếu có yêu cầu đặc biệt hoặc chế độ ăn riêng, hãy liên hệ trực tiếp với đầu bếp.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Chef Food Vietnam. Đã đăng ký bản quyền.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
