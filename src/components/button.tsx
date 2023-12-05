import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ColorScheme =
  | "brand"
  | "accent"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink"
  | "teal"
  | "default";

type Variant = "outline" | "solid";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: Variant;
  colorScheme?: ColorScheme;
  isLoading?: boolean
}

const getColorClass = (
  variant: Variant = "outline",
  color: ColorScheme = "brand"
) => {
  switch (variant) {
    case "solid":
      return generateSolidClasses(color);
    case "outline":
      return generateOutlineClasses(color);
    default:
      return generateOutlineClasses(color);
  }
};

const generateOutlineClasses = (color: ColorScheme) => {
  switch (color) {
    case "brand":
      return "text-brand hover:text-white border-[2px] border-brand bg-transparent focus-visible:outline-accent hover:bg-brand/70 active:bg-brand/80";
    case "accent":
        return "text-accent hover:text-white border-[2px] border-accent bg-transparent focus-visible:outline-accent hover:bg-accent/70 active:bg-accent/70";
    case "gray":
      return "text-gray-800 border-[1px] border-gray-200 bg-transparent focus-visible:outline-gray-600 hover:bg-gray-50";
    case "red":
      return "text-red-500 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-red-600 hover:bg-red-50";
    case "yellow":
      return "text-yellow-600 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-yellow-600 hover:bg-yellow-50";
    case "green":
      return "text-green-500 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-green-600 hover:bg-green-50";
    case "blue":
      return "text-blue-600 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-blue-600 hover:bg-blue-50";
    case "indigo":
      return "text-indigo-500 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-indigo-600 hover:bg-indigo-50";
    case "purple":
      return "text-purple-500 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-purple-600 hover:bg-purple-50";
    case "pink":
      return "text-pink-600 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-pink-600 hover:bg-pink-50";
    case "teal":
      return "text-teal-600 border-[1px] border-[currentColor] bg-transparent focus-visible:outline-teal-600 hover:bg-teal-50";
  }
};

const generateSolidClasses = (color: ColorScheme) => {
  switch (color) {
    case "brand":
      return "text-white bg-brand hover:bg-brand/90 active:bg-brand/70 focus-visible:outline-brand";
      case "accent":
      return "text-white bg-accent hover:bg-accent/90 active:bg-accent/70 focus-visible:outline-accent";
    case "red":
      return "text-white bg-red-500 hover:bg-red-600 focus-visible:outline-red-600";
    case "blue":
      return "text-white bg-blue-500 hover:bg-blue-600 focus-visible:outline-blue-600";
    case "green":
      return "text-white bg-green-500 hover:bg-green-600 focus-visible:outline-green-600";
    case "yellow":
      return "bg-yellow-400 hover:bg-yellow-500 focus-visible:outline-yellow-600";
    case "purple":
      return "text-white bg-purple-500 hover:bg-purple-600 focus-visible:outline-purple-600";
    case "indigo":
      return "text-white bg-indigo-500 hover:bg-indigo-600 focus-visible:outline-indigo-600";
    case "gray":
      return "text-gray-800 bg-gray-100 hover:bg-gray-200 focus-visible:outline-gray-600";
    case "pink":
      return "text-white bg-pink-500 hover:bg-pink-600 focus-visible:outline-pink-600";
    case "teal":
      return "text-white bg-teal-500 hover:bg-teal-600 focus-visible:outline-teal-600";

    default:
      return "text-white bg-gray-500 hover:bg-gray-600 focus-visible:outline-gray-600";
  }
};

function Button({
  children,
  colorScheme = "brand",
  variant = "outline",
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  const bgClasses = getColorClass(variant, colorScheme)
    const buttonClasses = classNames(
      'mt-16 rounded-full h-[56px] px-14 whitespace-nowrap',
      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
      bgClasses,
      {
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        'opacity-50 cursor-not-allowed': disabled || isLoading,
      }
    )

  return (
    <button {...props} className={buttonClasses} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
