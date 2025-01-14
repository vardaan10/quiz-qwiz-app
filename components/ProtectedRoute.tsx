import { useEffect } from "react"
import { router, Stack, useSegments } from "expo-router"

import { useAuth } from "@/lib/context/auth"

export default function ProtectedRoute() {
  const { authState, isLoading } = useAuth()
  const segments = useSegments()

  useEffect(() => {
    if (!isLoading) {
      const isProtected = segments[0] === "(protected)"

      if (isProtected && !authState?.authenticated) {
        router.replace("/login")
      } else if (!isProtected && authState?.authenticated) {
        router.replace("/(protected)")
      }
    }
  }, [authState, isLoading, segments])

  if (isLoading) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="terms"
        options={{
          title: "Terms & Conditions",
          headerShown: true,
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  )
}
