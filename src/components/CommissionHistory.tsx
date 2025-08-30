import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign } from "lucide-react";

interface Commission {
  id: string;
  memberName: string;
  packageName: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending';
}

interface CommissionHistoryProps {
  commissions: Commission[];
}

export function CommissionHistory({ commissions }: CommissionHistoryProps) {
  return (
    <Card className="bg-gradient-card border border-border/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <DollarSign className="h-5 w-5 text-primary" />
          Histórico de Comissões
        </CardTitle>
      </CardHeader>
      <CardContent>
        {commissions.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <DollarSign className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Nenhuma comissão ainda</p>
            <p className="text-sm">Suas comissões aparecerão aqui quando você fizer vendas</p>
          </div>
        ) : (
          <div className="space-y-4">
            {commissions.map((commission) => (
              <div
                key={commission.id}
                className="flex items-center justify-between p-4 border border-border/30 rounded-lg bg-gradient-premium hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{commission.memberName}</h4>
                    <Badge 
                      variant={commission.status === 'paid' ? 'default' : 'secondary'}
                      className={commission.status === 'paid' ? 'bg-success text-success-foreground' : ''}
                    >
                      {commission.status === 'paid' ? '✅ Pago' : '⏳ Pendente'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Pacote: <span className="text-foreground">{commission.packageName}</span>
                  </p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(commission.date).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary">
                    R$ {commission.amount.toLocaleString('pt-BR')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}