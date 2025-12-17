import Image from "next/image";
import { useState } from "react";

const Step = [{
    title: "Bước 1: Chọn bác sĩ chuyên khoa",
    image: "/step/TeleBookingFlow1.webp"
}, {
    title: "Bước 2: Gọi ngay hoặc Đặt lịch tư vấn",
    image: "/step/TeleBookingFlow2.webp"
}, {
    title: "Bước 3: Tư vấn với bác sĩ qua video/ audio",
    image: "/step/TeleBookingFlow3.webp"
}, {
    title: "Bước 4: Nhận kết quả tư vấn",
    image: "/step/TeleBookingFlow4.webp"
}]
const Guied = () => {
    const [stepCurrent, setStepCurrent] = useState(0);
    return (
        <div className="container mx-auto mt-28 my-9">
            <h2 className="text-center text-4xl font-bold mb-5">Thao tác đơn giản với 4 bước</h2>
            <div className="w-full flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-1/2">
                    <Image className="w-full px-5 h-auto" src={Step[stepCurrent].image} alt={Step[stepCurrent].title} width={500} height={500}></Image>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {Step && Step.map((item, index) => {
                        return (
                            <div onClick={()=>{setStepCurrent(index)}} key={`step - ${index}`} className={` cursor-pointer w-full hover:text-blue-500 border-l-4 hover:border-l-blue-500 border-l-blue-500/0 px-6 ${stepCurrent === index && "text-blue-500 border-l-2 border-l-blue-500"}`}>
                                <p className="text-1.5xl font-bold py-2 my-2">{item.title}</p>
                            </div>
                        )
                    })
                    }

                </div>


            </div>
        </div>
    )
}

export default Guied;