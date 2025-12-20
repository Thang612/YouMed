'use client'
import Image from "next/image"
import Link from "next/link";
import {  useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../Service/auth.service";

const YOUMED_LOGO_PATH = "/logo.svg"; 

const Header = () => {
    const {user} = useAuth()
    const route = useRouter();
    const [isOpenUser, setIsOpenUser] = useState(false);

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
                </nav>

                <div className="flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link href="/login">Đăng nhập</Link>
                        </>
                    ) : (
                        <>
                            <div onClick={()=>setIsOpenUser(!isOpenUser)} className="relative text-gray-600 gap-2 flex items-center cursor-pointer">
                                <i className="fa-solid fa-hospital-user"></i>
                                Xin chào 
                                {isOpenUser && <div className="p-1 cursor-pointer rounded absolute bottom-0 left-0 w-full translate-y-full bg-white flex flex-col">
                                    <div className="hover:bg-gray-200 px-4 py-2" onClick={()=>{route.push('/profile')}}>Profile</div>
                                    <hr className="text-gray-400" />
                                    <div className="hover:bg-gray-200 px-4 py-2" onClick={logoutUser}>Logout</div>
                                </div>}
                            </div>

                        </>
                    )}
                    <Link href="/register" className="px-4 py-2 rounded-md text-white bg-blue-500">
                        Tư vấn Trực tuyến
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;