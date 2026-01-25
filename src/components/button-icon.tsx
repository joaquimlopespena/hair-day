import { cva, type VariantProps } from "class-variance-authority";

import Icon from "./icon";

export const buttonIconVariants = cva(
  `
  inline-flex items-center justify-center cursor-pointer transition group
`,
  {
    variants: {
      variant: {
        none: "",
        primary: "bg-yellow text-white hover:bg-yellow-dark",
        secondary: "bg-gray-200 hover:bg-gray-300",
        tertiary: "bg-transparent hover:bg-gray-200",
      },
      size: {
        sm: "w-6 h-6 p-1 rounded",
        md: "w-8 h-8 p-1.5 rounded",
        lg: "w-10 h-10 p-2 rounded",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      disabled: false,
    },
  }
);

interface ButtonIconProps
  extends Omit<React.ComponentProps<"button">, "disabled" | "size">,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  loading?: boolean;
}

export const buttonIconIconVariants = cva("transition", {
  variants: {
      variant: {
        none: "fill-white",
        primary: "fill-white",
        secondary: "fill-gray-500 group-hover:fill-gray-600",
        tertiary: "fill-gray-400 group-hover:fill-gray-500",
      },
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  loading,
  icon,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <div
        className={buttonIconVariants({ variant: "none", size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ className, variant, size, disabled: !!disabled })}
      disabled={!!disabled}
      {...props}
    >
      <Icon className={buttonIconIconVariants({ size, variant })} svg={icon} />
    </button>
  );
}
