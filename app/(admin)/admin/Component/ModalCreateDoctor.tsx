'use client'

import { useState } from 'react'
import { DoctorData, SPECIALTY_MAP, createDoctor } from '@/app/Service/doctor.service'

type ModalProps = {
  handleClose: () => void
}

const ModalCreateDoctor = ({ handleClose }: ModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialty: SPECIALTY_MAP[0]?.slug || '',
    experienceYears: 0,
    hospital: '',
    city: 'hn' as 'hn' | 'hcm' | 'dn',
    gender: 'other' as 'male' | 'female' | 'other',
  })

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      setError('Vui lòng nhập đầy đủ Họ tên và Email')
      return
    }

    try {
      setIsSubmitting(true)
      setError(null)

      await createDoctor(formData)

      handleClose()
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Có lỗi xảy ra, vui lòng thử lại')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={() => !isSubmitting && handleClose()}
      />

      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-200/20 p-6 border-b flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Cấp tài khoản Bác sĩ mới
            </h3>
            <p className="text-xs text-slate-500">
              Hệ thống sẽ tự động gửi email tạo mật khẩu
            </p>
          </div>
          <button
            disabled={isSubmitting}
            onClick={handleClose}
            className="text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-xl">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-6">
            {/* Name */}
            <div className="col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase">
                Họ và tên bác sĩ
              </label>
              <input
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              />
            </div>

            {/* Phone */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase">Số điện thoại</label>
              <input
                value={formData.phone}
                onChange={e =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              />
            </div>

            {/* Gender */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase">Giới tính</label>
              <select
                value={formData.gender}
                onChange={e =>
                  setFormData({
                    ...formData,
                    gender: e.target.value as 'male' | 'female' | 'other',
                  })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              >
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>

            {/* City */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase">Thành phố</label>
              <select
                value={formData.city}
                onChange={e =>
                  setFormData({
                    ...formData,
                    city: e.target.value as 'hn' | 'hcm' | 'dn',
                  })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              >
                <option value="hn">Hà Nội</option>
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="dn">Đà Nẵng</option>
              </select>
            </div>

            {/* Specialty */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase">Chuyên khoa</label>
              <select
                value={formData.specialty}
                onChange={e =>
                  setFormData({ ...formData, specialty: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              >
                {SPECIALTY_MAP.map(s => (
                  <option key={s.slug} value={s.slug}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase">
                Năm kinh nghiệm
              </label>
              <input
                type="number"
                value={formData.experienceYears}
                onChange={e =>
                  setFormData({
                    ...formData,
                    experienceYears: Number(e.target.value),
                  })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              />
            </div>

            {/* Hospital */}
            <div className="col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase">
                Bệnh viện công tác
              </label>
              <input
                value={formData.hospital}
                onChange={e =>
                  setFormData({ ...formData, hospital: e.target.value })
                }
                className="w-full px-4 py-3 bg-slate-50 border rounded-xl"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 border-t pt-6">
            <button
              disabled={isSubmitting}
              onClick={handleClose}
              className="flex-1 py-3 text-sm font-bold text-slate-500 rounded-xl"
            >
              Hủy bỏ
            </button>
            <button
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="flex-1 py-3 bg-blue-600 text-white font-bold rounded-xl"
            >
              {isSubmitting ? 'Đang xử lý...' : 'Xác nhận & Gửi Email'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateDoctor
