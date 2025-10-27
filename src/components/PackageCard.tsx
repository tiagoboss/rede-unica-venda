import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PackageCardProps {
  name: string;
  price: number;
  commission: number;
  benefits: string[];
  featured?: boolean;
}

export const PackageCard = ({ name, price, commission, benefits, featured }: PackageCardProps) => {
  return (
    <div
      className={`glass-card p-8 space-y-6 relative ${
        featured ? "border-2 border-primary shadow-xl shadow-primary/20 scale-105" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-4 py-1 rounded-full font-bold text-sm flex items-center gap-1">
          <Sparkles className="w-4 h-4" />
          Mais Popular
        </div>
      )}

      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <div className="space-y-1">
          <p className="text-4xl font-bold text-primary">R$ {price}</p>
          <p className="text-sm text-muted-foreground">Comissão: R$ {commission}</p>
        </div>
      </div>

      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-white">{benefit}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${
          featured
            ? "bg-primary hover:bg-primary/90 text-black"
            : "bg-white/10 hover:bg-white/20 text-white"
        } font-bold py-6`}
      >
        Adquirir Pacote
      </Button>
    </div>
  );
};
