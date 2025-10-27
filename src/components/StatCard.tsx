import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
}

export const StatCard = ({ title, value, icon: Icon, change }: StatCardProps) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-sm font-medium">{title}</p>
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-5 h-5 text-primary" />
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-3xl font-bold text-white">{value}</p>
        <p className={`text-sm font-semibold ${isPositive ? "text-primary" : "text-red-500"}`}>
          {change} vs mês anterior
        </p>
      </div>
    </div>
  );
};
