'use client'
import { SPECIALTY_MAP } from "@/app/Service/doctor.service"
import { useState } from "react"
import ModalCreateDoctor from "../Component/ModalCreateDoctor";

const Page = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (<>
        <div className="sticky top-0 w-full flex justify-between items-center rounded-2xl bg-white px-6 py-4 mb-4 shadow">
            <div><h1><span className="font-semibold">Quản lý Bác sĩ</span> | <span className="text-gray-400">Danh sách đội ngũ y bác sĩ hệ thống</span></h1></div>
            <div className="cursor-pointer flex gap-7 items-center" ><i className="fa-solid fa-bell"></i>|<button className="px-4 py-2 bg-blue-500 rounded-full text-white" onClick={()=>setIsOpenModal(true)}>+ Tạo bác sĩ</button></div>
        </div>

        <div className="flex mt-6 gap-3 items-center">
           <label htmlFor="specialty_select">Chuyên khoa: </label> 
           <select className="focus:outline-0 border px-2 py-1 rounded-2xl  bg-blue-500/10" name="specialty" id="specialty_select">
                <option value="all">Tất cả</option>
                {SPECIALTY_MAP.map((item, index)=>{
                    return (<option key={`option-${index}`} value={item.slug}>{item.label}</option>)
                })}
            </select>
                    |
            <label htmlFor="search">Tìm kiếm:</label>
            <input type="text" className="focus:outline-0 border rounded px-4 py-1"/>
        </div>
        {isOpenModal && <ModalCreateDoctor handleClose={()=>setIsOpenModal(false)}/>}
    </>)
}

export default Page