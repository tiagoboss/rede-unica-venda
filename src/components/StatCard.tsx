import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  gradient?: boolean;
}

export function StatCard({ title, value, subtitle, icon, trend, gradient }: StatCardProps) {
  return (
    <Card className={`transition-all duration-300 hover:shadow-card-hover ${gradient ? 'bg-gradient-primary text-primary-foreground' : 'bg-gradient-card'}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={`text-sm font-medium ${gradient ? 'text-primary-foreground' : ''}`}>
          {title}
        </CardTitle>
        <div className={`h-4 w-4 ${gradient ? 'text-primary-foreground' : 'text-muted-foreground'}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${gradient ? 'text-primary-foreground' : ''}`}>
          {value}
        </div>
        {subtitle && (
          <p className={`text-xs ${gradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            {subtitle}
          </p>
        )}
        {trend && (
          <div className={`text-xs mt-1 ${trend.isPositive ? 'text-green-600' : 'text-red-600'} ${gradient ? 'text-primary-foreground' : ''}`}>
            {trend.isPositive ? '↗' : '↘'} {trend.value}
          </div>
        )}
      </CardContent>
    </Card>
  );
}