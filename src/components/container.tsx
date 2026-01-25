import { cva, type VariantProps } from "class-variance-authority";
import { createElement } from "react";

export const containerVariants = cva("mx-auto p-4", {
    variants: {
        size: {
            full: "w-full",
            sm: "max-w-7xl mx-auto px-4",
            md: "max-w-7xl mx-auto px-4",
            lg: "max-w-7xl mx-auto px-4",
            xl: "max-w-7xl mx-auto px-4",
            "2xl": "max-w-7xl mx-auto px-4",
            "3xl": "max-w-7xl mx-auto px-4",
            "4xl": "max-w-7xl mx-auto px-4",
            "5xl": "max-w-7xl mx-auto px-4",
        },
    },
    defaultVariants: {
        size: "full",
    },
});


interface ContainerProps
    extends VariantProps<typeof containerVariants>,
    React.ComponentProps<"div"> {
    as?: keyof React.JSX.IntrinsicElements;
    size?: "full" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

export default function Container({
    as = "div",
    size = "full",
    className,
    children,
    ...props
}: ContainerProps) {
    return createElement(
        as,
        {
            className: containerVariants({ size, className }),
            ...props,
        },
        children
    );
}