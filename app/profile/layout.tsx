'use client'
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import Spinner from "../Component/Spinner";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    const { user, loading } = useAuth();
    if(loading){
        return <Spinner/>
    }

    if (!user) {
        return (
            <>
                <div className="container mx-auto text-center my-10  "> 
                    <p className="mb-4"><i className="text-8xl text-orange-400 text-shadow-2xs fa-solid fa-triangle-exclamation"></i></p>
                       <h2> Bạn không có quyền truy cập vào trang này </h2>
                    <Link href="/login" className="text-blue-500 underline">Chuyển đến đăng nhập</Link>
                </div>
                
            </>
        )
    }

    return (
        <>
            <div className="container mx-auto my-6 flex gap-6">

                {/* SIDEBAR */}
                <div className="w-1/4">
                    <div className="sticky top-24 flex flex-col gap-2">
                        <div className="text-center bg-white py-3 rounded-full hover:shadow-2xl hover:text-blue-500">
                            <i className="fa-solid fa-circle-info"></i> Thông tin của bạn
                        </div>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="w-3/4">
                    {children}
                </div>  
            </div>

        </>
    );
}