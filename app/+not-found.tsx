import React from "react"
import { Link } from "expo-router"
import { View } from "react-native"

export default function NotFoundScreen() {
  return (
    <>
      <View className="flex-1 items-center justify-center bg-[#25292e]">
        <Link href="/" className="text-white underline text-xl">
          Go back to home screen!
        </Link>
      </View>
    </>
  )
}
