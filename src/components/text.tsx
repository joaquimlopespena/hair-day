import { createElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "text-h2-bold": "font-sans text-2xl/8 font-bold text-gray-100",
      "text-md-bold": "font-bold text-base leading-6",
      "text-md-regular": "font-normal text-base leading-6",
      "text-sm-bold": "font-sans text-sm/5 font-normal text-gray-300",
      "text-sm-regular": "font-normal text-sm leading-5",
    }
  },
  defaultVariants: {
    variant: "text-md-regular"
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}



export default function Text({
    as = "span",
    variant,
    className,
    children,
    ...props
    
}: TextProps) {

  return createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children
  )
}
