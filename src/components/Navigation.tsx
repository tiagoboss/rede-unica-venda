import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  DollarSign, 
  User,
  LogOut,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'packages', label: 'Pacotes', icon: Package },
    { id: 'network', label: 'Minha Rede', icon: Users },
    { id: 'commissions', label: 'Comissões', icon: DollarSign },
    { id: 'profile', label: 'Perfil', icon: User },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-card border-b px-6 py-4">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MLM Platform
            </div>
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    onClick={() => onViewChange(item.id)}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-card border-b px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
            MLM Platform
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={currentView === item.id ? "default" : "ghost"}
                  onClick={() => {
                    onViewChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full justify-start gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
            <div className="pt-4 border-t">
              <div className="flex items-center gap-3 px-3 py-2">
                <Avatar>
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
                <span className="font-medium">Usuário</span>
                <Button variant="ghost" size="icon" className="ml-auto">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}