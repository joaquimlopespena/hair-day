import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { textVariants } from "./text";

export const timeSelectVariants = cva(
  `
  inline-flex items-center justify-center
  px-4 py-2 rounded-lg
  transition-colors cursor-pointer
  font-sans text-base leading-6
`,
  {
    variants: {
      state: {
        default: "bg-gray-700 text-gray-100 hover:bg-gray-600",
        selected: "bg-gray-700 text-yellow border-2 border-yellow",
        disabled: "bg-gray-700 opacity-50 text-gray-400 pointer-events-none",
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

