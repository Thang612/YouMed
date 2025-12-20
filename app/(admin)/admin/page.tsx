import Link from "next/link"

const recentAppointments = [
  { id: 1, patient: 'Nguyễn Văn An', doctor: 'BS. Trần Bình', time: '08:30', status: 'Đã hoàn thành' },
  { id: 2, patient: 'Lê Thị Hòa', doctor: 'BS. Lý Minh', time: '09:15', status: 'Đang khám' },
  { id: 3, patient: 'Trần Minh Tâm', doctor: 'BS. Nguyễn Oanh', time: '10:00', status: 'Chờ khám' },
  { id: 4, patient: 'Phạm Hồng Phúc', doctor: 'BS. Trần Bình', time: '10:30', status: 'Chờ khám' },
];

const Page = () => {
    return (<>
        <div className="sticky top-0 w-full flex justify-between items-center rounded-2xl bg-white px-6 py-4 mb-4 shadow">
            <div><h1><span className="font-semibold">Bảng điều khiển</span> | <span className="text-gray-400">Chào mừng trở lại, Thầy Trung Thắng</span></h1></div>
            <div className="cursor-pointer flex gap-7 items-center" ><i className="fa-solid fa-bell"></i>|<button className="px-4 py-2 bg-blue-500 rounded-full text-white">+ Tạo lịch hẹn</button></div>
        </div>
        <div className="w-full flex gap-4">
            <div className="w-1/4 bg-white rounded-xl p-5 ">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex justify-center items-center bg-blue-500">
                        <i className="text-white fa-solid fa-users"></i>

                    </div>
                    <span className="px-3 rounded font-bold bg-green-200/40 text-green-600    "><small>+ 5%</small></span>
                </div>
                <div className="mt-3">
                    <h2 className="text-gray-500 "><small>Tổng số bệnh nhân</small></h2>
                    <p className="text-2xl font-semibold">1,284</p>
                </div>
            </div>
            <div className="w-1/4 bg-white rounded-xl p-5 ">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex justify-center items-center bg-green-500">
                        <i className="text-white fa-solid fa-users"></i>

                    </div>
                    <span className="px-3 rounded font-bold bg-green-200/40 text-green-600    "><small>+ 5%</small></span>
                </div>
                <div className="mt-3">
                    <h2 className="text-gray-500 "><small>Lịch hẹn hôm nay</small></h2>
                    <p className="text-2xl font-semibold">42</p>
                </div>
            </div>
            <div className="w-1/4 bg-white rounded-xl p-5 ">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex justify-center items-center bg-orange-500">
                        <i className="text-white fa-solid fa-users"></i>

                    </div>
                    <span className="px-3 rounded font-bold bg-green-200/40 text-green-600    "><small>+ 5%</small></span>
                </div>
                <div className="mt-3">
                    <h2 className="text-gray-500 "><small>Bác sĩ trực</small></h2>
                    <p className="text-2xl font-semibold">18</p>
                </div>
            </div>
            <div className="w-1/4 bg-white rounded-xl p-5 ">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl flex justify-center items-center bg-purple-500">
                        <i className="text-white fa-solid fa-users"></i>

                    </div>
                    <span className="px-3 rounded font-bold bg-green-200/40 text-green-600    "><small>+ 5%</small></span>
                </div>
                <div className="mt-3">
                    <h2 className="text-gray-500 "><small>Doanh thu tháng</small></h2>
                    <p className="text-2xl font-semibold">125M</p>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-between gap-5 mt-5">
            <div className="w-2/3 bg-white h-96 rounded-2xl">
                <div className="px-6 py-3  flex justify-between">
                    <div><h2 className="font-semibold">Lịch hẹn gần đây</h2></div>
                    <div><Link href="/admin/appointments" className="text-blue-500 cursor-pointer">Xem tất cả</Link></div>
                </div>
                <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-slate-400 text-[11px] uppercase tracking-wider font-bold">
                    <tr>
                      <th className="px-6 py-4">Bệnh nhân</th>
                      <th className="px-6 py-4">Bác sĩ</th>
                      <th className="px-6 py-4">Thời gian</th>
                      <th className="px-6 py-4">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {recentAppointments.map((app) => (
                      <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-slate-800">{app.patient}</p>
                          <p className="text-xs text-slate-400">BN-202{app.id}</p>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-600">{app.doctor}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs bg-blue-50 px-2 py-1 rounded-md w-fit">
                            <i className="fa-regular fa-clock"></i>
                            {app.time}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
                            app.status === 'Đã hoàn thành' ? 'bg-emerald-100 text-emerald-600' :
                            app.status === 'Đang khám' ? 'bg-blue-100 text-blue-600' : 'bg-amber-100 text-amber-600'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-1/3 bg-white h-96 px-4 py-2">
                    <h4 className="font-bold text-slate-800 mb-6">Hoạt động hệ thống</h4>
              <div className="space-y-6">
                {[
                  { user: 'Admin', action: 'Cập nhật danh mục thuốc', time: '2 phút trước', icon: 'fa-box', color: 'text-blue-500' },
                  { user: 'BS. Trần', action: 'Hoàn tất hồ sơ BN001', time: '15 phút trước', icon: 'fa-check-circle', color: 'text-emerald-500' },
                  { user: 'Lễ tân', action: 'Đăng ký mới BN012', time: '1 giờ trước', icon: 'fa-user-plus', color: 'text-amber-500' },
                ].map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <div className={`mt-1 ${act.color}`}>
                      <i className={`fa-solid ${act.icon}`}></i>
                    </div>
                    <div>
                      <p className="text-sm text-slate-800 font-medium">
                        <span className="font-bold">{act.user}</span> {act.action}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
                
            </div>
        </div>
    </>)
}

export default Page