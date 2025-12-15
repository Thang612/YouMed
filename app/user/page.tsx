export default function OnboardingProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-6">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">Hoàn tất hồ sơ</h1>
          <p className="text-gray-500 text-sm mt-1">
            Chỉ mất ~30 giây để bắt đầu tư vấn
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-6 text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-500 text-white">1</span>
          <span className="text-gray-400">→</span>
          <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-600">2</span>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="grid grid-cols-2 gap-3">
            <select className="px-4 py-2 border rounded-xl focus:outline-none">
              <option>Giới tính</option>
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>

            <input
              type="number"
              placeholder="Năm sinh"
              className="px-4 py-2 border rounded-xl focus:outline-none"
            />
          </div>

          <select className="w-full px-4 py-2 border rounded-xl focus:outline-none">
            <option>Tỉnh / Thành phố</option>
            <option>Hà Nội</option>
            <option>TP. Hồ Chí Minh</option>
            <option>Đà Nẵng</option>
          </select>

          {/* Need */}
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Bạn đang cần hỗ trợ gì?
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Tư vấn triệu chứng',
                'Đặt lịch khám',
                'Hỏi kết quả xét nghiệm',
                'Chưa rõ – cần tư vấn'
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="border rounded-xl px-3 py-2 text-sm hover:border-blue-500 hover:text-blue-500"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-3">
          <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600">
            Hoàn tất & bắt đầu tư vấn
          </button>

          <button className="w-full text-sm text-gray-500 hover:underline">
            Bổ sung thông tin sau
          </button>
        </div>
      </div>
    </div>
  )
}
