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
    <Card className={`transition-all duration-300 hover:shadow-card-hover border-border/20 ${
      gradient 
        ? 'bg-gradient-primary text-primary-foreground shadow-gold animate-glow' 
        : 'bg-gradient-card border border-border/30 hover:border-primary/30'
    }`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className={`text-sm font-medium ${gradient ? 'text-primary-foreground' : 'text-foreground'}`}>
          {title}
        </CardTitle>
        <div className={`h-4 w-4 ${gradient ? 'text-primary-foreground' : 'text-primary'}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${gradient ? 'text-primary-foreground' : 'text-foreground'}`}>
          {value}
        </div>
        {subtitle && (
          <p className={`text-xs ${gradient ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
            {subtitle}
          </p>
        )}
        {trend && (
          <div className={`text-xs mt-1 flex items-center gap-1 ${
            gradient 
              ? 'text-primary-foreground' 
              : trend.isPositive ? 'text-success' : 'text-destructive'
          }`}>
            <span>{trend.isPositive ? '↗' : '↘'}</span>
            <span className="font-medium">{trend.value}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}