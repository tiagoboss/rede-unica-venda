import { DollarSign, TrendingUp } from "lucide-react";

export const CommissionHistory = () => {
  const history = [
    { date: "15/03/2024", amount: 450, type: "Venda Direta", status: "pago" },
    { date: "14/03/2024", amount: 200, type: "Comissão Rede", status: "pago" },
    { date: "12/03/2024", amount: 600, type: "Venda Direta", status: "pago" },
    { date: "10/03/2024", amount: 150, type: "Comissão Rede", status: "pendente" },
  ];

  return (
    <div className="glass-card p-6 space-y-4">
      <div className="flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold text-white">Histórico de Comissões</h3>
      </div>

      <div className="space-y-3">
        {history.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="font-semibold text-white">R$ {item.amount}</p>
                <p className="text-sm text-muted-foreground">{item.type}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
              <div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    item.status === "pago"
                      ? "bg-primary/20 text-primary"
                      : "bg-yellow-500/20 text-yellow-500"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-white/10">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground">Total do mês</span>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-xl font-bold text-primary">R$ 1.400</span>
          </div>
        </div>
      </div>
    </div>
  );
};
