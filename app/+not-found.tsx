import { Fragment } from "react"
import { Link, Stack } from "expo-router"

import ThemedText from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen
        options={{ title: "Oops!", headerShown: true, headerBackButtonDisplayMode: "minimal" }}
      />
      <ThemedView className="flex-1 items-center justify-center p-5">
        <ThemedText type="title">This screen doesn&apos;t exist.</ThemedText>
        <Link href="/" className="text-white underline text-xl mt-4 py-4">
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link>
      </ThemedView>
    </Fragment>
  )
}
