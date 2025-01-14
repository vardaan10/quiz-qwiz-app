import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"

import "@/global.css"
import { AuthProvider } from "@/lib/context/auth"
import ProtectedRoute from "@/components/ProtectedRoute"
import { useColorScheme } from "@/hooks/useColorScheme"

export default function RootLayout() {
  const colorScheme = useColorScheme()

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ProtectedRoute />
      </ThemeProvider>
    </AuthProvider>
  )
}
