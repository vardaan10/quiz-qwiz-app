import { Link } from "expo-router"
import { useState, Fragment } from "react"
import { Pressable, Button, Alert } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { useAuth } from "@/lib/context/auth"
import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"
import { useColorScheme } from "@/hooks/useColorScheme"
import { ThemedTextInput } from "@/components/ThemedTextInput"

export default function Login() {
  const [username, setUsername] = useState<string>("")
  const [otp, setOtp] = useState<string>("")
  const [checked, setChecked] = useState<boolean>(false)
  const [showOTPInput, setShowOTPInput] = useState<boolean>(false)

  const { requestOTP, verifyOTP } = useAuth()

  async function handleRequestOtp() {
    if (!username && checked) {
      Alert.alert("Alert", "Please enter a username")
    }

    if (!checked) {
      Alert.alert("Alert", "Terms and conditions are mandatory")
    }

    await requestOTP(username)
    setShowOTPInput(true)
  }

  async function handleVerifyOTP() {
    await verifyOTP(username, otp)
  }

  const toggleCheck = () => setChecked(!checked)
  const colorTheme = useColorScheme()

  return (
    <ThemedView className="flex-1 items-center justify-center bg-white">
      <ThemedView
        className={`border rounded-md p-4 flex-col gap-4 w-3/4 ${
          colorTheme === "dark" ? "border-gray-500" : "border-gray-300"
        }`}
      >
        <ThemedView className="flex-col gap-3">
          <ThemedText type="subtitle">User</ThemedText>
          <ThemedTextInput
            onChangeText={setUsername}
            placeholder="Enter username"
            value={username}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!showOTPInput}
          />
        </ThemedView>
        {!showOTPInput ? (
          <Fragment>
            <ThemedView className="flex-row items-center rounded-md">
              <Pressable onPress={toggleCheck}>
                {checked ? (
                  <MaterialIcons
                    name="check-box"
                    size={24}
                    color={colorTheme === "dark" ? "greenyellow" : "blue"}
                  />
                ) : (
                  <MaterialIcons name="check-box-outline-blank" size={24} color="dimgray" />
                )}
              </Pressable>
              <ThemedText>
                Agree with{" "}
                <Link href="/terms">
                  <ThemedText type="link" className="text-[greenyellow]">
                    terms and conditions
                  </ThemedText>
                </Link>
              </ThemedText>
            </ThemedView>

            <Button onPress={handleRequestOtp} title="Get OTP" color="greenyellow" />
          </Fragment>
        ) : (
          <Fragment>
            <ThemedView className="flex-col gap-3">
              <ThemedText type="subtitle">OTP</ThemedText>
              <ThemedTextInput
                onChangeText={setOtp}
                placeholder="Enter OTP"
                value={otp}
                keyboardType="numeric"
              />
            </ThemedView>
            <Button onPress={handleVerifyOTP} title="Verify OTP" color="greenyellow" />
          </Fragment>
        )}
      </ThemedView>
    </ThemedView>
  )
}
