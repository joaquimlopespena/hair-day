import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import ButtonIcon from "./button-icon";
import Text from "./text";

export const appointmentVariants = cva(
  `
  flex items-center justify-between
  py-2
`,
  {
    variants: {
      size: {
        sm: "py-1",
        md: "py-2",
        lg: "py-3",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const appointmentTimeVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-100 font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const appointmentNameVariants = cva("", {
  variants: {
    variant: {
      default: "text-gray-100",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface AppointmentProps
  extends VariantProps<typeof appointmentVariants>,
    React.ComponentProps<"div"> {
  time: string;
  name: string;
  onDelete?: () => void;
  deleteIcon?: React.ComponentProps<typeof ButtonIcon>["icon"];
}

export default function Appointment({
  time,
  name,
  onDelete,
  deleteIcon,
  size,
  className,
  ...props
}: AppointmentProps) {
  return (
    <div className={clsx(appointmentVariants({ size }), className)} {...props}>
      <div className="flex items-center gap-3">
        <Text
          variant="text-md-bold"
          className={appointmentTimeVariants()}
        >
          {time}
        </Text>
        <Text
          variant="text-md-regular"
          className={appointmentNameVariants()}
        >
          {name}
        </Text>
      </div>
      {deleteIcon && onDelete && (
        <ButtonIcon icon={deleteIcon} variant="tertiary" onClick={onDelete} />
      )}
    </div>
  );
}
