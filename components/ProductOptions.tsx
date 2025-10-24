import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export default function ProductOptions({
  sizeArray,
  colors,
}: {
  sizeArray: {
    label: string;
    isPresent: boolean;
  }[];
  colors: {
    label: string;
    url: string;
  }[];
}) {
  const { watch, setValue } = useFormContext();

  const selectedColor = watch("color");
  const selectedSize = watch("size");

  const handleColorChange = (value: string) => {
    setValue("color", value, { shouldValidate: true });
  };
  const handleSizeChange = (value: string) => {
    setValue("size", value, { shouldValidate: true });
  };

  return (
    <>
      <div className="mt-8">
        <h2 className="font-semibold text-lg">Color</h2>
        <RadioGroup
          value={selectedColor}
          onValueChange={handleColorChange}
          defaultValue="option-one"
          className="mt-2 flex items-center gap-3"
        >
          {colors.map(({ label }, i) => (
            <div key={i} className="flex items-center space-x-2 mt-1">
              <RadioGroupItem
                color={label as "black" | "red" | "white"}
                size="custom"
                value={label}
                id={label}
              />
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="mt-6">
        <div className="flex w-full justify-between items-center">
          <h2 className="font-semibold">Size</h2>
          <a className="text-primary" href="#">
            See sizing Chart
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {sizeArray.map(({ label, isPresent }) => (
            <Button
              disabled={!isPresent}
              key={label}
              size="xl"
              variant={selectedSize === label ? "default" : "outline"}
              onClick={() => handleSizeChange(label)}
              type="button"
              className={cn(isPresent && "cursor-pointer")}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
}
