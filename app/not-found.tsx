'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-7xl font-bold text-blue-500">404</h1>

      <p className="mt-4 text-xl font-semibold text-gray-700">
        Trang không tồn tại
      </p>

      <p className="mt-2 text-gray-500 text-center max-w-md">
        Có thể đường dẫn bạn nhập không đúng hoặc trang đã bị xóa.
      </p>

      <div className="mt-6 flex gap-4">
        <Link
          href="/"
          className="px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Về trang chủ
        </Link>

        <Link
          href="/login"
          className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
        >
          Đăng nhập
        </Link>
      </div>
    </div>
  )
}
