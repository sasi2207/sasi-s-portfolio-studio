import { LayoutDashboard, Users, BookOpen, Layers, LogOut } from "lucide-react";

export const AdminSidebar = ({ activeTab, setActiveTab, onLogout }: any) => {
  const menus = [
    { id: 'stats', label: 'Overview', icon: LayoutDashboard },
    { id: 'enquiries', label: 'Course Enquiries', icon: Users },
    { id: 'service-enquiries', label: 'Service Enquiries', icon: Layers },
    { id: 'courses', label: 'Manage Courses', icon: BookOpen },
  ];

  return (
    <div className="w-full lg:w-64 bg-zinc-900 border-r border-zinc-800 h-full lg:h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-orange-500 mb-10 hidden lg:block">TechSasi Admin</h2>
        <nav className="flex-1 space-y-2">
          {menus.map(menu => (
            <button
              key={menu.id}
              onClick={() => setActiveTab(menu.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition text-sm sm:text-base cursor-pointer ${
                activeTab === menu.id ? 'bg-orange-500 text-black font-bold' : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <menu.icon size={18} /> {menu.label}
            </button>
          ))}
        </nav>
      </div>

      <button 
        onClick={onLogout} 
        className="w-full flex items-center gap-3 text-red-400 hover:bg-red-500/10 p-4 rounded-xl transition cursor-pointer mt-6 lg:mt-0"
      >
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
};