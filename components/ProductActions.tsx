import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import { useFormContext } from "react-hook-form";

export default function ProductActions() {
  const {
    formState: { isValid },
  } = useFormContext();
  return (
    <div className="mt-8">
      <Button disabled={!isValid} className="w-full">
        Add to cart
      </Button>
      <p className="flex items-center text-muted-foreground justify-center gap-2 mt-3  text-sm">
        <ShieldCheck size="18px" className="h-5 w-5 text-muted-foreground" />
        <span>Lifetime Guarantee</span>
      </p>
    </div>
  );
}
