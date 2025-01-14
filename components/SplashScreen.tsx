import { useEffect } from "react"
import { Image } from "react-native"
import { useRouter } from "expo-router"

import { ThemedView } from "@/components/ThemedView"

export default function SplashScreen() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <ThemedView className="flex-1 items-center justify-center">
      <Image source={require("../assets/images/app-logo.png")} className="w-60 h-60" />
    </ThemedView>
  )
}
