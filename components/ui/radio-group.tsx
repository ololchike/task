"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type RadioGroupItemProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
> & {
  size?: "default" | "custom";
  color?: "black" | "red" | "white";
};

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  size = "default",
  color = "black",
  ...props
}: RadioGroupItemProps) {
  const sizeClasses = size === "custom" ? "size-8" : "size-4";
  const indicatorClasses = size === "custom" ? "size-7" : "size-2";

  // Map color names to Tailwind classes
  const colorMap: Record<typeof color, string> = {
    black: "border-black text-black",
    red: "border-red-500 text-red-500",
    white: "border-gray-500 text-gray-200",
  };

  const fillMap: Record<typeof color, string> = {
    black: "fill-black",
    red: "fill-red-500",
    white: "fill-gray-200",
  };

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        colorMap[color],
        sizeClasses,
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            fillMap[color],
            indicatorClasses
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
