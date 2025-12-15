'use client'
import Image from "next/image";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const LOGIN = "/Login.png" 
const LoginPage = ()=>{
    const [isLogin, setIsLogin] = useState(true);
    return (<>
     <div className="container flex-col md:flex-row mx-auto flex justify-between items-center py-16 gap-4">
        <div className="w-full md:w-1/2">
            <Image className="w-10/12 mx-auto" src={LOGIN} alt="Login" width={1000} height={1000}></Image>
        </div>
        <div className="w-full md:w-1/2">
            <div className="w-10/12 mx-auto bg-white px-10 py-10 rounded-2xl shadow-xl">
                <div className="tab text-xl justify-between flex gap-4 mb-7 cursor-pointer">
                    <div onClick={()=>{setIsLogin(true)}} className={`${isLogin && "text-blue-500 underline underline-offset-8 "} w-1/2 tab__item text-center`}>Đăng nhập</div>
                    |
                    <div onClick={()=>{setIsLogin(false)}} className={`${!isLogin && "text-blue-500 underline underline-offset-8 "} w-1/2 tab__item text-center`}>Đăng ký</div>
                </div>
                <div className="w-full flex justify-center">
                    {isLogin ? <Login/> : <Register/>}
                    
                </div>
            </div>
        </div>
     </div>
    </>)
}

export default LoginPage;