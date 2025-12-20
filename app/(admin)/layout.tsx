'use client'
import "../globals.css";
import Sidebar from "./admin/Component/Sidebar";
import { useState } from "react";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    const [isCollapsed, setIsCollapsed] = useState(false);


    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <main className={`transition-all w-full  duration-300 p-8 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
                {children}
            </main>

        </div>

    );
}
