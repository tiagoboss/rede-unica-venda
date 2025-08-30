import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { PackageCard } from "@/components/PackageCard";
import { NetworkTree } from "@/components/NetworkTree";
import { CommissionHistory } from "@/components/CommissionHistory";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  DollarSign, 
  Users, 
  Package, 
  TrendingUp,
  Copy,
  Share2,
  User,
  Mail,
  Phone
} from "lucide-react";

const Index = () => {
  const [currentView, setCurrentView] = useState("dashboard");
  const { toast } = useToast();

  // Mock data
  const mockNetworkMembers = [
    {
      id: "1",
      name: "João Silva",
      email: "joao@email.com",
      joinDate: "2024-01-15",
      totalSales: 5000,
      status: "active" as const
    },
    {
      id: "2", 
      name: "Maria Santos",
      email: "maria@email.com",
      joinDate: "2024-02-10",
      totalSales: 3200,
      status: "active" as const
    }
  ];

  const mockCommissions = [
    {
      id: "1",
      memberName: "João Silva",
      packageName: "Pacote Premium",
      amount: 500,
      date: "2024-03-01",
      status: "paid" as const
    },
    {
      id: "2",
      memberName: "Maria Santos", 
      packageName: "Pacote Starter",
      amount: 200,
      date: "2024-03-02",
      status: "pending" as const
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: 497,
      commission: 150,
      features: [
        "Acesso à plataforma por 30 dias",
        "Material de treinamento básico",
        "Suporte por email",
        "1 indicação por mês"
      ]
    },
    {
      name: "Premium",
      price: 997,
      commission: 350,
      features: [
        "Acesso à plataforma por 90 dias",
        "Material de treinamento completo",
        "Suporte prioritário",
        "Indicações ilimitadas",
        "Webinars exclusivos",
        "Certificado de conclusão"
      ],
      isPopular: true
    },
    {
      name: "Elite",
      price: 1997,
      commission: 750,
      features: [
        "Acesso vitalício à plataforma",
        "Todo conteúdo Premium +",
        "Mentoria 1:1",
        "Grupo VIP no Telegram",
        "Kit de marketing digital",
        "Participação nos lucros"
      ]
    }
  ];

  const handleCopyReferralLink = () => {
    const referralLink = "https://platform.com/ref/usuario123";
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link copiado!",
      description: "Seu link de indicação foi copiado para a área de transferência.",
    });
  };

  const handlePurchasePackage = (packageName: string) => {
    toast({
      title: "Redirecionando para pagamento",
      description: `Você será redirecionado para adquirir o ${packageName}.`,
    });
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Saldo Disponível"
          value="R$ 2.450"
          subtitle="Disponível para saque"
          icon={<DollarSign />}
          gradient
        />
        <StatCard
          title="Total em Comissões"
          value="R$ 8.200"
          subtitle="Últimos 30 dias"
          icon={<TrendingUp />}
          trend={{ value: "+15%", isPositive: true }}
        />
        <StatCard
          title="Indicações Ativas"
          value="12"
          subtitle="Nível 1"
          icon={<Users />}
          trend={{ value: "+2", isPositive: true }}
        />
        <StatCard
          title="Pacotes Vendidos"
          value="28"
          subtitle="Este mês"
          icon={<Package />}
          trend={{ value: "+8", isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border border-border/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Share2 className="h-5 w-5 text-primary" />
              Seu Link de Indicação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input 
                value="https://platform.com/ref/usuario123" 
                readOnly 
                className="flex-1 bg-secondary/50 border-border/50 text-foreground"
              />
              <Button 
                onClick={handleCopyReferralLink} 
                variant="outline" 
                size="icon"
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Compartilhe este link para ganhar comissões de suas indicações
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-premium border border-border/30">
          <CardHeader>
            <CardTitle className="text-foreground">💰 Próximos Pagamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Comissões Pendentes</span>
                <span className="font-medium text-warning">R$ 450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Próximo Pagamento</span>
                <span className="font-medium text-foreground">15/04/2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Forma de Pagamento</span>
                <span className="font-medium text-primary">💳 PIX</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderPackages = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2 text-foreground">💎 Escolha seu Pacote</h2>
        <p className="text-muted-foreground">
          Selecione o pacote ideal para começar ou expandir seu negócio
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            name={pkg.name}
            price={pkg.price}
            commission={pkg.commission}
            features={pkg.features}
            isPopular={pkg.isPopular}
            onPurchase={() => handlePurchasePackage(pkg.name)}
          />
        ))}
      </div>
    </div>
  );

  const renderNetwork = () => (
    <div className="space-y-6">
      <NetworkTree members={mockNetworkMembers} />
    </div>
  );

  const renderCommissions = () => (
    <div className="space-y-6">
      <CommissionHistory commissions={mockCommissions} />
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-6">
      <Card className="bg-gradient-card border border-border/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <User className="h-5 w-5 text-primary" />
            👤 Meu Perfil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nome Completo</Label>
              <Input id="name" defaultValue="Usuário Exemplo" className="bg-secondary/50 border-border/50 text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email</Label>
              <Input id="email" type="email" defaultValue="usuario@email.com" className="bg-secondary/50 border-border/50 text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Telefone</Label>
              <Input id="phone" defaultValue="(11) 99999-9999" className="bg-secondary/50 border-border/50 text-foreground" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pix" className="text-foreground">Chave PIX</Label>
              <Input id="pix" defaultValue="usuario@email.com" className="bg-secondary/50 border-border/50 text-foreground" />
            </div>
          </div>
          <Button className="bg-gradient-primary text-primary-foreground hover:shadow-gold-intense border-0">
            ✨ Salvar Alterações
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case "dashboard":
        return renderDashboard();
      case "packages":
        return renderPackages();
      case "network":
        return renderNetwork();
      case "commissions":
        return renderCommissions();
      case "profile":
        return renderProfile();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navigation currentView={currentView} onViewChange={setCurrentView} />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {renderCurrentView()}
      </main>
    </div>
  );
};

export default Index;
