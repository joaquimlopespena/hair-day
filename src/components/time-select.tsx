import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { textVariants } from "./text";

export const timeSelectVariants = cva(
  `
  inline-flex items-center justify-center
  h-10 px-5 rounded-lg border
  transition-colors cursor-pointer
  font-sans text-base leading-6
`,
  {
    variants: {
      state: {
        default: "bg-gray-700 border-gray-600 text-gray-100 hover:border-gray-500",
        selected: "bg-gray-700 border-yellow text-yellow",
        disabled: "bg-gray-700 border-gray-600 opacity-50 text-gray-400 pointer-events-none",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

interface TimeSelectProps
  extends Omit<React.ComponentProps<"button">, "disabled">,
    VariantProps<typeof timeSelectVariants> {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
}

export default function TimeSelect({
  children,
  selected,
  disabled,
  className,
  state: controlledState,
  ...props
}: TimeSelectProps) {
  const currentState = controlledState ?? 
    (disabled ? "disabled" : selected ? "selected" : "default");

  return (
    <button
      className={clsx(
        timeSelectVariants({ state: currentState }),
        textVariants({ variant: "text-md-regular" }),
        className
      )}
      disabled={!!disabled}
      {...props}
    >
      {children}
    </button>
  );
}

