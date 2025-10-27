import { Users, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface NetworkTreeProps {
  expanded?: boolean;
}

export const NetworkTree = ({ expanded = false }: NetworkTreeProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const networkData = [
    { name: "Maria Santos", sales: 12, commission: 1200 },
    { name: "Pedro Lima", sales: 8, commission: 800 },
    { name: "Ana Costa", sales: 15, commission: 1500 },
    { name: "Carlos Souza", sales: 6, commission: 600 },
  ];

  return (
    <div className="glass-card p-6 space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full"
      >
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-white">Minha Rede (Nível 1)</h3>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {isExpanded && (
        <div className="space-y-3">
          {networkData.map((member, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.sales} vendas</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">R$ {member.commission}</p>
                  <p className="text-xs text-muted-foreground">comissão</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
