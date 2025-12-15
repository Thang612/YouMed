import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (<>
        <div className="flex flex-col gap-4 w-80">
            <div>
                <label className="block" htmlFor="email_login">Email:</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="w-full rounded-xl  px-4 py-2 border focus:outline-0" type="email" name="email" id="email_login" />
            </div>
            <div>
                <label className="block" htmlFor="email_login">Mật khẩu:</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className=" w-full rounded-xl  px-4 py-2 border focus:outline-0" type="password" name="email" id="email_login" />
            </div>
            <div className="text-center bg-blue-500 text-white py-2 rounded-full cursor-pointer hover:shadow-xl"> Đăng nhập</div>
        </div>
    </>)
}

export default Login;