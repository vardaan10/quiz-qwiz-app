import { Text, Button, SafeAreaView } from "react-native"

import { useAuth } from "@/lib/context/auth"

const Index = () => {
  const { authState, logout } = useAuth()

  async function handleLogout() {
    await logout()
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>{authState?.authenticated ? "Authenticated" : "Not authenticated"}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  )
}

export default Index
