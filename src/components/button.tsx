import Icon from "./icon";
import Text from "./text";
import { cva, type VariantProps } from "class-variance-authority";


export const buttonVariants = cva("font-sans text-gray-400", {
    variants: {
        variant: {
            "button-primary": "bg-yellow text-gray-100 hover:bg-yellow-dark",
            "button-secondary": "bg-gray-100 text-gray-500 hover:bg-gray-200",
        },
        disabled: {
            true: "bg-yellow-dark text-yellow opacity-50 pointer-events-none",
        },
    }
})

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  size?: "sm" | "md" | "lg";
}

export const buttonIconVariants = cva("transition", {
    variants: {
        variant: {
            "button-primary": "fill-white",
            "button-secondary": "fill-gray-500",
        },
        size: {
            sm: "w-4 h-4",
            md: "w-5 h-5",
            lg: "w-6 h-6",
        },
    },
    defaultVariants: {
        variant: "button-primary",
        size: "md",
    },
});

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    icon: IconComponent,
    ...props
}: ButtonProps) {
    return (
        <button
            className={buttonVariants({ className, disabled, variant })}
            {...props}
        >
            {IconComponent && (
                <Icon
                    svg={IconComponent}
                    className={buttonIconVariants({ variant: variant || "button-primary", size: size || "md" })}
                />
            )}
            <Text variant="text-md-regular">
                {children}
            </Text>
        </button>
    );
}