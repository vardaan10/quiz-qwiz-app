import React, { useEffect } from "react"
import { router, Slot, useSegments } from "expo-router"

import "@/global.css"
import { AuthProvider, useAuth } from "@/lib/context/auth"

function ProtectedRoute() {
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

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProtectedRoute />
    </AuthProvider>
  )
}
