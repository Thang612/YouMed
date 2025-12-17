import Image from "next/image";
import Link from "next/link";

const YOUMED_LOGO_PATH = "/logo.svg"; // THAY ĐỔI ĐƯỜNG DẪN NÀY

const Footer = () => {
    return (
        <div className=" w-full bg-white py-16">
            <div className="container mx-auto">
                <Link href="/" className="cursor-pointer">
                    <Image
                        src={YOUMED_LOGO_PATH}
                        alt="YouMed Logo"
                        width={120}
                        height={40}
                    />
                </Link>
                <p className="mt-3">Kết nối bạn với các bác sĩ hàng đầu thông qua gọi video và gọi thoại<br /> trên ứng dụng YouMed</p>
            </div>
        </div>
    )
}

export default Footer;