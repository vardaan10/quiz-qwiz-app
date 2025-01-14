import { TextInput, type TextInputProps } from "react-native"

import { useColorScheme } from "@/hooks/useColorScheme"

interface ThemedTextInputProps extends TextInputProps {
  className?: string
}

export const ThemedTextInput = ({ className, ...rest }: ThemedTextInputProps) => {
  const colorTheme = useColorScheme()

  return (
    <TextInput
      className={`${className} border p-4 rounded-sm text-2xl ${
        colorTheme === "dark" ? "border-gray-500 text-white" : "border-gray-300"
      }`}
      {...rest}
    />
  )
}
