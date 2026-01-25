import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { clsx } from "clsx";
import Icon from "./icon";
import { textVariants } from "./text";

export const inputCalendarVariants = cva(
  `
  w-full flex items-center gap-2 px-4 py-3 rounded-lg
  bg-transparent border transition-colors
  focus:outline-none focus:ring-0
`,
  {
    variants: {
      state: {
        default: "border-gray-200",
        active: "border-yellow",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: "",
      },
    },
    defaultVariants: {
      state: "default",
      size: "md",
      disabled: false,
    },
  }
);

export const inputCalendarIconVariants = cva("transition", {
  variants: {
    state: {
      default: "fill-gray-400",
      active: "fill-gray-400",
    },
  },
  defaultVariants: {
    state: "default",
  },
});

export const calendarPopoverVariants = cva(
  `
  absolute z-50 mt-2 p-4 rounded-lg
  bg-gray-800 border border-gray-700
  shadow-lg
`,
  {
    variants: {
      size: {
        sm: "w-64",
        md: "w-80",
        lg: "w-96",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const calendarHeaderVariants = cva(
  `
  flex items-center justify-between mb-4
`
);

export const calendarDayVariants = cva(
  `
  w-10 h-10 flex items-center justify-center rounded
  transition-colors cursor-pointer
  text-sm
`,
  {
    variants: {
      state: {
        default: "text-gray-100 hover:bg-gray-700",
        selected: "bg-blue-500 text-white",
        otherMonth: "text-gray-500",
        today: "text-gray-100 border border-gray-500",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

interface InputCalendarProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputCalendarVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  size?: "sm" | "md" | "lg";
}

export default function InputCalendar({
  disabled,
  className,
  size,
  state: controlledState,
  icon,
  ...props
}: InputCalendarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const currentState = controlledState ?? (isFocused ? "active" : "default");

  return (
    <div
      className={clsx(
        inputCalendarVariants({ size, disabled: !!disabled, state: currentState }),
        className
      )}
    >
      {icon && (
        <Icon
          svg={icon}
          className={inputCalendarIconVariants({ state: currentState })}
        />
      )}
      <input
        type="date"
        className={clsx(
          "flex-1 bg-transparent border-none outline-none",
          textVariants({ variant: "text-md-regular" }),
          "text-gray-100"
        )}
        disabled={!!disabled}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        {...props}
      />
    </div>
  );
}

