import { useState } from "react";
import { loginUser } from "../../Service/auth.service";
import { useRouter } from "next/navigation";
import Spinner from "../../Component/Spinner";
import Link from "next/link";
import { toast } from "sonner";

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Vui lòng nhập đầy đủ các trường!!!')
            return
        }

        try {
            setIsLoading(true);
            const res = await loginUser({ email, password });
            if (res) {
                router.back();
                toast.success("Đăng nhập thành công!!!")
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            } else {
                setError('Đã xảy ra lỗi không xác định')
            }
        }
        finally {
            setIsLoading(false);
        }
    }

    return (<>
        <div className="flex flex-col gap-4 w-80">
            <div>
                <label className="block" htmlFor="email_login">Email:</label>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="w-full rounded-xl  px-4 py-2 border focus:outline-0" type="email" name="email" id="email_login" />
            </div>
            <div>
                <label className="block" htmlFor="email_login">Mật khẩu:</label>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className=" w-full rounded-xl  px-4 py-2 border focus:outline-0" type="password" name="email" id="email_login" />
            </div>
            <div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading || !email || !password}
                className={`flex items-center justify-center gap-2
    py-2 rounded-full text-white transition
    ${isLoading || !email || !password
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-500 hover:shadow-xl'
                    }
  `}
            >{isLoading && <Spinner />}<span>{isLoading ? 'Đang xử lý...' : 'Đăng nhập'}</span></button>
        <Link href="/doctor/login" className="text-blue-500 underline">Bạn là bác sĩ</Link>
        </div>
    </>)
}

export default Login;