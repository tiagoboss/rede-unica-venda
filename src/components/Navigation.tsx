import { LayoutDashboard, Package, Users, User } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "packages", label: "Pacotes", icon: Package },
    { id: "network", label: "Rede", icon: Users },
    { id: "profile", label: "Perfil", icon: User },
  ];

  return (
    <nav className="glass-card p-2">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                isActive
                  ? "bg-primary text-black shadow-lg shadow-primary/50"
                  : "text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
