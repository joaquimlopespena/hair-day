import { cva, type VariantProps } from "class-variance-authority";
import { useState } from "react";
import { clsx } from "clsx";
import Icon from "./icon";
import { textVariants } from "./text";

export const inputTextVariants = cva(
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
      filled: {
        true: "",
        false: "",
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
      filled: false,
      size: "md",
      disabled: false,
    },
  }
);

export const inputTextIconVariants = cva("transition", {
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

export const inputTextInputVariants = cva(
  `
  flex-1 bg-transparent border-none outline-none
  text-gray-100 placeholder:text-gray-400
  font-sans text-base leading-6
`,
  {
    variants: {
      state: {
        default: "text-gray-100",
        active: "text-gray-100 caret-yellow",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

interface InputTextProps
  extends Omit<React.ComponentProps<"input">, "size" | "disabled">,
    VariantProps<typeof inputTextVariants> {
  size?: "sm" | "md" | "lg";
  icon?: React.ComponentProps<typeof Icon>["svg"];
}

export default function InputText({
    size,
    disabled,
    className,
    icon,
    state: controlledState,
    ...props
  }: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);
    const currentState = controlledState ?? (isFocused ? "active" : "default");

    return (
      <div
        className={clsx(
          inputTextVariants({ size, disabled: !!disabled, state: currentState }),
          className
        )}
      >
        {icon && (
          <Icon
            svg={icon}
            className={inputTextIconVariants({ state: currentState })}
          />
        )}
        <input
          className={clsx(
            inputTextInputVariants({ state: currentState }),
            textVariants({ variant: "text-md-regular" })
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