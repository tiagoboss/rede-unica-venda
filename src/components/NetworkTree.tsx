import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp } from "lucide-react";

interface NetworkMember {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  totalSales: number;
  status: 'active' | 'inactive';
  avatar?: string;
}

interface NetworkTreeProps {
  members: NetworkMember[];
}

export function NetworkTree({ members }: NetworkTreeProps) {
  return (
    <Card className="bg-gradient-card border border-border/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Users className="h-5 w-5 text-primary" />
          Sua Rede (Nível 1)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {members.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Você ainda não possui indicações</p>
            <p className="text-sm">Comece a indicar e construir sua rede!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex items-center justify-between p-4 border border-border/30 rounded-lg bg-gradient-premium hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="border border-primary/20">
                    <AvatarImage src={member.avatar} />
                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                      {member.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">{member.name}</h4>
                      <Badge 
                        variant={member.status === 'active' ? 'default' : 'secondary'}
                        className={member.status === 'active' ? 'bg-success text-success-foreground' : ''}
                      >
                        {member.status === 'active' ? 'Ativo' : 'Inativo'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.email}</p>
                    <p className="text-xs text-muted-foreground">
                      Membro desde {new Date(member.joinDate).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-primary">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium">R$ {member.totalSales.toLocaleString('pt-BR')}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Total em vendas</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}