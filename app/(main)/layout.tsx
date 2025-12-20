import type { Metadata } from "next";
import "../globals.css";
import GoToTop from "../Component/GoToTop";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export const metadata: Metadata = {
    title: "You Med",
    description: "Kết nối bạn với các bác sĩ hàng đầu thông qua gọi video và gọi thoại trên ứng dụng YouMed",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <GoToTop />
        </>



    );
}
