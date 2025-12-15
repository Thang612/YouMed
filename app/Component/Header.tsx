'use client'
import Image from "next/image"
import Link from "next/link";
import { auth } from "../Service/firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";

// Giả định logo YouMed được đặt trong thư mục public và được import (hoặc chỉ định đường dẫn)
// Nếu bạn đặt file logo.png trong public/images/, bạn có thể dùng đường dẫn '/images/youmed-logo.png'
const YOUMED_LOGO_PATH = "/logo.svg"; // THAY ĐỔI ĐƯỜNG DẪN NÀY

const Header = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
        return () => unsub()
    }, [])

    if (loading) return null // hoặc skeleton
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

                <div className="flex items-center gap-4">
                    {!user ? (
                        <>
                            <Link href="/login">Đăng nhập</Link>

                        </>
                    ) : (
                        <>
                            <span className="text-gray-600">
                                Xin chào {user.email}
                            </span>

                        </>
                    )}
                    <Link
                        href="/register"
                        className="px-4 py-2 rounded-md text-white bg-blue-500"
                    >
                        Tư vấn Trực tuyến
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;