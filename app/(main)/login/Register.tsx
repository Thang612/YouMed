import { useState } from "react"
import { createUser } from "../../Service/auth.service"
import { useRouter } from "next/navigation"
import Spinner from "../../Component/Spinner"
import { toast } from "sonner"

const Register = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleRegister = async () => {
        if (!email || !password || !confirmPassword) {
            setError('Vui lòng nhập đầy đủ các trường!!!')
            return
        }
        if (!email.includes('@')) {
            setError('Email không đúng định dạng!!!')
            return
        }

        if (password !== confirmPassword) {
            setError('Kiểm tra lại mật khẩu!!!')
            return
        }

        setError('')
        try {
            setIsLoading(true);
            const res = await createUser({ email, password });
            if (res) {
                toast.success("Đăng ký thông tin thành công!!!")
                router.push('/')
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
                <label className="block" htmlFor="pass_login">Mật khẩu:</label>
                <input value={password} onChange={(e) => { setPassword(e.target.value) }} className=" w-full rounded-xl  px-4 py-2 border focus:outline-0" type="password" name="pass" id="pass_login" />
            </div>
            <div>
                <label className="block" htmlFor="confirmpass_login">Lặp lại mật khẩu:</label>
                <input value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} className=" w-full rounded-xl  px-4 py-2 border focus:outline-0" type="password" name="confirmpass" id="confirmpass_login" />
            </div>
            <div>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            <button
                type="button"
                disabled={isLoading ||!email ||!password ||!confirmPassword}
                onClick={handleRegister}
                className={`flex items-center justify-center gap-2
    py-2 rounded-full text-white
    transition
    ${isLoading || !email || !password || !confirmPassword ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:shadow-xl'} `}
            >
                {isLoading && <Spinner />}
                <span>{isLoading ? 'Đang xử lý...' : 'Đăng nhập'}</span>
            </button>


        </div>
    </>)
}

export default Register;