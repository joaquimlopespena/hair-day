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

type TextElement = keyof React.JSX.IntrinsicElements;

type TextOwnProps = VariantProps<typeof textVariants> & {
  as?: TextElement;
  className?: string;
  children?: React.ReactNode;
};

type TextProps<T extends TextElement> = TextOwnProps &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TextOwnProps | "as"> & {
    as?: T;
  };



export default function Text<T extends TextElement = "span">({
    as,
    variant,
    className,
    children,
    ...props
    
}: TextProps<T>) {
  const component = (as ?? "span") as TextElement;

  return createElement(
    component,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children
  )
}
