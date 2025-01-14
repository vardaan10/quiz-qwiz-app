import { Text, type TextProps } from "react-native"

import { useThemeColor } from "@/hooks/useThemeColor"

export interface ThemedTextProps extends TextProps {
  lightColor?: string
  darkColor?: string
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link"
}

export const ThemedText = ({
  style,
  lightColor,
  darkColor,
  type = "default",
  className,
  ...rest
}: ThemedTextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text")
  const dynamicClassName = {
    title: "text-3xl font-bold",
    subtitle: "text-xl font-semibold",
    link: "text-base leading-[30px] !text-blue-400",
    defaultSemiBold: "text-base font-semibold",
    default: "text-base",
  }[type]

  return <Text style={{ color }} className={`${dynamicClassName} ${className}`} {...rest} />
}
