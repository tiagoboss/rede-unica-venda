import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { StatCard } from "@/components/StatCard";
import { PackageCard } from "@/components/PackageCard";
import { NetworkTree } from "@/components/NetworkTree";
import { CommissionHistory } from "@/components/CommissionHistory";
import { Users, TrendingUp, DollarSign, Package } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { title: "Rede Total", value: "1.234", icon: Users, change: "+12.5%" },
    { title: "Comissões do Mês", value: "R$ 45.230", icon: DollarSign, change: "+8.2%" },
    { title: "Vendas Diretas", value: "89", icon: Package, change: "+23.1%" },
    { title: "Taxa de Crescimento", value: "15.8%", icon: TrendingUp, change: "+2.4%" },
  ];

  const packages = [
    {
      name: "Starter",
      price: 299,
      commission: 50,
      benefits: ["Acesso ao sistema", "Suporte básico", "1 nível de comissão"],
    },
    {
      name: "Professional",
      price: 599,
      commission: 100,
      benefits: ["Tudo do Starter", "Suporte prioritário", "Material de marketing", "Treinamentos"],
      featured: true,
    },
    {
      name: "Enterprise",
      price: 999,
      commission: 200,
      benefits: ["Tudo do Professional", "Consultoria exclusiva", "Comissões extras", "Eventos VIP"],
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <NetworkTree />
              <CommissionHistory />
            </div>
          </div>
        );
      case "packages":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">Escolha Seu Pacote</h2>
              <p className="text-muted-foreground">
                Selecione o pacote ideal para começar sua jornada
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>
        );
      case "network":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">Sua Rede</h2>
              <p className="text-muted-foreground">
                Visualize e gerencie sua equipe
              </p>
            </div>
            <NetworkTree expanded />
          </div>
        );
      case "profile":
        return (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-white">Meu Perfil</h2>
              <p className="text-muted-foreground">
                Gerencie suas informações pessoais
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">João Silva</h3>
                    <p className="text-muted-foreground">joao.silva@email.com</p>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Pacote Atual</label>
                    <p className="text-lg font-semibold text-white">Professional</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Membro desde</label>
                    <p className="text-lg font-semibold text-white">Janeiro 2024</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">ID de Referência</label>
                    <p className="text-lg font-semibold text-primary">REF-12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in">
              Plataforma <span className="text-primary">MLM</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Gerencie sua rede e maximize seus ganhos
            </p>
          </div>

          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Index;
