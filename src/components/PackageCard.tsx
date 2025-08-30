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
    <Card className={`transition-all duration-300 hover:shadow-card-hover ${isPopular ? 'border-primary ring-2 ring-primary/20' : ''}`}>
      <CardHeader className="text-center">
        {isPopular && (
          <Badge className="w-fit mx-auto mb-2 bg-primary text-primary-foreground">
            Mais Popular
          </Badge>
        )}
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="text-3xl font-bold text-primary">
          R$ {price.toLocaleString('pt-BR')}
        </div>
        <div className="text-sm text-muted-foreground">
          Comissão: <span className="font-semibold text-success">R$ {commission.toLocaleString('pt-BR')}</span>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-success" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onPurchase}
          className={`w-full ${isPopular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
          variant={isPopular ? "default" : "outline"}
        >
          Adquirir Pacote
        </Button>
      </CardFooter>
    </Card>
  );
}