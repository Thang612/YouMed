'use client'
import Image from "next/image";
import { useState } from "react";
import Guied from "./Component/Guied";

const heroSectionImg = ["/herosection/doctor (1).webp", "/herosection/doctor (2).webp", "/herosection/doctor (3).webp"]
const mainTele = "/herosection/main-tele.svg"
const icon = [{
  title: "Tổng quát",
  image: "/icon/polyclinic.svg"
}, {
  title: "Nhi khoa",
  image: "/icon/pediatrics.svg"
}, {
  title: "Sản phụ khoa",
  image: "/icon/obstetrics.svg"
}, {
  title: "Tâm lý",
  image: "/icon/psychiatric.svg"
}, {
  title: "Da liễu",
  image: "/icon/dermatology.svg"
}, {
  title: "Răng - Hàm - Mặt",
  image: "/icon/dental.svg"
}, {
  title: "Tai - Mũi - Họng",
  image: "/icon/otorhinolaryngology.svg"
}, {
  title: "Thần kinh",
  image: "/icon/neurology.svg"
}, {
  title: "Hô hấp",
  image: "/icon/breath.svg"
}, {
  title: "Tiêu hóa",
  image: "/icon/gastroenterology.svg"
}]
export default function Home() {
  const [isReadMore, setIsReadMore] = useState(true)


  return (
    <>
      <div className="hero__section w-full bg-linear-to-r from-blue-300 to-blue-600">
        <div className="container flex-col md:flex-row mx-auto text-white flex justify-between items-center gap-4 ">
          <div className="flex flex-col gap-4 py-16">
            <h1 className="text-4xl font-bold">Tư vấn sức khoẻ online - Chọn YouMed ngay!</h1>
            <p className="font-medium">Chủ động video call với các bác sĩ mọi lúc, mọi nơi. </p>
            <div>
              <button className="max-w-full overflow-hidden inline-flex backdrop-blur-2xl items-center px-3 py-2   rounded-full bg-linear-to-r from-blue-200 to-blue-300">
                <div className="flex justify-center flex-nowrap ">

                  {/* 1. Bọc Image đầu tiên */}
                  <div className="shrink-0 rounded-full border-2 border-white w-7 h-7 overflow-hidden">
                    <Image
                      className="object-cover  "
                      width={30}
                      height={30}
                      src={heroSectionImg[0]}
                      alt="Bac-si-1"
                    />
                  </div>

                  {/* 2. Bọc Image thứ hai và áp dụng dịch chuyển (overlap) */}
                  <div className="shrink-0 rounded-full border-2 border-white -translate-x-2 w-7 h-7 overflow-hidden">
                    <Image
                      className="object-cover "
                      width={30}
                      height={30}
                      src={heroSectionImg[1]}
                      alt="Bac-si-2"
                    />
                  </div>

                  {/* 3. Bọc Image thứ ba và áp dụng dịch chuyển (overlap) */}
                  <div className="shrink-0 rounded-full border-2 border-white -translate-x-4 w-7 h-7 overflow-hidden">
                    <Image
                      className="object-cover "
                      width={30}
                      height={30}
                      src={heroSectionImg[2]}
                      alt="Bac-si-3"
                    />
                  </div>

                </div>
                <div className="mr-2 w-1.5 h-1.5 rounded-full bg-green-400 herosection__dot flex justify-center items-center"><div className="w-1.5 h-1.5 herosection__dot-effect bg-green-400/20"></div></div>
                <span className="whitespace-nowrap">200+ Bác sĩ của YouMed sẵn sàng giúp đỡ bạn</span>
              </button>
            </div>

          </div>
          <div>
            <Image
              // Thay đổi width/height thành số nguyên (bắt buộc cho Next/Image)
              width={800}
              height={600}
              // Thêm w-full để nó chiếm 100% chiều rộng của container
              className="w-full h-auto"
              src={mainTele}
              alt="Mô tả hình ảnh"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-16 ">
        <h2 className="text-3xl text-center font-bold">Hơn 20 chuyên khoa tư vấn</h2>
        <p className="text-center mt-2">Kết nối với các bác sĩ đầu ngành trong các chuyên khoa dễ dàng và tiện lợi</p>
        <div className={`overflow-hidden duration-500  ${isReadMore ? "max-h-35" : "max-h-screen"} w-full flex justify-between gap- flex-wrap items-center`}>

          {icon && icon.map((item, index) => {
            return (
              <div key={`icon-${index}`} className="icon w-1/3 md:w-1/5 flex flex-col items-center justify-center mt-8">
                <div className="w-20 h-20  relative">
                  <Image className="z-30 absolute top-0 w-full h-full" src={item.image} alt={item.title} width={100} height={100} />
                  <div className="z-10 rounded-full w-full h-full  bg-gray-300/50"></div>
                </div>
                <p className="text-center  mt-2">{item.title}</p>
              </div>
            )
          })}
        </div>
        <div className="w-full flex justify-center mt-5"> <button onClick={()=>{setIsReadMore(!isReadMore)}} className="mx-auto inline-flex items-center gap-3 text-blue-500"><i className={`${isReadMore && 'rotate-180'}   text-2xl duration-500 fa-solid fa-circle-arrow-up`}></i>Xem thêm</button> </div>
      </div>

      <Guied />
    </>
  );
}
