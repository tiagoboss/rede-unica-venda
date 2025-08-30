import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface PackageCardProps {
  name: string;
  price: number;
  commission: number;
  features: string[];
  isPopular?: boolean;
  onPurchase: () => void;
}

export function PackageCard({ name, price, commission, features, isPopular, onPurchase }: PackageCardProps) {
  return (
    <Card className={`transition-all duration-300 hover:shadow-card-hover bg-gradient-card border border-border/30 ${
      isPopular 
        ? 'border-primary ring-2 ring-primary/30 shadow-gold relative overflow-hidden' 
        : 'hover:border-primary/30'
    }`}>
      {isPopular && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      )}
      <CardHeader className="text-center relative z-10">
        {isPopular && (
          <Badge className="w-fit mx-auto mb-2 bg-gradient-primary text-primary-foreground shadow-gold border-0">
            ⭐ Mais Popular
          </Badge>
        )}
        <CardTitle className="text-xl text-foreground">{name}</CardTitle>
        <div className="text-3xl font-bold text-primary">
          R$ {price.toLocaleString('pt-BR')}
        </div>
        <div className="text-sm text-muted-foreground">
          Comissão: <span className="font-semibold text-primary">R$ {commission.toLocaleString('pt-BR')}</span>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="relative z-10">
        <Button 
          onClick={onPurchase}
          className={`w-full transition-all duration-300 ${
            isPopular 
              ? 'bg-gradient-primary hover:shadow-gold-intense text-primary-foreground border-0' 
              : 'border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground'
          }`}
          variant={isPopular ? "default" : "outline"}
        >
          {isPopular ? '✨ Adquirir Pacote Premium' : 'Adquirir Pacote'}
        </Button>
      </CardFooter>
    </Card>
  );
}