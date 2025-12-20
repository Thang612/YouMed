"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type SidebarProps = {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const menuItems = [
    { name: 'Bảng điều khiển', icon: 'fa-solid fa-chart-pie', href: '/admin' },
    { name: 'Lịch hẹn khám', icon: 'fa-solid fa-calendar-check', href: '/admin/appointments' },
    { name: 'Quản lý Bác sĩ', icon: 'fa-solid fa-user-doctor', href: 'admin/doctors' },
    { name: 'Hồ sơ Bệnh nhân', icon: 'fa-solid fa-hospital-user', href: '/patients' },
    { name: 'Dược phẩm', icon: 'fa-solid fa-pills', href: '/pharmacy' },
    { name: 'Tài chính', icon: 'fa-solid fa-file-invoice-dollar', href: '/finance' },
    { name: 'Cài đặt', icon: 'fa-solid fa-gear', href: '/settings' },
];

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
    const pathname = usePathname();

    return (
        <aside className={`fixed left-0 top-0 h-screen bg-[#111827] text-slate-300 transition-all duration-300 ease-in-out z-50 shadow-xl ${isCollapsed ? 'w-20' : 'w-64'}`}>

            {/* Header Logo */}
            <div className="flex items-center justify-between px-6 py-7 border-b border-slate-800">
                {!isCollapsed && (
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-briefcase-medical text-blue-500 text-xl"></i>
                        <span className="font-bold text-lg text-white tracking-wide">YouMed Admin</span>
                    </div>
                )}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className={`flex items-center justify-center p-2 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-200 ${isCollapsed ? 'mx-auto' : ''}`}
                >
                    <i className={`fa-solid ${isCollapsed ? 'fa-bars' : 'fa-chevron-left'} text-sm`}></i>
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-6 px-3 space-y-1.5">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center p-3 rounded-xl transition-all group relative ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                                : 'hover:bg-slate-800 hover:text-white'
                                }`}
                        >
                            <div className={`flex items-center justify-center ${isCollapsed ? 'w-full' : 'w-8'}`}>
                                <i className={`${item.icon} ${isCollapsed ? 'text-lg' : 'text-base'} transition-all`}></i>
                            </div>
                            {!isCollapsed && <span className="ml-3 text-sm font-medium tracking-wide">{item.name}</span>}

                            {/* Tooltip khi thu nhỏ */}
                            {isCollapsed && (
                                <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 whitespace-nowrap z-50 border border-slate-700 shadow-2xl">
                                    {item.name}
                                </div>
                            )}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}

export default Sidebar;