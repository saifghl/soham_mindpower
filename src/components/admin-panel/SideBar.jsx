import React from 'react';
import {
    LayoutDashboard,
    Users,
    FileText,
    Calendar,
    FileEdit,
    CreditCard,
    Settings,
    LogOut
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/admin/dashboard' },
        { name: 'Patients', icon: Users, path: '/admin/patient-enquiries' },
        { name: 'Reports', icon: FileText, path: '/admin/reports' },
        { name: 'Appointments', icon: Calendar, path: '/admin/appointments' },
        { name: 'Content Mgmt', icon: FileEdit, path: '/admin/content-mgmt' },
        { name: 'Payment', icon: CreditCard, path: '/admin/payment' },
        { name: 'Settings', icon: Settings, path: '/admin/settings' },
    ];

    return (
        <div className="w-64 h-screen bg-white shadow-lg flex flex-col fixed left-0 top-0 z-10 font-inter">
            <div className="p-8">
                <h1 className="text-xl font-bold text-[#1e40af]">sohaam mindpower</h1>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                                    ? 'bg-[#FEF3C7] text-gray-900'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <item.icon size={20} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 mt-auto">
                <button className="flex items-center gap-3 px-4 py-3 text-red-500 text-sm font-medium hover:bg-red-50 rounded-lg w-full transition-colors">
                    <LogOut size={20} />
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default SideBar;
