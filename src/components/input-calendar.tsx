import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import Icon from "./icon";
import { textVariants } from "./text";
import CalendarIcon from "../assets/icons/calendar.svg?react";
import CaretDownIcon from "../assets/icons/caret-down.svg?react";

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
    },
    defaultVariants: {
      state: "default",
      size: "md",
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

function formatDateToBrazilian(date: string) {
  if (!date) return "dd/mm/aaaa";
  const [year, month, day] = date.split("-");
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

export default function InputCalendar({
  className,
  size,
  state: controlledState,
  icon,
  value,
  defaultValue,
  onChange,
  ...props
}: InputCalendarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    if (typeof value === "string") return value;
    if (typeof defaultValue === "string") return defaultValue;
    return "";
  });

  useEffect(() => {
    if (typeof value === "string") {
      setSelectedDate(value);
    }
  }, [value]);

  const openNativePicker = () => {
    const input = inputRef.current;
    if (!input) return;
    input.focus();
    (input as HTMLInputElement & { showPicker?: () => void }).showPicker?.();
  };

  const currentState = controlledState ?? (isFocused ? "active" : "default");

  return (
    <div
      className={clsx(
        "relative",
        inputCalendarVariants({ size, state: currentState }),
        className
      )}
      onClick={openNativePicker}
    >
      <input
        ref={inputRef}
        type="date"
        className="absolute inset-0 h-full w-full opacity-0 cursor-pointer scheme-dark"
        value={selectedDate}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setSelectedDate(e.target.value);
          onChange?.(e);
        }}
        {...props}
      />

      <div className="pointer-events-none flex w-full items-center gap-2">
        <Icon
          svg={icon ?? CalendarIcon}
          className={inputCalendarIconVariants({ state: currentState })}
        />

        <span
          className={clsx(
            "flex-1",
            textVariants({ variant: "text-md-regular" }),
            selectedDate ? "text-gray-100" : "text-gray-300"
          )}
        >
          {formatDateToBrazilian(selectedDate)}
        </span>

        <Icon svg={CaretDownIcon} className="fill-gray-400" />
      </div>
    </div>
  );
}

