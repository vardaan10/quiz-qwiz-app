import { Link } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useCallback, useEffect, useState } from "react"

import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

SplashScreen.preventAutoHideAsync()

SplashScreen.setOptions({
  duration: 1500,
  fade: true,
})

export default function Index() {
  const [appIsReady, setIsAppReady] = useState<boolean>(false)

  async function prepare() {
    try {
      // Pre-load fonts, make any API calls you need to do here
      // await Font.loadAsync(Entypo.font);
      // Artificially delay for two seconds to simulate a slow loading
      // experience. Remove this if you copy and paste the code!
      await new Promise((resolve) => setTimeout(resolve, 2000))
    } catch (e) {
      console.warn(e)
    } finally {
      setIsAppReady(true)
    }
  }

  useEffect(() => {
    prepare()
  }, [])

  const onLayoutRootView = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hide()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <ThemedView className="flex-1 items-center justify-center" onLayout={onLayoutRootView}>
      <ThemedText type="title">SplashScreen Demo! 👋</ThemedText>
      <Link href="/login">
        <ThemedText type="link">Login</ThemedText>
      </Link>
    </ThemedView>
  )
}
