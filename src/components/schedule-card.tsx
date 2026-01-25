import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import Icon from "./icon";
import ButtonIcon from "./button-icon";
import Text from "./text";
import Appointment from "./appointment";

export const scheduleCardVariants = cva(
    `
  rounded-lg bg-gray-700 border border-gray-600
  overflow-hidden
`,
    {
        variants: {
            size: {
                sm: "p-3",
                md: "p-4",
                lg: "p-5",
            },
        },
        defaultVariants: {
            size: "md",
        },
    }
);

export const scheduleCardHeaderVariants = cva(
    `
  flex items-center justify-between
  pb-3 mb-3 border-b border-gray-600
`
);

export const scheduleCardHeaderIconVariants = cva("transition", {
    variants: {
        period: {
            morning: "fill-yellow",
            afternoon: "fill-yellow",
            night: "fill-yellow",
        },
    },
    defaultVariants: {
        period: "morning",
    },
});

export const scheduleCardHeaderTextVariants = cva("", {
    variants: {
        period: {
            morning: "text-gray-100",
            afternoon: "text-gray-100",
            night: "text-gray-100",
        },
    },
    defaultVariants: {
        period: "morning",
    },
});

export const scheduleCardItemVariants = cva(
    `
  flex items-center justify-between
  py-2
`
);

export const scheduleCardItemTimeVariants = cva("", {
    variants: {
        variant: {
            default: "text-gray-100 font-bold",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export const scheduleCardItemNameVariants = cva("", {
    variants: {
        variant: {
            default: "text-gray-100",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

interface ScheduleCardProps
    extends VariantProps<typeof scheduleCardVariants>,
    React.ComponentProps<"div"> {
    period: "morning" | "afternoon" | "night";
    periodLabel: string;
    timeRange: string;
    icon: React.ComponentProps<typeof Icon>["svg"];
    appointments?: Array<{
        time: string;
        name: string;
        onDelete?: () => void;
    }>;
    deleteIcon?: React.ComponentProps<typeof ButtonIcon>["icon"];
}

export default function ScheduleCard({
    period,
    periodLabel,
    timeRange,
    icon,
    appointments = [],
    deleteIcon,
    size,
    className,
    ...props
}: ScheduleCardProps) {
    return (
        <div
            className={clsx(scheduleCardVariants({ size }), className)}
            {...props}
        >
            {/* Header */}
            <div className={scheduleCardHeaderVariants()}>
                <div className="flex items-center gap-2">
                    <Icon
                        svg={icon}
                        className={scheduleCardHeaderIconVariants({ period })}
                    />
                    <Text
                        variant="text-md-bold"
                        className={scheduleCardHeaderTextVariants({ period })}
                    >
                        {periodLabel}
                    </Text>
                </div>
                <Text
                    variant="text-sm-regular"
                    className={scheduleCardHeaderTextVariants({ period })}
                >
                    {timeRange}
                </Text>
            </div>

            {/* Appointments */}
            {appointments.length === 0 ? (
                <div className="py-4 text-center">
                    <Text
                        variant="text-sm-regular"
                        className="text-gray-400"
                    >
                        Nenhum agendamento para este período
                    </Text>
                </div>
            ) : (
                <div>
                    {appointments.map((appointment, index) => (
                        <Appointment key={index} {...appointment} />
                    ))}
                </div>
            )}
        </div>
    );
}
