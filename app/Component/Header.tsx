import Image from "next/image"
import Link from "next/link";

// Giả định logo YouMed được đặt trong thư mục public và được import (hoặc chỉ định đường dẫn)
// Nếu bạn đặt file logo.png trong public/images/, bạn có thể dùng đường dẫn '/images/youmed-logo.png'
const YOUMED_LOGO_PATH = "/logo.svg"; // THAY ĐỔI ĐƯỜNG DẪN NÀY

const Header = () => {
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            {/* Container giới hạn độ rộng, padding hai bên */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                
                {/* 1. Khu vực Logo (Trái) */}
                <div >
                    <Link href="/" className="cursor-pointer">
                        <Image 
                            src={YOUMED_LOGO_PATH} // Dùng đường dẫn giả định
                            alt="YouMed Logo"
                            width={120} // Điều chỉnh kích thước phù hợp với logo YouMed
                            height={40} // Điều chỉnh chiều cao tự động/cố định
                            // Bạn có thể thêm className để làm tròn góc nếu logo là một khối màu
                            // className="rounded-lg" 
                        />
                    </Link>
                </div>

                {/* 2. Khu vực Navigation (Giữa) - Ẩn trên Mobile */}
                <nav className="hidden lg:flex space-x-8">
                    <a href="/service" className="text-gray-600 hover:text-blue-500 font-medium transition duration-150">Dịch vụ</a>
                    <a href="/doctors" className="text-gray-600 hover:text-blue-500 font-medium transition duration-150">Bác sĩ</a>
                    <a href="/hospitals" className="text-gray-600 hover:text-blue-500 font-medium transition duration-150">Bệnh viện</a>
                    {/* Thêm các mục menu khác tại đây */}
                </nav>

                {/* 3. Khu vực Hành động (Phải) */}
                <div className="flex items-center space-x-4">
                    <a href="/login" className="text-gray-600 hover:text-blue-500 font-medium transition duration-150">
                        Đăng nhập
                    </a>
                    
                    {/* Nút Đăng ký/Tư vấn nổi bật */}
                    <a 
                        href="/register" 
                        className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition duration-150"
                    >
                        Tư vấn Trực tuyến
                    </a>
                    
                    {/* Thêm nút Menu cho Mobile (sử dụng icon hamburger) */}
                    <button className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
                        {/* Biểu tượng Menu (Hamburger Icon) */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>

            </div>
        </header>
    )
}

export default Header;